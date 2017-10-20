import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products/products.service';
import { BidsService } from '../../services/bids/bids.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  bids: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private bidsService: BidsService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {

      this.productService.getProductDetails(params.id)
        .on('value', (snapshot) => {

          if (snapshot.val()) {

            this.product = {
              key: params.id,
              ...snapshot.val()
            };

          }

        });

    });

  }

}
