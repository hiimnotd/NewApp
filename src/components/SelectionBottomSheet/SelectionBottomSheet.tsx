import {moderateScale} from '@app/src/common';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import isEqual from 'react-fast-compare';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import {Space, Text} from '..';

import {
  SelectionBottomSheetOption,
  SelectionBottomSheetProps,
} from './SelectionBottomSheet.props';
import {SelectionItem} from './SelectionItem';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewContainer: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingTop: moderateScale(10),
    justifyContent: 'space-between',
    backgroundColor: ColorDefault.gray,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: fontSizeDefault.FONT_20,
    color: ColorDefault.black,
  },
  save: {
    fontFamily: 'Quicksand-Bold',
    fontSize: fontSizeDefault.FONT_20,
    color: ColorDefault.background,
  },
});

const SelectionBottomSheetComponent = forwardRef(
  (
    {
      data,
      txTitle,
      selectedOption: overwriteSelectedOption,
      onSave,
    }: SelectionBottomSheetProps,
    ref,
  ) => {
    // states
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] =
      useState<SelectionBottomSheetOption>({} as SelectionBottomSheetOption);

    // functions
    const onShowModal = useCallback(() => {
      setIsVisible(true);
    }, []);

    const onHideModal = useCallback(() => {
      setIsVisible(false);
    }, []);

    const onPressSave = useCallback(() => {
      onSave(selectedOption);
      onHideModal();
    }, [onHideModal, onSave, selectedOption]);

    const renderItem = useCallback(
      ({item}: ListRenderItemInfo<SelectionBottomSheetOption>) => {
        return (
          <SelectionItem
            item={item}
            selected={selectedOption.id === item.id}
            setSelectedOption={setSelectedOption}
          />
        );
      },
      [selectedOption.id],
    );

    const renderSeparator = useCallback(() => {
      return <Space height={20} />;
    }, []);

    const keyExtractor = useCallback((item: SelectionBottomSheetOption) => {
      return String(item.id);
    }, []);

    // effects
    useImperativeHandle(
      ref,
      () => ({
        show: () => {
          setSelectedOption(overwriteSelectedOption);
          onShowModal();
        },
        hide: () => {
          onHideModal();
        },
      }),
      [onHideModal, onShowModal, overwriteSelectedOption],
    );

    // render
    return (
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        onBackdropPress={onHideModal}
        onBackButtonPress={onHideModal}
        swipeDirection={'down'}
        backdropOpacity={0}
        onSwipeComplete={onHideModal}>
        <View style={styles.viewContainer}>
          <View style={styles.viewHeader}>
            <Text tx={txTitle} style={styles.title} />
            <TouchableOpacity onPress={onPressSave}>
              <Text tx={'common:txSave'} style={styles.save} />
            </TouchableOpacity>
          </View>
          <Space height={20} />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </Modal>
    );
  },
);

export const SelectionBottomSheet = memo(
  SelectionBottomSheetComponent,
  isEqual,
);
export type SelectionBottomSheet = {
  show: () => void;
  hide: () => void;
};
