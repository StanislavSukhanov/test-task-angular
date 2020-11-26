import { UserModel } from '../../../../shared/models/shared.models';
import {} from 'googlemaps';
import { centerOfKyiv, fallbackUrl } from '../constants/constants';


export const customMarker = (user: UserModel): any => {
  const image = {
    url: user.image || fallbackUrl,
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    scaledSize: new google.maps.Size(32, 32)
  };

  const label = {
    text: (user.firstName && user.lastName) ? `${user.firstName} ${user.lastName}` : user.email.split('@')[0],
    color: '#fafafa',
    className: 'label'
  };

  const shape = {
    type: 'rect',
  } as google.maps.MarkerShapeRect;

  return new google.maps.Marker({
    position: (user.lat && user.lon) ? {lat: (+user.lat), lng: (+user.lon)} : {lat: centerOfKyiv.lat, lng: centerOfKyiv.lon},
    icon: image,
    shape,
    label
  });
};
