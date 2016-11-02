import React, {Component} from 'react';

import {
  View,
  StyleSheet
}  from 'react-native';
import AppStore from './store';
import {StoreProvider} from 'iflux2'

import TextEditor from './components/text-editor';
import ActionList from './component/action-list';
import TodoList from './component/todo-list';

@StoreProvider(AppStore, {debug: true})
export default class TodoMVC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextEditor value={ inputValue }/>
        <ActionList filter={filter}/>
        <TodoList store={ store }/>
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


