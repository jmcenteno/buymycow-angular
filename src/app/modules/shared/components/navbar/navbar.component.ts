import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../../../config/app.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;
  collapsed: boolean;

  constructor() {

    this.title = APP_NAME;
    this.collapsed = true;

  }

  ngOnInit() {
  }

  toggleMenu() {

    this.collapsed = !this.collapsed;

  }

}
