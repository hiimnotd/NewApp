/* eslint-disable camelcase */
import {window} from '@app/App';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {RXStore} from '../common/redux';

import {AuthenScreen} from './authen';
import {APP_SCREEN, RootStackParamList} from './screenTypes';
import {UnAuthenScreen} from './unAuthen';

const RootStack = createStackNavigator<RootStackParamList>();

export const AllScreenOptions = () => {
  return {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
    gestureResponseDistance: {
      horizontal: window.width,
      vertical: window.height,
    },
    gestureEnabled: true,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
  };
};

export const ScreenOptions = () => {
  return {
    gestureResponseDistance: {
      horizontal: window.width,
      vertical: window.height,
    },
    gestureEnabled: true,
  };
};

export const RootNavigation = () => {
  //state
  const [currentUser, setCurrentUser] =
    useState<FirebaseAuthTypes.User | null>();

  //effect
  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    SplashScreen.hide();
    // return subscriber;
  }, []);

  //function
  // const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
  //   setCurrentUser(user);
  // };

  //render
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={AllScreenOptions}>
        <RootStack.Screen
          name={APP_SCREEN.UN_AUTHORIZE}
          component={UnAuthenScreen}
        />
        <RootStack.Screen
          name={APP_SCREEN.AUTHORIZE}
          component={AuthenScreen}
        />
      </RootStack.Navigator>
      <RXStore />
    </NavigationContainer>
  );
};
