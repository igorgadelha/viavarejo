import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
// interface
import { Order } from './order';
describe('OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
    providers: [OrdersService]
  }));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });

  // it('test get data', () => {
  //   let service: OrdersService = new OrdersService ();
  //   service.getAll().subscribe( result => expect(result.length).toBeGreaterThan(0) );
  // });

});
