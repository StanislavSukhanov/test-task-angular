import { BasicResponseModel, UserModel } from '../../../../shared/models/shared.models';

export interface UserDataResponseModel extends BasicResponseModel {
  result: UserModel;
}
