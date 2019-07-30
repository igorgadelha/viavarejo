import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.scss']
})
export class ListSaleComponent implements OnInit {
  orders = [];
  constructor( private ordersService: OrdersService ) { }

  ngOnInit() {
    this.ordersService.getAll()
      .subscribe( orders =>{ return this.orders =  orders; });
  }

  total () {
    let total:number = 0;
    for ( let order of this.orders ) {
      if ( order.typeTransacion == 'venda') {
        total = total + order.price;
      } else {
        total = total - order.price;
      }
    }
    return total;
  }

}
