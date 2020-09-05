/*
 * khareed.pk
 
 * uzair usama
 */
export class SeoModel {
  public metaTagTitle: string;
  public metaTagDescription: string;
  public metaTagKeywords: string;

  constructor(generalsettingForm: any) {
    this.metaTagTitle = generalsettingForm.metaTagTitle || '';
    this.metaTagDescription = generalsettingForm.metaTagDescription || '';
    this.metaTagKeywords = generalsettingForm.metaTagKeywords || '';
  }
}
