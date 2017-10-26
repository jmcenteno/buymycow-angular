import { Component, OnInit, OnChanges, Input } from '@angular/core';
import Numeral from 'numeral';

@Component({
  selector: 'app-current-price',
  templateUrl: './current-price.component.html',
  styleUrls: ['./current-price.component.scss']
})
export class CurrentPriceComponent implements OnInit, OnChanges {

  @Input() bids: any[];
  @Input() product: any;

  currentPrice: number;

  constructor() { }

  ngOnInit() {

    this.currentPrice = this.getCurrentPrice();

  }

  ngOnChanges() {

    this.currentPrice = this.getCurrentPrice();

  }

  private getCurrentPrice() {

    return (
      this.bids.length ?
        this.bids[0].amount :
        this.product.initialPrice
    );

  }

}
