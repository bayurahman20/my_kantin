import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
