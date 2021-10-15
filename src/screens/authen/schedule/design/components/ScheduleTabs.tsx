import {ColorDefault} from '@app/src/themes/color';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {History} from './History';
import {OnGoing} from './OnGoing';

const styles = StyleSheet.create({});

const renderScene = SceneMap({
  first: OnGoing,
  second: History,
});

const ScheduleTabsComponent = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'On Going'},
    {key: 'second', title: 'History'},
  ]);

  const renderTabBar = useCallback(props => {
    return (
      <TabBar
        {...props}
        style={{backgroundColor: 'transparent', elevation: 0}}
        indicatorStyle={{backgroundColor: ColorDefault.tint}}
        activeColor={ColorDefault.tint}
        inactiveColor={ColorDefault.disable}
        renderLabel={({route, color}) => (
          <Text style={{fontWeight: 'bold', color}}>{route.title}</Text>
        )}
      />
    );
  }, []);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export const ScheduleTabs = memo(ScheduleTabsComponent, isEqual);
