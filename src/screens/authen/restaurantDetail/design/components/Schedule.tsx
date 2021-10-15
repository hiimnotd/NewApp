import {Button, Space} from '@app/src/components';
import {SuccessModal} from '@app/src/components/SuccessModal';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, View} from 'react-native';

import {Input} from './Input';

const styles = StyleSheet.create({
  title: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_20,
    alignSelf: 'center',
    paddingVertical: 20,
  },
});

const ScheduleComponent = () => {
  // state
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const onPress = useCallback(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  // render
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Text style={styles.title}>Book A Schedule</Text>
      <Input placeholder={'Name'} setValue={setName} />
      <Space height={20} />
      <Input placeholder={'Phone Number'} setValue={setName} />
      <Space height={20} />
      <Input placeholder={'Email'} setValue={setName} />
      <Space height={20} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Input placeholder={'Name'} setValue={setName} width={'45%'} />
        <Input placeholder={'Name'} setValue={setName} width={'45%'} />
      </View>
      <Space height={20} />
      <Button
        buttonLabelTx={'RESERVE'}
        borderRadius={0}
        paddingVertical={5}
        onPress={onPress}
      />
      <SuccessModal
        description={'Successful'}
        isVisible={isVisible}
        icon={'doneAll'}
      />
    </View>
  );
};

export const Schedule = memo(ScheduleComponent, isEqual);
