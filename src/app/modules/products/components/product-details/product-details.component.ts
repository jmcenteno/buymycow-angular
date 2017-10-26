import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { APP_NAME } from '../../../../config/app';
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
    private titleService: Title,
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

        const data = snapshot.val();

        if (data) {

          this.product = { key, ...data };

          this.titleService.setTitle(`${APP_NAME} - Products - ${data.name}`);

        } else {

          this.router.navigate(['404']);

        }

      }, (error) => {

        this.router.navigate(['404']);

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
