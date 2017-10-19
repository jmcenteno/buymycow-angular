import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products/products.service';
import { BidsService } from './services/bids/bids.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, ProductGridComponent, SingleProductComponent],
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
