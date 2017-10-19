import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product: any;

  private timer: NodeJS.Timer;
  remainingTime: any;

  constructor() { }

  ngOnInit() {

    this.remainingTime = this.getRemainingTime(this.product.endDate);

    this.timer = setInterval(() => {
      this.remainingTime = this.getRemainingTime(this.product.endDate);
    }, 1000);

  }

  private getRemainingTime(endDate): any {

    let remainingTime: any = {
      interval: 'minute(s)',
      difference: 0
    }
  
    const intervals: any[] = ['day', 'hour', 'minute'];
    
    for (let i = 0; i < intervals.length; i++) {
      
      const difference: any = moment(new Date(endDate)).diff(moment(), <any>`${intervals[i]}s`);
      
      if (difference > 0) {
        remainingTime = { interval: `${intervals[i]}(s)`, difference };
        break;
      }
  
    }
  
    return remainingTime;

  }

}
