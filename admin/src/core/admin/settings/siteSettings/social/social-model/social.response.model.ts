/*
 * khareed.pk
 
 * uzair usama
 */
export class SocialResponseModel {
  public facebook: string;
  public twitter: string;
  public instagram: string;
  public google: string;

  constructor(socialresponse: any) {
    this.facebook = socialresponse.facebook || '';
    this.twitter = socialresponse.twitter || '';
    this.instagram = socialresponse.instagram || '';
    this.google = socialresponse.google || '';
  }
}
