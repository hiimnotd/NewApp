import {moderateScale} from '@app/src/common';
import {Icon} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    backgroundColor: ColorDefault.offWhite,
    paddingVertical: moderateScale(12),
  },
  title: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_14,
  },
});

interface RowProps {
  title: string;
  onPress: () => void;
}

const RowComponent = ({title, onPress}: RowProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Icon source={'rightArrow'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const Row = memo(RowComponent, isEqual);
