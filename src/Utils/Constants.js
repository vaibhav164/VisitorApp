import {Dimensions} from 'react-native';

export const logoUrl =
  'https://toppng.com/uploads/preview/vision-and-mission-icon-mission-and-vision-icon-11553466976ptqwmlcmbc.png';

export const DeviceWidth = Dimensions.get('window').width;
export const DeviceHeight = Dimensions.get('window').height;
export const noSpaceRegExp = /^\S*$/; // a string consisting only of non-whitespaces
export const users = [
  {userEmail: 'manager@gmail.com', password: 'password'},
  {
    userEmail: 'visitor@gmail.com',
    password: 'password',
  },
];
