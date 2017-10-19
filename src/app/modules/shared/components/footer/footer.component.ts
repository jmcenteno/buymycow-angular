import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../../../config/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title: string;
  year: number;

  constructor() { 

    this.title = APP_NAME;
    this.year = (new Date()).getFullYear();

  }

  ngOnInit() {
  }

}
