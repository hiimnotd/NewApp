import {ColorDefault} from '@app/src/themes/color';
import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {Information} from './Information';
import {Menu} from './Menu';
import {Schedule} from './Schedule';

const renderScene = SceneMap({
  first: Menu,
  second: Information,
  third: Schedule,
});

const DetailTabComponent = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Menu'},
    {key: 'second', title: 'Information'},
    {key: 'third', title: 'Schedule'},
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

export const DetailTab = memo(DetailTabComponent, isEqual);
