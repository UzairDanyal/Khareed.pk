/*
 * khareed.pk
 
 * uzair usama
 */
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromseosettings from '../seo-reducer/seo-reducer';

export const getSeoState = (state: AppState) => state.seosetting;
export const getNewseo = createSelector(
  getSeoState,
  fromseosettings.getnewseo
);
export const getseo = createSelector(
  getSeoState,
  fromseosettings.getseo
);
