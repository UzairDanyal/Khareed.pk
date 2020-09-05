/*
 * khareed.pk
 * uzair usama
 
 */

export class LoginForm {
  // Declare Default Params

  public username: String;
  public password: String;
  constructor(loginForm: any) {
    this.username = loginForm.username || '';
    this.password = loginForm.password || '';
  }
}
