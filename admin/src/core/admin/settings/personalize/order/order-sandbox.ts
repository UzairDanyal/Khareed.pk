/*
 * khareed.pk
 
 * uzair usama
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import * as personalizeProductsetting from './order-action/order-action';
import * as personalizeOrdersetting from './order-action/order-action';
import * as store from '../../../../app.state.interface';
import { Router } from '@angular/router';
import { OrderModel } from './order-model/order-model';
import {
  getNewPersonalizeOrder,
  getPersonalizeOrder
} from './order-reducer/order-selector';

@Injectable()
export class PersonalizeOrderSandbox {
  public getPersonalizeOrder$ = this.appState.select(getPersonalizeOrder);

  constructor(protected appState: Store<store.AppState>) {}

  public createPersonalizeOrder(value) {
    this.appState.dispatch(
      new personalizeOrdersetting.DoNewOrderSettingAction(new OrderModel(value))
    );
  }

  public getPersonalizeOrder() {
    this.appState.dispatch(
      new personalizeOrdersetting.DoGetOrderSettingAction()
    );
  }
}
