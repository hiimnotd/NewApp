import React, {memo, useMemo} from 'react';
import equals from 'react-fast-compare';
import {useTranslation} from 'react-i18next';
import {Text as ReactNativeText} from 'react-native';

import {TextProps} from './Text.props';

const TextComponent = (props: TextProps) => {
  // state
  const {
    tx,
    txOptions,
    text,
    children,
    style: styleOverride = {},
    ...rest
  } = props;
  const [t] = useTranslation();
  const i18nText = useMemo(() => tx && t(tx, txOptions), [tx, txOptions, t]);
  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );

  // render
  return (
    <ReactNativeText allowFontScaling={false} {...rest} style={styleOverride}>
      {content}
    </ReactNativeText>
  );
};
export const Text = memo(TextComponent, equals);
