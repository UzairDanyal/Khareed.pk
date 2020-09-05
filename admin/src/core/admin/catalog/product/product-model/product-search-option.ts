/*
 * khareed.pk
 
 * uzair usama
 */

export class ProductSearchOptionModel {
  public name: string;
  public optionId: number;

  constructor(productSearchResponse: any) {
    this.name = productSearchResponse.name || '';
    this.optionId = productSearchResponse.optionId || 0;
  }
}
