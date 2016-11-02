//@flow
import React, {Component} from 'react';

import {
  View,
  Text,
  Switch,
  PixelRatio,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Relax} from 'iflux2'

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const noop = () => {};

@Relax
export default class ListItem extends Component {
  static defaultProps = {
    deleteTodo: noop,
    toggle: noop
  };


  render() {
    return (
      <View style={styles.item}>
        <View style={styles.rowView}>
          <Switch
            value={this.props.done}
            onValueChange={ (val) => this._handleValueChange(this.props.index, val) }
            style={styles.switch}/>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <TouchableOpacity style={styles.delete}
                          onPress={()=> this.props.deleteTodo(this.props.index)}>
          <Text style={styles.font}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }


  _handleValueChange = (index:number, val:boolean) => {
    this.props.toggle(index);
  };
}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
    width: SCREEN_WIDTH,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  switch: {
    marginLeft: 10
  },
  text: {
    color: '#666',
    marginLeft: 10
  },
  font: {
    color: '#666'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  delete: {
    marginRight: 10
  }
});
