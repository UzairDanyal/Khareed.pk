/*
 * khareed.pk
 
 * uzair usama
 */
export class PageslistModel {
  public limit: number;
  public offset: number;
  public keyword: string;

  constructor(PagesListForm: any) {
    this.limit = PagesListForm.limit || 0;
    this.offset = PagesListForm.offset || 0;
    this.keyword = PagesListForm.keyword || '';
  }
}
