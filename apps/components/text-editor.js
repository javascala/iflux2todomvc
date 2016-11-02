//@flow
import React, {Component} from 'react' ;

import {valueQL} from '../ql';
import {Relax} from 'iflux2';

import {
  View,
  Dimensions,
  TextInput,
  PixelRatio,
  StyleSheet,
} from 'react-native';


const {width: SCREEN_WIDTH} = Dimensions.get('window');

const noop = () => {
};

/**
 * TextEditor
 */
@Relax
export default class TextEditor extends Component {

  static defaultProps = {
    value: valueQL,
    addTodo: noop,
    changeValue: noop,
    submit: noop
  };

  render() {
    return (
      <TextInput
        style={styles.textInput}
        clearButtonMode='while-editing'
        clearTextOnFocus={true}
        placeholder={'type some thing here'}
        value={this.props.value}
        onEndEditing={ this._handleEndEditing }
        onChangeText={ this._handleChangeText }
      />
    );
  }

  _handleChangeText = (text:string) => {
    this.props.changeValue(text)
  };


  _handleEndEditing = (e:Object) => {
    this.props.addTodo(e.nativeEvent.text);
  };
}

const styles = StyleSheet.create({
  textInput: {
    width: SCREEN_WIDTH,
    height: 100,
    backgroundColor: '#FDFDFD',
    color: '#666',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
    borderRadius: 3
  }
});
