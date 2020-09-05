/*
 * khareed.pk
 
 * uzair usama
 */

export class ProductRatingListModel {
  public limit: number;
  public offset: number;
  public productId: number;
  public count: string;

  constructor(fromProductRatingList: any) {
    this.limit = fromProductRatingList.limit || 0;
    this.offset = fromProductRatingList.offset || 0;
    this.productId = fromProductRatingList.productId || 0;
    this.count = fromProductRatingList.count || '';
  }
}
