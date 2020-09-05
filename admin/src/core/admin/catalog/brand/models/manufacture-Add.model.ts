/*
 * khareed.pk
 
 * uzair usama
 */

export class ManufactureAddModel {
  public name: string;
  public image: string;
  public sortOrder: number;
  public status: number;

  constructor(manufactureAddForm: any) {
    this.name = manufactureAddForm.name || '';
    this.image = manufactureAddForm.image || '';
    this.sortOrder = manufactureAddForm.sortOrder || 0;
    this.status = manufactureAddForm.status || 0;
  }
}
