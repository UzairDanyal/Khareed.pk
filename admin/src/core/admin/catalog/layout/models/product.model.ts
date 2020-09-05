/*
 * khareed.pk
 
 * uzair usama
 */

export class ProductModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sku: string;
  public status: string;
  public price: number;
  public count: boolean;

  constructor(params: any) {
    this.limit = params.limit || 0;
    this.offset = params.offset || 0;
    this.keyword = params.keyword || '';
    this.sku = params.sku || '';
    this.status = params.status || '';
    this.price = params.price || '';
    this.count = params.count || false;
  }
}