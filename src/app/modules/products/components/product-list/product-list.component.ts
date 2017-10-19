import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: any[];
  subs: any;

  constructor(private productsService: ProductsService) {

    this.subs = {};

  }

  ngOnInit() {

    this.subs.products = this.productsService.productList.subscribe(data => {
      this.products = data;
    });

  }

  ngOnDestroy() {

    Object.keys(this.subs).forEach(key => this.subs[key].unsubscribe());

  }

}
