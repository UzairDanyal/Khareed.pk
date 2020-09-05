/*
 * khareed.pk
 * uzair usama
 
 */

export class ForgotForm {
  // Declare Default Params
  public email: String;
  constructor(forgotForm: any) {
    this.email = forgotForm.email || '';
  }
}
