import React, { Component }    from 'react';
import { AppLoading, Asset }   from 'expo';
import RootNavigator           from 'children/src/navigators/RootNavigator';
import { YellowBox }           from 'react-native';
import { Provider }            from 'react-redux';
import configureStore          from 'children/src/stores';
import { PersistGate }         from 'redux-persist/integration/react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const { store, persistor } = configureStore();

export default class App extends Component {
  state = {
    isReady: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('children/assets/images/child.png')
      ]),
    ]);
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActionSheetProvider>
            <RootNavigator />
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    );
  }
}
