/*
 * khareed.pk
 * uzair usama
 
 */

export class BanneraddModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public status: number;

  constructor(bannerForm: any) {
    this.title = bannerForm.title || '';
    this.content = bannerForm.content || '';
    this.image = bannerForm.image || '';
    this.link = bannerForm.link || '';
    this.position = bannerForm.position || '';
    this.status = bannerForm.active || 0;
  }
}
