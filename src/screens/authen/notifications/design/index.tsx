import {Background} from '@app/src/components/Background/Background';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const NotificationsComponent = () => {
  return (
    <Background>
      <Text />
    </Background>
  );
};

export const Notifications = memo(NotificationsComponent, isEqual);
