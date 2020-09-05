/*
 * khareed.pk
 * uzair usama
 
 */
import { Map, Record } from 'immutable';

export interface CommonState extends Map<string, any> {
  logout: any;
}

export const CommonStateRecord = Record({
  logout: {}
});
