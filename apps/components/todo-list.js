//@flow
import React, {Component} from 'react';

import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import ListItem from './list-item';

import {todoQL} from '../ql';
import {Relax} from 'iflux2'

@Relax
export default class TodoList extends Component {

  static defaultProps = {
    todos: todoQL
  };

  _ds:Object;

  constructor(props:Object) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
  }


  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.ds.cloneWithRows(this.props.todos.toJS())}
        renderRow={this._renderRow}
      />
    );
  }

  _renderRow = ({id, text, done}: Object, _:string, index:number) => {
    return (<ListItem id={id} text={text} done={done} key={index}/>);
  };
}


const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#FDFDFD'
  }
});
