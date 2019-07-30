import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrdersService } from '../services/orders/orders.service';
import { CommonModule } from '@angular/common';

import { NewSaleComponent } from './new-sale.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NewSaleComponent', () => {
  let component: NewSaleComponent;
  let fixture: ComponentFixture<NewSaleComponent>;

  beforeEach(async(() => {
    // create new instance of FormBuilder
    const formBuilder: FormBuilder = new FormBuilder();;

    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ NewSaleComponent, HeaderComponent ],
      imports: [ CommonModule, ReactiveFormsModule ],
      providers: [
                  { provide: FormBuilder, useValue: formBuilder },
                  OrdersService
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
