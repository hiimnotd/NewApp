import {Colors} from '../types';

export const ColorDefault: Colors = {
  background: '#E5F6FB',

  offWhite: '#FAFAFA',

  black: '#1F2128',

  disable: '#C4C4C4',

  inputField: '#4e4e4e',

  gray: '#EAECF5',

  primary: '#013C5C',

  tint: '#2EA2E1',
};

export type ColorTypes = keyof typeof ColorDefault;
