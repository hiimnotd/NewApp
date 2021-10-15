import {icons, IconSource} from '@app/src/assets/icons';
import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

interface IconProps {
  size?: number;
  source: IconSource;
}

const IconComponent = ({size = 24, source}: IconProps) => {
  //style
  const style: StyleProp<ImageStyle> = useMemo<StyleProp<ImageStyle>>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  //render
  return <FastImage source={icons[source]} style={[style]} tintColor />;
};

export const Icon = memo(IconComponent, isEqual);
