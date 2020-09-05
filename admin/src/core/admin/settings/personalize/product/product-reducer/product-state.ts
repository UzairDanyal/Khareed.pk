/*
 * khareed.pk
 
 * uzair usama
 */
import { Map, Record } from 'immutable';

export interface PersonalizeProductState extends Map<string, any> {
  newPersonalizeProduct: any;
  getPersonalizeProduct: any;
}

export const PersonalizeProductRecordState = Record({
  newPersonalizeProduct: {},
  getPersonalizeProduct: {}
});
