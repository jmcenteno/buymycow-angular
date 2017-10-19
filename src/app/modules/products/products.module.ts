import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent],
  exports: [
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
