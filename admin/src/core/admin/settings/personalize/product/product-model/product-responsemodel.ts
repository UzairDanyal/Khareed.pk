/*
 * khareed.pk
 
 * uzair usama
 */
export class PersonalizeProductResponsemodel {
  public categoryProductCount: number;
  public itemsPerPage: number;

  constructor(Sitesettingresponse: any) {
    this.categoryProductCount = Sitesettingresponse.categoryProductCount || 0;
    this.itemsPerPage = Sitesettingresponse.itemsPerPage || 0;
  }
}
