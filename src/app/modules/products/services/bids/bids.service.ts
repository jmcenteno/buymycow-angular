import { Injectable } from '@angular/core';
import { database } from 'firebase';

import { UtilitiesService } from '../../../shared/services/utilities/utilities.service';

@Injectable()
export class BidsService {

  constructor(private utils: UtilitiesService) { }

  getBidsByProduct(id) {

    return database().ref(`bids/${id}`);

  }

  createBid(bid: any, product: any): Promise<any[]> {

    return new Promise((resolve, reject) => {

      const ref = database().ref(`/bids/${product.key}`);

      ref.once('value', (snapshot) => {

        const remainingTime = this.utils.getRemainingTime(product.endDate);

        if (remainingTime.difference && !product.sold) {

          ref.push(bid, (error) => {

            if (error) {

              reject({
                message: 'Your bid cannot be placed at this time. Please try again later.'
              });

            } else {

              resolve(bid);

            }

          });

        } else {

          reject({
            message: 'This auction is no longer active.'
          });

        }

      });

    });

  }

}
