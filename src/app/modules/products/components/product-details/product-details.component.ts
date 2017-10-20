import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products/products.service';
import { BidsService } from '../../services/bids/bids.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  bids: any[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private bidsService: BidsService
  ) { 

    this.bids = [];

  }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      
      this.getProductDetails(params.id);
      this.getBidHistory(params.id);

    });

  }

  private getProductDetails(key: number) {

    this.productService.getProductDetails(key)
      .on('value', (snapshot) => {

        if (snapshot.val()) {

          this.product = { key, ...snapshot.val() };

        } else {

          this.router.navigate(['404'])
          
        }

      }, (error) => {

        this.router.navigate(['404'])

      });

  }

  private getBidHistory(key) {

    this.bidsService.getBidsByProduct(key)
      .on('value', (snapshot: any) => {

        const data = [];

        if (snapshot.val()) {

          snapshot.forEach((item: any) => {
            
            data.push({
              key: item.key,
              ...item.val()
            });
            
          });

          data.sort((a, b) => a.amount - b.amount);
          data.reverse();

        }

        this.bids = data;

      }, () => {

        this.bids = [];

      });

  }

}
