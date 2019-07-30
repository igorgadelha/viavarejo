import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { OrdersService } from './services/orders/orders.service';
@NgModule({
  declarations: [
    NewSaleComponent,
    ListSaleComponent
  ],
  exports: [
    NewSaleComponent,
    ListSaleComponent
  ],
  entryComponents: [
    NewSaleComponent,
    ListSaleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [
    OrdersService
  ]
})
export class SalesModule { }
