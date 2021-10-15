import {moderateScale} from '@app/src/common';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Text} from '..';

import {ButtonProps} from './Button.props';

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizeDefault.FONT_18,
  },
});

const ButtonComponent = ({
  onPress,
  buttonColor = ColorDefault.primary,
  buttonLabelTx,
  paddingHorizontal = 20,
  paddingVertical = 0,
  labelColor = ColorDefault.offWhite,
  borderColor = ColorDefault.primary,
  width,
  borderRadius = 10,
}: ButtonProps) => {
  //style
  const buttonStyle: StyleProp<ViewStyle> = useMemo<
    StyleProp<ViewStyle>
  >(() => {
    return {
      backgroundColor: buttonColor,
      paddingHorizontal: moderateScale(paddingHorizontal),
      paddingVertical: moderateScale(paddingVertical),
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      borderRadius: borderRadius,
      borderColor: borderColor,
      borderWidth: 1,
    };
  }, [
    borderColor,
    borderRadius,
    buttonColor,
    paddingHorizontal,
    paddingVertical,
    width,
  ]);

  const labelStyle: StyleProp<TextStyle> = useMemo<StyleProp<TextStyle>>(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  //function
  const onPressButton = useCallback(() => {
    if (typeof onPress === 'function') {
      onPress();
    }
  }, [onPress]);

  // render
  return (
    <TouchableOpacity onPress={onPressButton} style={[buttonStyle]}>
      <Text tx={buttonLabelTx} style={[styles.label, labelStyle]} />
    </TouchableOpacity>
  );
};

export const Button = memo(ButtonComponent, isEqual);
