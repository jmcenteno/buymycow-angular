import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { UtilitiesService } from '../../../shared/services/utilities/utilities.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit, OnDestroy {

  @Input() product: any;

  private timer: NodeJS.Timer;
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
