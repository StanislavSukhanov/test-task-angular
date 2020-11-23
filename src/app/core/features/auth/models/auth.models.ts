import { BasicResponseModel } from '../../../../shared/models/shared.models';

export interface LoginRegisterModel {
  email: string;
  password: string;
}

export interface Token {
    token: string;
    expiredAt: number;
}

export interface LoginModel extends BasicResponseModel {
  result: Token;
}





