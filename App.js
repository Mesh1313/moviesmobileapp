import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';

// Store
import configureStore from './app/store';
// Router
import Router from './app/router';

export default class App extends Component {
  constructor() {
    super();
    this.store = configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <Router/>
      </Provider>
    );
  }
}
