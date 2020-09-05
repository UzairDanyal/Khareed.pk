/*
 * khareed.pk
 
 * uzair usama
 */
import { Map, Record } from 'immutable';

export interface SeosettingState extends Map<string, any> {
  newSeo: any;
  getSeo: any;
}

export const SeosettingRecordState = Record({
  newSeo: {},
  getSeo: {}
});
