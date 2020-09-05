/*
 * khareed.pk
 
 * uzair usama
 */

export class CategoryForm {
  public name: string;
  public sortOrder: number;
  public metaTagDescription: string;
  public metaTagKeyword: string;
  public metaTagTitle: string;
  public parentInt: number;
  public status: number;

  constructor(categoryForm: any) {
    this.name = categoryForm.name || '';
    this.sortOrder = categoryForm.sortOrder || '';
    this.metaTagDescription = categoryForm.metaTagDescription || '';
    this.metaTagKeyword = categoryForm.metaTagKeyword || '';
    this.metaTagTitle = categoryForm.metaTagTitle || '';
    this.parentInt = categoryForm.parentInt;
    this.status = categoryForm.status || '';
  }
}
