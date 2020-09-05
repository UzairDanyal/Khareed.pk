/*
 * khareed.pk
 * uzair usama
 
 */
import { Map, Record } from 'immutable';

export interface ChangePasswordState extends Map<string, any> {
  changePasword: any;
  changepasswordResponse: boolean;
  changepasswordRequestLoading: boolean;
  changepasswordRequestLoaded: boolean;
  changepasswordRequestFailed: boolean;
}

export const ChangePasswordRecordState = Record({
  changePasword: [],
  changepasswordResponse: false,
  changepasswordRequestLoading: false,
  changepasswordRequestLoaded: false,
  changepasswordRequestFailed: false
});
