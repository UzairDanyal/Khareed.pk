/*
 * khareed.pk
 
 * uzair usama
 */
import { AppState } from '../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromGenralsetting from './generalsetting.reducer';

export const getGeneralSettingState = (state: AppState) => state.generalsetting;
export const getNewGeneralSettings = createSelector(
  getGeneralSettingState,
  fromGenralsetting.getNewGeneralsettings
);
export const getGeneralSettings = createSelector(
  getGeneralSettingState,
  fromGenralsetting.getGeneralsettings
);
