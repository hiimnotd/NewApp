import {ForgotPassword} from '@app/src/screens/unAuthen/forgotPassword/design';
import {Login} from '@app/src/screens/unAuthen/login/design';
import {Register} from '@app/src/screens/unAuthen/register/design';
import {Start} from '@app/src/screens/unAuthen/start/design';
import {AllScreenOptions, ScreenOptions} from '@navigation/RootNavigator';
import {APP_SCREEN} from '@navigation/screenTypes';
import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';

const UnAuthen = createStackNavigator();

const UnAuthenScreenComponent = () => {
  return (
    <UnAuthen.Navigator screenOptions={AllScreenOptions}>
      <UnAuthen.Screen
        name={APP_SCREEN.START}
        component={Start}
        options={{headerShown: false}}
      />
      <UnAuthen.Screen
        name={APP_SCREEN.LOGIN}
        component={Login}
        options={ScreenOptions}
      />
      <UnAuthen.Screen
        name={APP_SCREEN.REGISTER}
        component={Register}
        options={ScreenOptions}
      />
      <UnAuthen.Screen
        name={APP_SCREEN.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={ScreenOptions}
      />
    </UnAuthen.Navigator>
  );
};

export const UnAuthenScreen = memo(UnAuthenScreenComponent, isEqual);
