/*
 * khareed.pk
 
 * uzair usama
 */

export class CategoryModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: boolean;

  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || '';
    this.offset = categorylistForm.offset || '';
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || '';
    this.count = categorylistForm.count || false;
  }
}
