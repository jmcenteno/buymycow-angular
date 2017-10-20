import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products/products.service';
import { BidsService } from './services/bids/bids.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CurrentPriceComponent } from './components/current-price/current-price.component';
import { HighestBidderComponent } from './components/highest-bidder/highest-bidder.component';
import { BidHistoryComponent } from './components/bid-history/bid-history.component';
import { RemainingTimeComponent } from './components/remaining-time/remaining-time.component';
import { BidFormComponent } from './components/bid-form/bid-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, ProductGridComponent, SingleProductComponent, CurrentPriceComponent, HighestBidderComponent, BidHistoryComponent, RemainingTimeComponent, BidFormComponent],
  providers: [
    ProductsService,
    BidsService
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
