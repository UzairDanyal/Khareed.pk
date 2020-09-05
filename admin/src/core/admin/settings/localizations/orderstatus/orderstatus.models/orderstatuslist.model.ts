/*
 * khareed.pk
 
 * uzair usama
 */
export class OrderStatusListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: boolean;
  public status: number;

  constructor(orderstatuslistForm: any) {
    this.limit = orderstatuslistForm.limit || 0;
    this.offset = orderstatuslistForm.offset || 0;
    this.keyword = orderstatuslistForm.keyword || '';
    this.count = false;
    this.status = orderstatuslistForm.status || '';
  }
}
