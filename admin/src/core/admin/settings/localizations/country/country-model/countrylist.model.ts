/*
 * khareed.pk
 
 * uzair usama
 */
export class CountryListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: number;

  constructor(countrylistForm: any) {
    this.limit = countrylistForm.limit || 0;
    this.offset = countrylistForm.offset || 0;
    this.keyword = countrylistForm.keyword || '';
    this.count = countrylistForm.count || 0;
  }
}
