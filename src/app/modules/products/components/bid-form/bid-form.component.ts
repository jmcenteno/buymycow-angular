import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../shared/services/user/user.service';
import { ValidationService } from '../../../shared/services/validation/validation.service';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.scss']
})
export class BidFormComponent implements OnInit {

  @Input() product: any;
  @Input() bids: any;

  @Output() onSubmit: EventEmitter<any>;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private userService: UserService
  ) {

    this.onSubmit = new EventEmitter<any>();

  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      amount: new FormControl(Number(this.getCurrentPrice()) + 1, Validators.compose([
        Validators.required,
        Validators.min(Number(this.getCurrentPrice()) + 1),
        this.validationService.isNumeric
      ]))
    });

    this.userService.currentUser.subscribe((user) => {
      this.form.controls['user'].setValue(user);
    });

  }

  ngOnChanges() {

    if (this.form) {
      this.form.controls['amount'].setValue(Number(this.getCurrentPrice()) + 1);
    }

  }

  handleSubmit(e: Event) {

    e.preventDefault();

    const bid: any = Object.assign({}, this.form.value, { 
      date: (new Date()).toISOString()
    });

    this.onSubmit.emit(bid);

  }

  setUser(value) {

    this.userService.setCurrentUser(value);

  }

  formatAmount(value) {

    const { amount } = this.form.controls;

    if (amount.valid) {
      amount.setValue(Number.parseFloat(amount.value));
    }

  }

  private getCurrentPrice() {

    return (
      this.bids.length ?
      this.bids[0].amount :
      this.product.initialPrice
    );

  }

}
