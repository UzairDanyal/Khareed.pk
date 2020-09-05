/*
 * khareed.pk
 
 * uzair usama
 */
import { Map, Record } from 'immutable';

export interface GeneralsettingState extends Map<string, any> {
  newgeneralsettings: any;
  getgeneralsetting: any;
}

export const GeneralsettingRecordState = Record({
  newgeneralsettings: {},
  getgeneralsetting: {}
});
