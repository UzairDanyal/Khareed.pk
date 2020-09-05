/*
 * khareed.pk
 * uzair usama
 
 */
import { AppState } from '../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromCommon from './common.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getCommonState = (state: AppState) => state.common;
export const getlogOut = createSelector(
  getCommonState,
  fromCommon.getlogout
);