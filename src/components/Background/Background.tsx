import {ColorDefault} from '@app/src/themes/color';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: ColorDefault.background,
  },
});

interface BackgroundProps {
  children: React.ReactNode;
}

const BackgroundComponent = ({children}: BackgroundProps) => {
  return <View style={styles.background}>{children}</View>;
};

export const Background = memo(BackgroundComponent, isEqual);
