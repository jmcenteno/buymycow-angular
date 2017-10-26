import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highest-bidder',
  templateUrl: './highest-bidder.component.html',
  styleUrls: ['./highest-bidder.component.scss']
})
export class HighestBidderComponent implements OnInit {

  @Input() bid: any;

  constructor() { }

  ngOnInit() {
  }

}
