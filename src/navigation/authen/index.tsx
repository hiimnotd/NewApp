import {useSelector} from '@app/src/common';
import {Home} from '@app/src/screens/authen/home/design';
import {onUpdateProfile} from '@app/src/store/app_redux/reducer';
import {AllScreenOptions, ScreenOptions} from '@navigation/RootNavigator';
import {APP_SCREEN} from '@navigation/screenTypes';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {createStackNavigator} from '@react-navigation/stack';
import React, {memo, useEffect} from 'react';
import isEqual from 'react-fast-compare';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {Likes} from '@app/src/screens/authen/likes/design';
import {Schedule} from '@app/src/screens/authen/schedule/design';
import {Notifications} from '@app/src/screens/authen/notifications/design';
import {MyProfile} from '@app/src/screens/authen/profile/design';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorDefault} from '@app/src/themes/color';
import {RestaurantDetail} from '@app/src/screens/authen/restaurantDetail/design';
import {Menu} from '@app/src/screens/authen/menu/design';
import {ChangePassword} from '@app/src/screens/authen/changePassword/design';

const Authen = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      activeColor={'#2EA2E1'}
      inactiveColor={ColorDefault.disable}
      barStyle={{backgroundColor: ColorDefault.offWhite}}
      shifting={false}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'location-city'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'favorite'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'today'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'notifications'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Menu}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'person'} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthenScreenComponent = () => {
  // state
  // const currentUser = firebase.auth().currentUser?.uid;
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 19 ~ AuthenScreenComponent ~ currentUser',
  //   currentUser,
  // );
  // const profile = useSelector(x => x.app.profile);
  // console.log(
  //   '🚀 ~ file: index.tsx ~ line 22 ~ AuthenScreenComponent ~ profile',
  //   profile,
  // );
  // const dispatch = useDispatch();
  // const [t, i18n] = useTranslation();

  // // effect
  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('users')
  //     .doc(currentUser)
  //     .onSnapshot(documentSnapshot => {
  //       console.log('User data: ', documentSnapshot.data());
  //       dispatch(
  //         onUpdateProfile({
  //           age: documentSnapshot.get('age'),
  //           gender: documentSnapshot.get('gender'),
  //           name: documentSnapshot.get('name'),
  //           region: documentSnapshot.get('region'),
  //           sleepTime: documentSnapshot.get('sleepTime'),
  //           wakeUpTime: documentSnapshot.get('wakeUpTime'),
  //           weight: documentSnapshot.get('weight'),
  //           language: documentSnapshot.get('language'),
  //         }),
  //       );
  //     });

  //   return () => {
  //     subscriber();
  //   };
  // }, [currentUser, dispatch]);

  // useEffect(() => {
  //   if (profile.language) {
  //     console.log(
  //       '🚀 ~ file: index.tsx ~ line 54 ~ useEffect ~ profile.language',
  //       profile.language,
  //     );
  //     i18n.changeLanguage(profile.language);
  //   }
  // }, [i18n, profile.language]);

  //render
  return (
    <Authen.Navigator screenOptions={AllScreenOptions}>
      <Authen.Screen name={APP_SCREEN.BOTTOM_TAB} component={MyTabs} />
      <Authen.Screen
        name={APP_SCREEN.RESTAURANT_DETAIL}
        component={RestaurantDetail}
      />
      <Authen.Screen
        name={APP_SCREEN.CHANGE_PASSWORD}
        component={ChangePassword}
      />
      <Authen.Screen name={APP_SCREEN.MY_PROFILE} component={MyProfile} />
    </Authen.Navigator>
  );
};

export const AuthenScreen = memo(AuthenScreenComponent, isEqual);
