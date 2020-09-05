/*
 * khareed.pk
 
 * uzair usama
 */
export class StockStatusListResponseModel {
  public stockStatusId: number;
  public name: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.stockStatusId = listResponse.stockStatusId || 0;
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
  }
}
