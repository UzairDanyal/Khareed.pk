/*
 * khareed.pk
 
 * uzair usama
 */

export class ManufacturerAddresponseModel {
  public name: string;
  public path: string;

  constructor(manufacturerAddresponse: any) {
    this.name = manufacturerAddresponse || '';
    this.path = manufacturerAddresponse || '';
  }
}
