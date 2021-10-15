import {ImageSourcePropType} from 'react-native';

export interface Restaurant {
  id: number;
  name: string;
  avatar?: string;
  cover?: string;
  rating: number;
  reviews: number;
  liked: boolean;
  schedule?: string;
}

export interface Dish {
  id: number;
  name: string;
  size: string;
  price: string;
  image: string;
}

export interface RestaurantInformation {
  location: string;
  type: string;
  cash: string;
  openTime: string;
}

export interface TypeOfDrink {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

export interface User {
  name: string;
  gender: 0 | 1;
  region: number;
  sleepTime: string;
  wakeUpTime: string;
  age: number;
  weight: number;
  language: string;
}

export interface FontSize {
  FONT_4: number;

  FONT_5: number;

  FONT_6: number;

  FONT_7: number;

  FONT_8: number;

  FONT_9: number;

  FONT_10: number;

  FONT_11: number;

  FONT_12: number;

  FONT_13: number;

  FONT_14: number;

  FONT_15: number;

  FONT_16: number;

  FONT_17: number;

  FONT_18: number;

  FONT_19: number;

  FONT_20: number;

  FONT_21: number;

  FONT_22: number;

  FONT_23: number;

  FONT_24: number;

  FONT_25: number;

  FONT_26: number;

  FONT_27: number;

  FONT_28: number;

  FONT_29: number;

  FONT_30: number;

  FONT_31: number;

  FONT_32: number;

  FONT_33: number;

  FONT_34: number;

  FONT_35: number;

  FONT_36: number;

  FONT_37: number;

  FONT_38: number;

  FONT_48: number;
}

export interface Colors {
  background: string;

  offWhite: string;

  black: string;

  disable: string;

  inputField: string;

  gray: string;

  primary: string;

  tint: string;
}
