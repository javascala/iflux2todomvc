/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoMVC from './apps';

export default class iflux2todomvc extends Component {
  render() {
    return (
      <TodoMVC/>
    );
  }
}

AppRegistry.registerComponent('iflux2todomvc', () => iflux2todomvc);
