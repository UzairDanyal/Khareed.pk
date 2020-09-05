/*
 * khareed.pk
 
 * uzair usama
 */
export class OrderModel {
  public invoicePrefix: string;
  public orderStatus: number;

  constructor(generalsettingForm: any) {
    this.invoicePrefix = generalsettingForm.invoicePrefix || '';
    this.orderStatus = generalsettingForm.orderStatus || 0;
  }
}
