import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ValidationService } from './services/validation/validation.service';
import { UtilitiesService } from './services/utilities/utilities.service';
import { UserService } from './services/user/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  declarations: [NavbarComponent, FooterComponent, PageNotFoundComponent, PageHeaderComponent, SpinnerComponent, ModalComponent],
  providers: [
    ValidationService,
    UtilitiesService,
    UserService
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    SpinnerComponent,
    ModalComponent
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
