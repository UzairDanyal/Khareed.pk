/*
 * khareed.pk
 
 * uzair usama
 */
export class RoleListResponseModel {
  public groupId: number;
  public name: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.groupId = listResponse.groupId || 0;
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
  }
}
