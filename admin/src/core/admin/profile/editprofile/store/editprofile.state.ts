/*
 * khareed.pk
 * uzair usama
 
 */
import { Map, Record } from 'immutable';

export interface EditprofileState extends Map<string, any> {
  editprofile: any;
  editprofileResponse: boolean;
  editprofileRequestLoading: boolean;
  editprofileRequestLoaded: boolean;
  editprofileRequestFailed: boolean;
}

export const EditprofileRecordState = Record({
  editprofile: [],
  editprofileResponse: false,
  editprofileRequestLoading: false,
  editprofileRequestLoaded: false,
  editprofileRequestFailed: false
});
