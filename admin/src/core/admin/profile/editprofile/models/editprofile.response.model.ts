/*
 * khareed.pk
 * uzair usama
 
 */
export class EditprofileResponseModel {
  public user: any = {};

  constructor(EditprofilesResponseModel: any) {
    this.user = EditprofilesResponseModel || '';
  }
}
