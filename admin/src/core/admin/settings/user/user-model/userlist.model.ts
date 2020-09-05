/*
 * khareed.pk
 * uzair usama
 
 */
export class UserlistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(userlistForm: any) {
    this.limit = userlistForm.limit || '';
    this.offset = userlistForm.offset || '';
    this.keyword = userlistForm.keyword || '';
    this.count = userlistForm.count || '';
  }
}
