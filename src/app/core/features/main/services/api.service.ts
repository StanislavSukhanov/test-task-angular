import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserDataResponseModel, UserLocationModel, UserSearchResponseModel } from '../models/main.models';
import { UserModel } from '../../../../shared/models/shared.models';
import { map } from 'rxjs/operators';

const url = environment.baseUrl;

const userResultMapper = (res: Observable<UserDataResponseModel>) => {
  return res.pipe(map((user: UserDataResponseModel) => user.result));
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUserDetails(): Observable<UserModel> {
    return this.http.get<UserDataResponseModel>(`${url}/v1/user/current`)
      .pipe(userResultMapper);
  }

  updateUserDetails(data: UserModel): Observable<UserModel> {
    return this.http.put<UserDataResponseModel>(`${url}/v1/user/profile`, data)
      .pipe(userResultMapper);
  }

  updateUserPhoto(data: FormData): Observable<UserModel> {
    return this.http.post<UserDataResponseModel>(`${url}/v1/user/profile/image`, data)
      .pipe(userResultMapper);
  }

  deleteUserPhoto(): Observable<void> {
    return this.http.delete<void>(`${url}/v1/user/profile/image`);
  }

  setUserLocation(location: UserLocationModel): Observable<UserModel> {
    return this.http.put(`${url}/v1/user/location`, location).pipe(userResultMapper);
  }

  searchUsers(params: string): Observable<UserModel[]> {
    return this.http.get<UserSearchResponseModel>(`${url}/v1/user/search${params}`).pipe(map(res => res.result));
  }

  getUsers() {

  }

  getUserById(id: string): Observable<UserModel>  {
    return this.http.get<UserDataResponseModel>(`${url}/v1/user/${id}`).pipe(map(res => res.result));
  }
}
