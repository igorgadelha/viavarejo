import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
// interface
import { Order } from './order';
// STORAGE_KEY
const STORAGE_KEY = 'orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Order[] = [];
  userDataSource: BehaviorSubject<Array<Order>> = new BehaviorSubject([]);
  userData = this.userDataSource.asObservable();
  constructor( @Inject( LOCAL_STORAGE ) private storage: StorageService ) {
    let data = this.storage.get( STORAGE_KEY );
    console.log (data, this.userData);
    // console.log (this.userDataSource.next(data));
  }

  getAll () {
    this.userDataSource.next(this.getAllFast());
    return this.userData;
  }

  getAllFast () {
    return this.storage.get( STORAGE_KEY );
  }


  set ( item: Order ) {
    let orders: Order[] = [];
    if ( typeof this.getAllFast() != 'undefined' ) {
      orders = this.getAllFast();
    }
    orders.push(item);

    this.storage.set( STORAGE_KEY , orders );

    this.userDataSource.next(this.getAllFast());
    return true;
  }

}
