import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {Icon, Text} from '..';

import {SelectionBottomSheetOption} from './SelectionBottomSheet.props';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

interface SelectionItemProps {
  item: SelectionBottomSheetOption;
  selected: boolean;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<SelectionBottomSheetOption>
  >;
}

const SelectionItemComponent = ({
  item,
  selected,
  setSelectedOption,
}: SelectionItemProps) => {
  // state
  const checkOpacity = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      opacity: selected ? 1 : 0,
    };
  }, [selected]);

  const textStyle = useMemo<StyleProp<TextStyle>>(() => {
    return {
      fontFamily: selected ? 'Quicksand-Bold' : 'Quicksand-Medium',
      fontSize: selected ? fontSizeDefault.FONT_20 : fontSizeDefault.FONT_16,
      color: selected ? ColorDefault.background : ColorDefault.black,
    };
  }, [selected]);

  // functions
  const onSelectItem = useCallback(() => {
    setSelectedOption(item);
  }, [item, setSelectedOption]);

  // render
  return (
    <TouchableOpacity style={styles.container} onPress={onSelectItem}>
      <Text tx={item.name} style={[textStyle]} />
      <View style={[checkOpacity]}>
        <Icon source={'check'} />
      </View>
    </TouchableOpacity>
  );
};

export const SelectionItem = memo(SelectionItemComponent, isEqual);
