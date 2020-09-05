/*
 * khareed.pk
 * uzair usama
 
 */
export class EmailTempListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(emailtemplistForm: any) {
    this.limit = emailtemplistForm.limit || '';
    this.offset = emailtemplistForm.offset || '';
    this.keyword = emailtemplistForm.keyword || '';
    this.count = emailtemplistForm.count || '';
  }
}
