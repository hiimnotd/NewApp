import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import {IconSource} from '../assets/icons';

import {Icon} from './Icon/Icon';
import {Space} from './Spacer/Spacer';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  viewContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontSize: fontSizeDefault.FONT_20,
    color: ColorDefault.offWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

interface SuccessModalProps {
  isVisible: boolean;
  description: string;
  icon: IconSource;
}

const SuccessModalComponent = ({
  isVisible,
  description,
  icon,
}: SuccessModalProps) => {
  // render
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0}>
      <View style={[styles.viewContainer]}>
        <Icon source={icon} />
        <Space width={10} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </Modal>
  );
};

export const SuccessModal = memo(SuccessModalComponent, isEqual);
