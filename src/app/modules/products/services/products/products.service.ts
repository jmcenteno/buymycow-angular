import { Injectable } from '@angular/core';
import { database } from 'firebase';

@Injectable()
export class ProductsService {

  constructor() { }

  get productList() {

    return database().ref('products')

  }

  getProductDetails(id) {

    return database().ref(`products/${id}`);

  }

}
