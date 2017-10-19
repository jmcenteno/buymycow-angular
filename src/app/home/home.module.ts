import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
