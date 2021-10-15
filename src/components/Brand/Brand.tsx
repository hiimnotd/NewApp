import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Space} from '..';

const styles = StyleSheet.create({
  text: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgContainer: {width: 150, height: 150, alignSelf: 'center'},
});

interface BrandProps {
  spacer?: number;
}

const BrandComponent = ({spacer = 50}: BrandProps) => {
  return (
    <View>
      <FastImage
        source={require('@assets/images/logo.png')}
        style={styles.imgContainer}
      />
      <Space height={spacer} />
      <Text style={styles.text}>Welcome to bGlobal</Text>
    </View>
  );
};

export const Brand = memo(BrandComponent, isEqual);
