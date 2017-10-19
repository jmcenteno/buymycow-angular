import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  constructor(private db: AngularFirestore) { }

  get productList(): Observable<any[]> {

    return this.db.collection('products').valueChanges();

  }

}
