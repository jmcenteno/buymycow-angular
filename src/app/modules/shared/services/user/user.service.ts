import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {

  private user: BehaviorSubject<any>;

  constructor() { 

    this.user = new BehaviorSubject<any>(null);

  }

  get currentUser(): Observable<any> {
    return this.user;
  }

  setCurrentUser(user) {
    this.user.next(user);
  }

}
