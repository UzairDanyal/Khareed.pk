/*
 * khareed.pk
 
 * uzair usama
 */
export class ManufacturerListResponseModel {
  public manufacturerId: number;
  public name: string;
  public image: string;
  public imagePath: string;
  public sortOrder: number;
  public isActive: number;

  constructor(manufacturerListResponse: any) {
    this.manufacturerId = manufacturerListResponse.manufacturerId || 0;
    this.name = manufacturerListResponse.name || '';
    this.image = manufacturerListResponse.image || '';
    this.imagePath = manufacturerListResponse.imagePath || '';
    this.sortOrder = manufacturerListResponse.sortOrder || 0;
    this.isActive = manufacturerListResponse.isActive || 0;
  }
}
