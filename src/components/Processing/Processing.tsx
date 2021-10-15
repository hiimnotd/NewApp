import {ColorDefault} from '@app/src/themes/color';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import isEqual from 'react-fast-compare';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProcessingComponent = forwardRef((_, ref) => {
  // states
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // functions
  const onShowModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onHideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  // effects
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

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      style={styles.container}
      onBackButtonPress={onHideModal}>
      <ActivityIndicator size="large" color={ColorDefault.background} />
    </Modal>
  );
});

export const Processing = memo(ProcessingComponent, isEqual);
export type Processing = {
  show: () => void;
  hide: () => void;
};
