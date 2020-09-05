/*
 * khareed.pk
 
 * uzair usama
 */

export class MediauploadForm {
  public image: String;
  public path: string;

  constructor(mediaupload: any) {
    this.image = mediaupload.image || '';
    this.path = mediaupload.path || '';
  }
}
