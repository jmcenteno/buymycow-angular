import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_NAME } from '../../../../config/app';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: any[];
  subs: any;

  constructor(
    private titleService: Title,
    private productsService: ProductsService) {

    this.subs = {};

  }

  ngOnInit() {

    this.titleService.setTitle(`${APP_NAME} - Products`);

    this.getProducts();

  }

  ngOnDestroy() {

    Object.keys(this.subs).forEach(key => this.subs[key].unsubscribe());

  }

  private getProducts() {

    this.productsService.productList.on('value', (snapshot: any) => {

      const data = [];

      snapshot.forEach((item: any) => {

        data.push({
          key: item.key,
          ...item.val()
        });

      });

      this.products = data;

    });

  }

}
