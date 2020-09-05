/*
 * khareed.pk
 
 * uzair usama
 */
import { Map, Record } from 'immutable';

export interface PersonalizeOrderState extends Map<string, any> {
  newPersonalizeOrder: any;
  getPersonalizeOrder: any;
}

export const PersonalizeOrderRecordState = Record({
  newPersonalizeOrder: {},
  getPersonalizeOrder: {}
});
