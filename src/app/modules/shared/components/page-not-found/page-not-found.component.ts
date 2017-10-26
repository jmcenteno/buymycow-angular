import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_NAME } from '../../../../config/app';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle(`${APP_NAME} - Page Not Found`);

  }

}
