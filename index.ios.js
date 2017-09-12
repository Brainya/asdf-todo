/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import TodoListContainer from 'AsdfTodo/TodoListContainer';

export default class AsdfToDo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoListContainer />
    );
  }
}

AppRegistry.registerComponent('AsdfToDo', () => AsdfToDo);
