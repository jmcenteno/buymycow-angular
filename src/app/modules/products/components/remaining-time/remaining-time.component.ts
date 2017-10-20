import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-remaining-time',
  templateUrl: './remaining-time.component.html',
  styleUrls: ['./remaining-time.component.scss']
})
export class RemainingTimeComponent implements OnInit, OnDestroy {

  @Input() product: any;

  timer: NodeJS.Timer;
  remainingTime: any;

  constructor() { }

  ngOnInit() {

    this.remainingTime = this.getRemainingTime(this.product.endDate);

    this.timer = setInterval(() => {

      this.remainingTime = this.getRemainingTime(this.product.endDate);

    }, 1000);

  }

  ngOnDestroy() {

    clearInterval(this.timer);

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
