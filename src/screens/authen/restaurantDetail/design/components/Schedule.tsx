import {Button, Icon, Space} from '@app/src/components';
import {SuccessModal} from '@app/src/components/SuccessModal';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import {Input} from './Input';

const styles = StyleSheet.create({
  title: {
    color: ColorDefault.primary,
    fontWeight: 'bold',
    fontSize: fontSizeDefault.FONT_20,
    alignSelf: 'center',
    paddingVertical: 20,
  },
  textInput: {
    flex: 1,
    fontSize: fontSizeDefault.FONT_14,
    color: ColorDefault.primary,
  },
  inputField: {
    flexDirection: 'row',
    backgroundColor: ColorDefault.offWhite,
    borderRadius: 10,
    borderColor: '#404B5025',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const ScheduleComponent = () => {
  // state
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState<string>('');
  const [show, setShow] = useState(false);

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
      <View style={styles.inputField}>
        <Text style={styles.textInput}>
          {moment(date).format('MM/DD/YYYY HH:mm')}
        </Text>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Icon source={'date'} />
        </TouchableOpacity>
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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
        />
      )}
    </View>
  );
};

export const Schedule = memo(ScheduleComponent, isEqual);
