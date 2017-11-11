import React, {Component} from 'react';

import {
  View,
  StyleSheet
}  from 'react-native';
import AppStore from './store';
import {StoreProvider} from 'iflux2'

import TextEditor from './components/text-editor';
import ActionList from './components/action-list';
import TodoList from './components/todo-list';

@StoreProvider(AppStore, {debug: true})
export default class TodoMVC extends Component {
  constructor(props:Object) {
    super(props);
  }


  


  render() {
    return (
      <View style={styles.container}>
        <TextEditor/>
        <ActionList/>
        <TodoList/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD'
  }
});


