import {scale} from '@common';
import React, {memo, useMemo} from 'react';
import equals from 'react-fast-compare';
import {View} from 'react-native';

import {SpacerProps} from './Spacer.props';

const SpaceComponent = (props: SpacerProps) => {
  const {height = 0, width = 0} = props;

  // style
  const actualStyle = useMemo(
    () => ({
      width: typeof width === 'number' ? scale(width) : width,
      height: typeof height === 'number' ? scale(height) : height,
    }),
    [height, width],
  );

  // render
  return <View style={actualStyle} />;
};
export const Space = memo(SpaceComponent, equals);
