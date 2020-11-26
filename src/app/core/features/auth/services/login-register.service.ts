import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel, LoginRegisterModel } from '../models/auth.models';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

const url = environment.baseUrl;

const tokenMapper = (obs: Observable<LoginModel>): Observable<string> => {
  return obs.pipe(map(data => data.result.token));
};

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) {
  }

  login(data: LoginRegisterModel): Observable<string> {
    return this.http.post(`${url}/v1/user/login`, data).pipe(tokenMapper);
  }

  register(data: LoginRegisterModel): Observable<string> {
    return this.http.post(`${url}/v1/user/register`, data).pipe(tokenMapper);
  }
}
