/*
 * khareed.pk
 
 * uzair usama
 */

export class CategorylistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public status: string;
  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || '';
    this.offset = categorylistForm.offset || '';
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || '';
    this.status = categorylistForm.status || '';
  }
}
