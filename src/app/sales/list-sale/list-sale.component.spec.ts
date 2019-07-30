import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleComponent } from './list-sale.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';
describe('ListSaleComponent', () => {
  let component: ListSaleComponent;
  let fixture: ComponentFixture<ListSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ListSaleComponent, HeaderComponent ],
      providers: [ OrdersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
