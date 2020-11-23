import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserDataResponseModel } from '../models/main.models';
import { UserModel } from '../../../../shared/models/shared.models';
import { map } from 'rxjs/operators';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUserDetails(): Observable<UserModel> {
    return this.http.get<UserDataResponseModel>(`${url}/v1/user/current`)
      .pipe(map((res: UserDataResponseModel) => res.result));
  }

  updateUserDetails(data: UserModel): Observable<UserModel> {
    return this.http.put<UserDataResponseModel>(`${url}/v1/user/profile`, data)
      .pipe(map((res: UserDataResponseModel) => res.result));
  }

}
