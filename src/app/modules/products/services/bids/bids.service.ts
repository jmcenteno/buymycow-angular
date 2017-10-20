import { Injectable } from '@angular/core';
import { database } from 'firebase';

@Injectable()
export class BidsService {

  constructor() { }

  getBidsByProduct(id) {

    return database().ref(`bids/${id}`);
    
  }

}
