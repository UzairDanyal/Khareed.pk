/*
 * khareed.pk
 
 * uzair usama
 */
export class CountryForm {
  public name: String;
  public isoCode2: string;
  public isoCode3: String;
  public postcodeRequired: number;
  public countryId: number;
  public status: number;

  constructor(countryForm: any) {
    this.name = countryForm.countryname || '';
    this.isoCode2 = countryForm.isocode1 || '';
    this.isoCode3 = countryForm.isocode2 || '';
    this.postcodeRequired = countryForm.postcodeRequired || 0;
    this.status = countryForm.status || 0;
    this.countryId = countryForm.id || '0';
  }
}
