/*
 * khareed.pk
 * uzair usama
 
 */

export class ForgotResponseModel {
  // Declare Default Params

  public user: any = {};
  constructor(forgotFormResponse: any) {
    this.user = forgotFormResponse || '';
  }
}
