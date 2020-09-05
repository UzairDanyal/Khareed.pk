/*
 * khareed.pk
 
 * uzair usama
 */
export class StockListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;
  public status: string;

  constructor(StocklistForm: any) {
    this.limit = StocklistForm.limit || 0;
    this.offset = StocklistForm.offset || 0;
    this.keyword = StocklistForm.keyword || '';
    this.count = StocklistForm.count || '';
    this.status = StocklistForm.status || '';
  }
}
