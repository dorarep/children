import React, { Component } from 'react';
import RootNavigator        from 'children/src/navigators/RootNavigator';
import { YellowBox }        from 'react-native';
import { Provider }         from 'react-redux';
import configureStore       from 'children/src/stores';
import { PersistGate }      from 'redux-persist/integration/react';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
