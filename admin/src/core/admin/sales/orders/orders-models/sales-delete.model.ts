/*
 * khareed.pk
 
 * uzair usama
 */

export class SalesDeleteModel {
  public orderId: number;

  constructor(salesdeleteForm: any) {
    this.orderId = salesdeleteForm.orderId || '';
  }
}
