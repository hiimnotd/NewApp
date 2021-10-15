import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {forwardRef, memo, useCallback, useMemo, useState} from 'react';
import isEqual from 'react-fast-compare';
import {
  Image,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {Space, Text} from '..';

import {InputFieldProps} from './InputField.props';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  textInput: {
    flex: 1,
    fontSize: fontSizeDefault.FONT_14,
    color: ColorDefault.primary,
    paddingVertical: 5,
  },
  inputField: {
    flexDirection: 'row',
    backgroundColor: ColorDefault.offWhite,
    borderRadius: 10,
    borderColor: ColorDefault.primary,
    borderWidth: 1,
  },
  placeholder: {
    color: ColorDefault.primary,
  },
});

const InputFieldComponent = forwardRef(
  (
    {
      label,
      setValue,
      isPassword = false,
      placeholder,
      onEndEditing,
    }: InputFieldProps,
    ref,
  ) => {
    // state
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const labelColor = useMemo<TextStyle>(() => {
      return {
        color: ColorDefault.primary,
      };
    }, []);

    const secureText = useMemo<boolean>(() => {
      if (isPassword) {
        if (isVisible) {
          return false;
        }
        return true;
      }
      return false;
    }, [isPassword, isVisible]);

    // function
    const onChangeText = useCallback(
      (text: string) => {
        setValue(text);
      },
      [setValue],
    );

    const onChangeVisibility = useCallback(() => {
      setIsVisible(v => !v);
    }, []);

    const onToggle = useCallback(() => {
      setIsFocused(f => !f);
    }, []);

    // render
    return (
      <View style={[styles.container]}>
        <Text tx={label} style={[labelColor]} />
        <Space height={5} />
        <View style={styles.inputField}>
          <TextInput
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={ColorDefault.offWhite}
            style={styles.textInput}
            onChangeText={onChangeText}
            underlineColorAndroid={'transparent'}
            secureTextEntry={secureText}
            onFocus={onToggle}
            onBlur={onToggle}
            onSubmitEditing={onEndEditing}
          />
          {/* {isPassword && (
            <TouchableWithoutFeedback onPress={onChangeVisibility}>
              <Image
                source={
                  isVisible
                    ? require('@assets/images/visible.png')
                    : require('@assets/images/invisible.png')
                }
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
          )} */}
        </View>
      </View>
    );
  },
);

export const InputField = memo(InputFieldComponent, isEqual);
