/*
 * khareed.pk
 
 * uzair usama
 */

export class BannerupdateResponseModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public bannerId: number;
  public active: any;

  constructor(updateResponse: any) {
    this.title = updateResponse.title || '';
    this.content = updateResponse.content || '';
    this.image = updateResponse.image || '';
    this.link = updateResponse.link || '';
    this.position = updateResponse.position || '';
    this.bannerId = updateResponse.bannerId || '';
    this.active = updateResponse.isActive;
  }
}
