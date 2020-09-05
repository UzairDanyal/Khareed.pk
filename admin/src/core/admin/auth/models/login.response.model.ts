/*
 * khareed.pk
 * uzair usama
 
 */

export class LoginResponseModel {
  // Declare Default Params

  public accessToken: string;
  public userdetails: any;

  constructor(loginFormResponse: any) {
    if (loginFormResponse.data) {
      this.accessToken = loginFormResponse.data.token || '';
      this.userdetails = loginFormResponse.data.user || {};
    }
  }

  /**
   * Saves user into local storage
   */
  public save(): void {
    localStorage.setItem('userdetail', JSON.stringify(this));
    localStorage.setItem('editProfile', JSON.stringify(this));
  }

  /**
   * Saves user into local storage
   */
  public remove(): void {
    localStorage.removeItem('defaultlanguage');
    localStorage.removeItem('userdetail');
    localStorage.removeItem('editProfile');
    localStorage.removeItem('itemsPerPage');
  }
}
