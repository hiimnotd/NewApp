import {IconSource} from '@app/src/assets/icons';
import {Icon, Space} from '@app/src/components';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Text, View} from 'react-native';

interface InformationRowProps {
  icon: IconSource;
  content: string;
}

const InformationRowComponent = ({icon, content}: InformationRowProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon source={icon} size={24} />
      <Space width={15} />
      <Text
        style={{
          color: ColorDefault.primary,
          fontSize: fontSizeDefault.FONT_14,
        }}>
        {content}
      </Text>
    </View>
  );
};

export const InformationRow = memo(InformationRowComponent, isEqual);
