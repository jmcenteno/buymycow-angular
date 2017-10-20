import { Component, OnInit, Input } from '@angular/core';
import Numeral from 'numeral';

@Component({
  selector: 'app-current-price',
  templateUrl: './current-price.component.html',
  styleUrls: ['./current-price.component.scss']
})
export class CurrentPriceComponent implements OnInit {

  @Input() bids: any[];
  @Input() product: any;
  
  currentPrice: number;

  constructor() { }

  ngOnInit() {

    this.currentPrice = (
      this.bids.length ?
        this.bids[0].amount :
        this.product.initialPrice
    );

  }

}
