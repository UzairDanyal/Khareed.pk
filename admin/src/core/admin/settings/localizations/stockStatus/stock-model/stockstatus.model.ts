/*
 * khareed.pk
 
 * uzair usama
 */
export class StockStatusModel {
  public name: string;
  public status: number;
  public stockStatusId: number;

  constructor(stockstatusmodel: any) {
    this.name = stockstatusmodel.name || '';
    this.status = stockstatusmodel.status || 0;
    if (stockstatusmodel.stockStatusId) {
      this.stockStatusId = stockstatusmodel.stockStatusId || '';
    }
  }
}
