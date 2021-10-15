import {RootNavigation} from '@navigation/RootNavigator';
import notifee from '@notifee/react-native';
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/store/store';

export const window = Dimensions.get('window');

const App = () => {
  //states
  const [loading, setLoading] = useState(true);

  //function
  async function bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
    }
  }

  useEffect(() => {
    bootstrap()
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  if (loading) {
    return null;
  }

  //render
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
