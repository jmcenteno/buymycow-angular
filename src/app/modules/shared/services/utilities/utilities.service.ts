import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class UtilitiesService {

  constructor() { }

  getRemainingTime(endDate): any {
    
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
