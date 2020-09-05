/*
 * khareed.pk
 * uzair usama
 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppApiClient {
  params: any = {};
  url = 'http://api.spurtcommerce.com/api';

  constructor(private http: HttpClient) {}

  // logout
  logoutapi() {
    return this.http.get(this.url + '/auth/logout');
  }
}
