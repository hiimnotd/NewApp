import {HeaderTitle} from '@app/src/components';
import {Background} from '@app/src/components/Background/Background';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {View, Text, StyleSheet} from 'react-native';

import {ScheduleTabs} from './components/ScheduleTabs';

const styles = StyleSheet.create({});

const ScheduleComponent = () => {
  return (
    <Background>
      <HeaderTitle title={'Schedule'} />
      <ScheduleTabs />
    </Background>
  );
};

export const Schedule = memo(ScheduleComponent, isEqual);
