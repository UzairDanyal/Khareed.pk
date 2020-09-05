/*
 * khareed.pk
 
 * uzair usama
 */
export class ProductModel {
  public categoryProductCount: number;
  public itemsPerPage: number;

  constructor(generalsettingForm: any) {
    this.categoryProductCount = generalsettingForm.categoryProductCount || 0;
    this.itemsPerPage = generalsettingForm.itemPage || 0;
  }
}
