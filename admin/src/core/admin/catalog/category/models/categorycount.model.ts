/*
 * khareed.pk
 
 * uzair usama
 */

export class CategorycountForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: string;

  constructor(categorycountForm: any) {
    this.limit = categorycountForm.limit || '';
    this.offset = categorycountForm.offset || '';
    this.keyword = categorycountForm.keyword || '';
    this.sortOrder = categorycountForm.sortOrder || '';
    this.count = categorycountForm.count || '';
  }
}
