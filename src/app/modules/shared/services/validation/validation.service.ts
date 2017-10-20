import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as validator from 'validator';

@Injectable()
export class ValidationService {

  constructor() { }

  isEmail(control: FormControl) {

    const invalid: any = {
      email: {
        valid: false
      }
    };

    const { value } = control;
  
    return (
      value == '' || validator.isEmail(value) ? 
      null : 
      invalid
    );
  
  }

  isNumeric(control: FormControl) {

    const invalid: any = {
      numeric: {
        valid: false
      }
    };

    const { value } = control;

    if (value && (validator.isNumeric(value.toString()) || validator.isFloat(value.toString()))) {
      return null;
    }

    return value == '' ? null : invalid;

  }

}
