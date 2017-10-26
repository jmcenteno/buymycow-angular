import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_NAME } from '../../../../config/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  constructor(private titleService: Title) {

    this.title = APP_NAME;

  }

  ngOnInit() {

    this.titleService.setTitle(`${APP_NAME} - Home`);

  }

}
