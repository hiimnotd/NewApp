import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text} from 'react-native';

import {moderateScale} from '../common';
import {ColorDefault} from '../themes/color';
import {fontSizeDefault} from '../themes/fontSize';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_24,
    color: ColorDefault.primary,
    paddingVertical: moderateScale(20),
    alignSelf: 'center',
  },
});

const HeaderTitleComponent = ({title}: {title: string}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export const HeaderTitle = memo(HeaderTitleComponent, isEqual);
