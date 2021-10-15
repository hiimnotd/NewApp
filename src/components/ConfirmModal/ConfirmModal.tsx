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
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {Space, Text} from '..';
import {Button} from '../Button/Button';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  viewContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: ColorDefault.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  description: {
    fontFamily: 'Quicksand-Medium',
    fontSize: fontSizeDefault.FONT_16,
    color: ColorDefault.black,
  },
});

interface ConfirmModalProps {
  description: string;
  buttonRightTx: string;
  buttonLeftTx: string;
  onPressLeft: () => void;
}

const ConfirmModalComponent = forwardRef(
  (
    {description, buttonRightTx, buttonLeftTx, onPressLeft}: ConfirmModalProps,
    ref,
  ) => {
    // states
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // function
    const onShowModal = useCallback(() => {
      setIsVisible(true);
    }, []);

    const onHideModal = useCallback(() => {
      setIsVisible(false);
    }, []);

    const onConfirm = useCallback(() => {
      onPressLeft();
      onHideModal();
    }, [onHideModal, onPressLeft]);

    // effect
    useImperativeHandle(
      ref,
      () => ({
        show: () => {
          onShowModal();
        },
        hide: () => {
          onHideModal();
        },
      }),
      [onHideModal, onShowModal],
    );

    // render
    return (
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={onHideModal}
        onBackButtonPress={onHideModal}
        backdropOpacity={0.5}>
        <View style={[styles.viewContainer]}>
          <Space height={20} />
          <Text tx={description} style={styles.description} />
          <Space height={40} />
          <View style={styles.buttonView}>
            <Button
              buttonLabelTx={buttonRightTx}
              onPress={onConfirm}
              width={'40%'}
              paddingVertical={5}
            />
            <Button
              buttonLabelTx={buttonLeftTx}
              onPress={onHideModal}
              width={'40%'}
              paddingVertical={5}
              buttonColor={ColorDefault.offWhite}
              labelColor={ColorDefault.background}
            />
          </View>
        </View>
      </Modal>
    );
  },
);

export const ConfirmModal = memo(ConfirmModalComponent, isEqual);
export type ConfirmModal = {
  show: () => void;
  hide: () => void;
};
