/*
 * khareed.pk
 * uzair usama
 
 */

export class VieworderResponseModel {
  public orderDetails: any = {};

  constructor(Vieworder: any) {
    this.orderDetails = Vieworder || '';
  }
}
