/*
 * khareed.pk
 
 * uzair usama
 */
export class PersonalizeOrderResponseModel {
  public invoicePrefix: string;
  public orderStatus: number;

  constructor(Sitesettingresponse: any) {
    this.invoicePrefix = Sitesettingresponse.invoicePrefix || '';
    this.orderStatus = Sitesettingresponse.orderStatus || 0;
  }
}
