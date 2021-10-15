import {Background, Button, HeaderTitle, Space} from '@app/src/components';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

import {Row} from './components/Row';

const styles = StyleSheet.create({
  description: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_12,
    paddingLeft: 20,
    paddingVertical: 7,
  },
});

export type MenuProps = StackScreenProps<AuthorizeParamsList, APP_SCREEN.MENU>;

const MenuComponent = ({navigation}: MenuProps) => {
  // functions
  const onNavigateProfile = useCallback(() => {
    navigation.navigate(APP_SCREEN.MY_PROFILE);
  }, [navigation]);

  const onNavigateChangePassword = useCallback(() => {
    navigation.navigate(APP_SCREEN.CHANGE_PASSWORD);
  }, [navigation]);

  // render
  return (
    <Background>
      <HeaderTitle title={'Menu'} />
      <Text style={styles.description}>Account Settings</Text>
      <Row title={'Information & Contact'} onPress={onNavigateProfile} />
      <View style={{height: 1, backgroundColor: '#C4C4C4'}} />
      <Row title={'Change Password'} onPress={onNavigateChangePassword} />
      <Space height={30} />
      <View style={{paddingHorizontal: 20}}>
        <Button
          buttonColor={'#F15D59'}
          buttonLabelTx={'LOGOUT'}
          borderColor={'#F15D59'}
          borderRadius={0}
          paddingVertical={10}
        />
      </View>
    </Background>
  );
};

export const Menu = memo(MenuComponent, isEqual);
