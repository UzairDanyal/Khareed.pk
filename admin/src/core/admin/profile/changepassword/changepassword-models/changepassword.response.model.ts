/*
 * khareed.pk
 * uzair usama
 
 */
export class ChangepasswordResponseModel {
  public user: any = {};

  constructor(changepasswordResponse: any) {
    this.user = changepasswordResponse || '';
  }
}
