export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  START = 'START',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',

  AUTHORIZE = 'AUTHORIZE',
  BOTTOM_TAB = 'BOTTOM_TAB',
  HOME = 'HOME',
  LIKES = 'LIKES',
  SCHEDULE = 'SCHEDULE',
  NOTIFICATIONS = 'NOTIFICATIONS',
  MY_PROFILE = 'MY_PROFILE',
  RESTAURANT_DETAIL = 'RESTAURANT_DETAIL',
  MENU = 'MENU',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.START]: undefined;
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
};

export type AuthorizeParamsList = {
  [APP_SCREEN.BOTTOM_TAB]: undefined;
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.LIKES]: undefined;
  [APP_SCREEN.NOTIFICATIONS]: undefined;
  [APP_SCREEN.SCHEDULE]: undefined;
  [APP_SCREEN.MY_PROFILE]: undefined;
  [APP_SCREEN.RESTAURANT_DETAIL]: undefined;
  [APP_SCREEN.MENU]: undefined;
  [APP_SCREEN.CHANGE_PASSWORD]: undefined;
};

export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
};
