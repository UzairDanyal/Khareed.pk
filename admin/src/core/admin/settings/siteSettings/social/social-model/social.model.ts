/*
 * khareed.pk
 
 * uzair usama
 */
export class SocialForm {
  public facebook: string;
  public google: string;
  public twitter: string;
  public instagram: string;

  constructor(socialForm: any) {
    this.facebook = socialForm.facebook || '';
    this.google = socialForm.google || '';
    this.twitter = socialForm.twitter || '';
    this.instagram = socialForm.instagram || '';
  }
}
