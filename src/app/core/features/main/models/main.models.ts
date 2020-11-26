import { BasicResponseModel, UserModel } from '../../../../shared/models/shared.models';

export interface UserDataResponseModel extends BasicResponseModel {
  result: UserModel;
}

export interface UserSearchResponseModel extends BasicResponseModel {
  result: UserModel[];
}

export interface UserLocationModel {
  lat: number;
  lon: number;
}


export interface SearchByLocationModel {
  center: UserLocationModel;
  radius: number;
}
