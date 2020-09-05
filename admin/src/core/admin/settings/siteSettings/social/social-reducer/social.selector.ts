/*
 * khareed.pk
 
 * uzair usama
 */
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromSocial from './social.reducer';

export const getSocialState = (state: AppState) => state.social;
export const getNewSocial = createSelector(
  getSocialState,
  fromSocial.getNewSocial
);
export const getSocial = createSelector(
  getSocialState,
  fromSocial.getSocial
);
