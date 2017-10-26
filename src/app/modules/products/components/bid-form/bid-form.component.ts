import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { BidsService } from '../../services/bids/bids.service';
import { UserService } from '../../../shared/services/user/user.service';
import { ValidationService } from '../../../shared/services/validation/validation.service';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.scss']
})
export class BidFormComponent implements OnInit, OnChanges {

  @Input() product: any;
  @Input() bids: any;

  form: FormGroup;
  error: any;
  bidAdded: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private bidsService: BidsService,
    private userService: UserService
  ) { }

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

    this.bidsService.createBid(bid, this.product)
      .then(() => {

        this.error = null;
        this.bidAdded = true;

        setTimeout(() => {
          this.bidAdded = false;
        }, 5000);

      })
      .catch((error) => {

        this.error = error;

      });

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
