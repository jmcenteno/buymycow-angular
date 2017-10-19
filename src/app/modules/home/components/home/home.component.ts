import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../../../config/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  constructor() { 

    this.title = APP_NAME;
    
  }

  ngOnInit() {
  }

}
