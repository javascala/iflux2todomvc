//@flow
import React, {Component} from 'react';

import {
  View,
  Text,
  PixelRatio,
  StyleSheet,
  TouchableOpacity
}from 'react-native';
import {Relax} from 'iflux2'

const noop = () => {};

@Relax
export default class ActionList extends Component {
  static defaultProps = {
    changeFilter: noop
  };
  
  render() {
    const {filter} = this.props;

    return (
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.filterIterm}
          onPress={() => this.props.changeFilter("")}>
          <Text style={[styles.font, filter == 0 && {color: '#e63a59'}]}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterIterm}
          onPress={() => this.props.changeFilter("Activity")}>
          <Text style={[styles.font, filter == 1 && {color: '#e63a59'}]}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterIterm}
          onPress={() => this.props.changeFilter("xxx")}>
          <Text style={[styles.font, filter == 2 && {color: '#e63a59'}]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#eee',
    backgroundColor: '#fff'
  },
  filterIterm: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
