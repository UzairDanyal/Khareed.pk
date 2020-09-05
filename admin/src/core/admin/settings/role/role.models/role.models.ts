/*
 * khareed.pk
 
 * uzair usama
 */
export class RoleForm {
  public name: String;
  public status: String;
  public id: number;

  constructor(roleForm: any) {
    this.name = roleForm.name || '';
    this.status = roleForm.status;
    if (roleForm.groupId) {
      this.id = roleForm.groupId || '';
    }
  }
}
