import {moderateScale} from '@app/src/common';
import {Icon, Space} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    backgroundColor: ColorDefault.offWhite,
    paddingVertical: moderateScale(12),
  },
  text: {
    color: ColorDefault.primary,
    fontSize: fontSizeDefault.FONT_14,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

interface ProfileRowProps {
  title?: string;
  content?: string;
  canEdit?: boolean;
  avatar?: string;
}

const ProfileRowComponent = ({
  title,
  content,
  avatar,
  canEdit = false,
}: ProfileRowProps) => {
  return (
    <View style={styles.container}>
      {avatar ? (
        <FastImage source={{uri: avatar}} style={styles.avatar} />
      ) : (
        <Text style={styles.text}>{title ?? ''}</Text>
      )}

      {!canEdit ? (
        <Text style={styles.text}>{content ?? ''}</Text>
      ) : (
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{content ?? ''}</Text>
          <Space width={7} />
          <Icon source={'rightArrow'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const ProfileRow = memo(ProfileRowComponent, isEqual);
