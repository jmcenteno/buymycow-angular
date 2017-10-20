import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidationService } from '../../../shared/services/validation/validation.service';

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

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {

    this.setUser = new EventEmitter<any>();
    this.submit = new EventEmitter<any>();

  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      amount: new FormControl(Number.parseFloat(this.product.minimumBid).toFixed(2), Validators.compose([
        Validators.required,
        Validators.min(this.product.minimumBid),
        this.validationService.isNumeric
      ]))
    });

  }

  handleSubmit(e: Event) {

    e.preventDefault();

    this.submit.emit(this.form.value);

  }

  formatAmount(value) {

    const { amount } = this.form.controls;

    if (amount.valid) {
      amount.setValue(Number.parseFloat(amount.value).toFixed(2));
    }

  }

}
