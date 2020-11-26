import { UserLocationModel } from '../models/main.models';

export const centerOfKyiv: UserLocationModel = {
  lat: 50.45466,
  lon: 30.5238,
};

export const fallbackUrl = 'https://hajiri.co/uploads/no_image.jpg';

const fallbackCoordinates = [
  {lat: 50.431773, lon: 30.424636},
  {lat: 50.431773, lon: 30.424636},
  {lat: 50.459637, lon: 30.428946},
  {lat: 50.463541, lon: 30.454595},
  {lat: 50.477655, lon: 30.534808},
  {lat: 50.464036, lon: 30.553635},
  {lat: 50.461687, lon: 30.570799},
  {lat: 50.456198, lon: 30.621799},
  {lat: 50.380170, lon: 30.568871},
  {lat: 50.378160, lon: 30.603209},
];

export const setFallbackLocationById = (id): UserLocationModel => {
  const parse = parseInt(id.toString(), 16);
  const index = parse % 10;
  return fallbackCoordinates[index];
};
