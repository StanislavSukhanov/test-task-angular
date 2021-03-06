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
  id: number;
}

export interface BasicResponseModel {
  code: number;
  status: string;
}
