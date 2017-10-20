import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.scss']
})
export class BidFormComponent implements OnInit {

  @Input() product: any;
  @Input() bids: any;
  @Input() user: any;

  @Output() setUser: EventEmitter<any>;
  @Output() submit: EventEmitter<any>;

  constructor() {

    this.setUser = new EventEmitter<any>();
    this.submit = new EventEmitter<any>();

  }

  ngOnInit() {
  }

}
