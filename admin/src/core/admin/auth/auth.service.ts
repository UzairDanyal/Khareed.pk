/*
* Khareed.pk
* uzair and usama

*/

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// model
import {LoginForm} from './models/login.model';
import {ForgotForm} from './models/forgot.model';
// service
import {ConfigService} from '../service/config.service';
import {Api} from '../providers/api/api';

@Injectable()
export class AuthService extends Api {

    params: any = {};
    // private url = this.configService.get('api').baseUrl;
    private url = this.getBaseUrl();

    // AUTH API SERVICE //
    // login
    login(param: LoginForm): Observable<any> {
        return this.http.post(this.url + '/auth/login', param);
    }

    forgetPassword(param: ForgotForm): Observable<any> {
        return this.http.post(this.url + '/auth/forgot-password', param);
    }

}

