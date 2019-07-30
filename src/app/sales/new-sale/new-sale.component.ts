import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../services/orders/orders.service';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {
  transactionType: string[] = ['compra', 'venda'];
  form: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private ordersService: OrdersService ) {

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      typeTransacion: [null, Validators.required],
      name: [null, Validators.required],
      price: [null, Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]+([\.,][0-9]+)?")
      ])],
    });
  }

  onSubmit() {
    console.log (this.form.value);
    this.ordersService.set ( this.form.value );
  }

}
