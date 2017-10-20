import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIREBASE_CONFIG } from './config/firebase';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';

firebase.initializeApp(FIREBASE_CONFIG);

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
