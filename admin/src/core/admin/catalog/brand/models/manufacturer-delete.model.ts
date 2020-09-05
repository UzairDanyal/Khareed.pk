/*
 * khareed.pk
 
 * uzair usama
 */
export class ManufacturerDeleteModel {
  public manufacturerId: number;

  constructor(manufacturerdeleteForm: any) {
    this.manufacturerId = manufacturerdeleteForm.manufacturerId || '';
  }
}
