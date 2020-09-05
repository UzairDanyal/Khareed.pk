/*
 * khareed.pk
 
 * uzair usama
 */
export class ZonelistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: boolean;

  constructor(zonelistForm: any) {
    this.limit = zonelistForm.limit || 0;
    this.offset = zonelistForm.offset || 0;
    this.keyword = zonelistForm.keyword || '';
    this.count = zonelistForm.count || false;
  }
}
