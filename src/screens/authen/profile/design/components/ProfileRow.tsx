import {moderateScale} from '@app/src/common';
import {Icon, Space} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
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
  contentColor?: string;
  onNavigateEdit?: () => void;
}

const ProfileRowComponent = ({
  title,
  content,
  avatar,
  canEdit = false,
  contentColor = ColorDefault.primary,
  onNavigateEdit,
}: ProfileRowProps) => {
  const textColor = useMemo<StyleProp<TextStyle>>(() => {
    return {
      color: contentColor,
    };
  }, [contentColor]);

  const onPress = useCallback(() => {
    if (typeof onNavigateEdit === 'function') {
      onNavigateEdit();
    }
  }, [onNavigateEdit]);

  return (
    <View style={styles.container}>
      {avatar ? (
        <FastImage source={{uri: avatar}} style={styles.avatar} />
      ) : (
        <Text style={[styles.text, textColor]}>{title ?? ''}</Text>
      )}

      {!canEdit ? (
        <Text style={[styles.text, textColor]}>{content ?? ''}</Text>
      ) : (
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
          <Text style={[styles.text, textColor]}>{content ?? ''}</Text>
          <Space width={7} />
          <Icon source={'rightArrow'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const ProfileRow = memo(ProfileRowComponent, isEqual);
