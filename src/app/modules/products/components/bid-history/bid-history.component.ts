import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.scss']
})
export class BidHistoryComponent implements OnInit {

  @Input() bids: any;

  constructor() { }

  ngOnInit() {
  }

}
