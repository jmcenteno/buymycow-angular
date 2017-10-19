import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    HomeModule,
    ProductsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
