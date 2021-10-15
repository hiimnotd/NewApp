import {moderateScale} from '@app/src/common';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, TextInput, View} from 'react-native';

import {Icon, Space} from '..';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    paddingHorizontal: moderateScale(10),
    borderWidth: 1,
    borderColor: ColorDefault.disable,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textInput: {
    paddingVertical: 3,
    fontSize: fontSizeDefault.FONT_14,
    backgroundColor: ColorDefault.background,
  },
});

interface SearchBarProps {
  onChangeText: (text: string) => void;
}

const SearchBarComponent = ({onChangeText}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon source={'search'} size={14} />
      <Space width={10} />
      <TextInput
        placeholder={'Search'}
        style={styles.textInput}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const SearchBar = memo(SearchBarComponent, isEqual);
