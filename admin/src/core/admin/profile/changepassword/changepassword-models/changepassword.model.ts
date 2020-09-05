/*
 * khareed.pk
 * uzair usama
 
 */
export class ChangePasswordForm {
  public oldPassword: String;
  public newPassword: String;

  constructor(changePasswordForm: any) {
    this.oldPassword = changePasswordForm.oldpsw || '';
    this.newPassword = changePasswordForm.newpsw || '';
  }
}
