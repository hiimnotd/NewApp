import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {forwardRef, memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
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
    borderColor: '#404B5025',
    borderWidth: 1,
  },
  placeholder: {
    color: ColorDefault.primary,
  },
});

interface InputFieldProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  width?: number | string;
}

const InputComponent = forwardRef(
  ({setValue, placeholder, width = '100%'}: InputFieldProps, ref) => {
    // function
    const onChangeText = useCallback(
      (text: string) => {
        setValue(text);
      },
      [setValue],
    );

    const container = useMemo<StyleProp<ViewStyle>>(() => {
      return {
        width: width,
      };
    }, [width]);

    // render
    return (
      <View style={[container]}>
        <View style={styles.inputField}>
          <TextInput
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={'#404B50'}
            style={styles.textInput}
            onChangeText={onChangeText}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>
    );
  },
);

export const Input = memo(InputComponent, isEqual);
