/*
 * khareed.pk
 
 * uzair usama
 */

export class BannerupdateModel {
  public title: string;
  public content: string;
  public image: string;
  public link: string;
  public position: string;
  public bannerId: number;
  public status: number;

  constructor(bannerupdate: any) {
    this.title = bannerupdate.title || '';
    this.content = bannerupdate.content || '';
    this.image = bannerupdate.image || '';
    this.link = bannerupdate.link || '';
    this.position = bannerupdate.position || '';
    if (bannerupdate.bannerId) {
      this.bannerId = bannerupdate.bannerId || '';
    }
    this.status = bannerupdate.active || 0;
  }
}
