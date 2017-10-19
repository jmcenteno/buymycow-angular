import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIREBASE_CONFIG } from './config/firebase';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    HomeModule,
    ProductsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
