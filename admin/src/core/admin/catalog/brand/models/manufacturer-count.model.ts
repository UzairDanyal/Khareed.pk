/*
 * khareed.pk
 
 * uzair usama
 */
export class ManufacturerCountModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: boolean;

  constructor(manufactuerCountFrom: any) {
    this.limit = manufactuerCountFrom.limit || 0;
    this.offset = manufactuerCountFrom.offset || 0;
    this.keyword = manufactuerCountFrom.keyword || '';
    this.count = manufactuerCountFrom.count || false;
  }
}
