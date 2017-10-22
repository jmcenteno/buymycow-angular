import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { UtilitiesService } from '../../../shared/services/utilities/utilities.service';

@Component({
  selector: 'app-remaining-time',
  templateUrl: './remaining-time.component.html',
  styleUrls: ['./remaining-time.component.scss']
})
export class RemainingTimeComponent implements OnInit, OnDestroy {

  @Input() product: any;

  timer: NodeJS.Timer;
  remainingTime: any;

  constructor(private utils: UtilitiesService) { }

  ngOnInit() {

    this.remainingTime = this.utils.getRemainingTime(this.product.endDate);

    this.timer = setInterval(() => {

      this.remainingTime = this.utils.getRemainingTime(this.product.endDate);

    }, 1000);

  }

  ngOnDestroy() {

    clearInterval(this.timer);

  }

}
