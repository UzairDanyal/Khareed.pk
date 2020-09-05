/*
 * khareed.pk
 
 * uzair usama
 */
export class OrderstatusForm {
  public name: String;
  public status: number;
  public id: number;
  public colorCode: string;

  constructor(OrderstatuForm: any) {
    this.name = OrderstatuForm.name || '';
    this.status = OrderstatuForm.status || 0;
    this.colorCode = OrderstatuForm.colorcode || '';
    if (OrderstatuForm.orderStatusId) {
      this.id = OrderstatuForm.orderStatusId || '';
    }
  }
}
