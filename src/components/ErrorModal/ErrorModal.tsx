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
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {Button, Space, Text} from '..';

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
    fontFamily: 'Quicksand-Bold',
    fontSize: fontSizeDefault.FONT_18,
    color: ColorDefault.black,
    textAlign: 'center',
  },
});

const ErrorModalComponent = forwardRef(({}, ref) => {
  // states
  const [t] = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [describe, setDescribe] = useState<string>('');

  // function
  const onShowModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onHideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  // effect
  useImperativeHandle(
    ref,
    () => ({
      show: (description: string) => {
        setDescribe(t(description));
        onShowModal();
      },
      hide: () => {
        onHideModal();
      },
    }),
    [onHideModal, onShowModal, t],
  );

  // render
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn={'wobble'}
      onBackdropPress={onHideModal}
      onBackButtonPress={onHideModal}
      backdropOpacity={0.5}>
      <View style={[styles.viewContainer]}>
        <Space height={20} />
        <Text tx={describe} style={styles.description} />
        <Space height={40} />
        <View style={styles.buttonView}>
          <Button
            buttonLabelTx={'common:txClose'}
            onPress={onHideModal}
            paddingVertical={5}
            width={'100%'}
          />
        </View>
      </View>
    </Modal>
  );
});

export const ErrorModal = memo(ErrorModalComponent, isEqual);
export type ErrorModal = {
  show: (description: string) => void;
  hide: () => void;
};
