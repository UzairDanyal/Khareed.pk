/*
 * khareed.pk
 
 * uzair usama
 */
export class SitesettingsResponsemodel {
  public metaTagTitle: string;
  public metaTagDescription: string;
  public metaTagKeywords: string;

  constructor(Sitesettingresponse: any) {
    this.metaTagTitle = Sitesettingresponse.metaTagTitle || '';
    this.metaTagDescription = Sitesettingresponse.metaTagDescription || '';
    this.metaTagKeywords = Sitesettingresponse.metaTagKeyword || '';
  }
}
