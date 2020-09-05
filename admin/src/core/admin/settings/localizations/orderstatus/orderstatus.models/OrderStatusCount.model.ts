/*
 * khareed.pk
 
 * uzair usama
 */
export class OrderStatusCountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: string;

  constructor(orderstatuslistForm: any) {
    this.limit = orderstatuslistForm.limit || 0;
    this.offset = orderstatuslistForm.offset || 0;
    this.keyword = orderstatuslistForm.keyword || '';
    this.count = orderstatuslistForm.count || '';
  }
}
