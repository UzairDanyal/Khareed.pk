/*
 * khareed.pk
 
 * uzair usama
 */

export class BannerdeleteModel {
  public bannerId: number;

  constructor(deletebanner: any) {
    this.bannerId = deletebanner.bannerId || '';
  }
}
