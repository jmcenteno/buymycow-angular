import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ValidationService } from './services/validation/validation.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, FooterComponent, PageNotFoundComponent, PageHeaderComponent, SpinnerComponent],
  providers: [
    ValidationService
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    
    return {
      ngModule: SharedModule,
      providers: []
    };

  }

}
