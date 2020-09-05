/*
 * khareed.pk
 
 * uzair usama
 */

export class BucketlistForm {
  public limit: number;
  public folderName: string;

  constructor(bucketlistForm: any) {
    this.limit = bucketlistForm.limit || 0;
    this.folderName = bucketlistForm.folderName || '';
  }
}
