export interface UserModel {
  country?:	string;
  city?:	string;
  firstName?:	string;
  lastName?:	string;
  email:	string;
  image?:	string;
  lat?:	number;
  lon?:	number;
  gender?:	string;
  createdAt?:	string;
  updatedAt?:	string;
}

export interface BasicResponseModel {
  code: number;
  status: string;
}
