import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const ChangePasswordComponent = () => {
  return (
    <View>
      <Text />
    </View>
  );
};

export const ChangePassword = memo(ChangePasswordComponent, isEqual);
