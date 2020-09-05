/*
 * khareed.pk
 
 * uzair usama
 */
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromproductsettings from './product-reducer';

export const getPersonalizeProductState = (state: AppState) =>
  state.personalizeProduct;
export const getNewPersonalizeProduct = createSelector(
  getPersonalizeProductState,
  fromproductsettings.getnewPersonalizeProduct
);
export const getPersonalizeProduct = createSelector(
  getPersonalizeProductState,
  fromproductsettings.getPersonalizeProduct
);
