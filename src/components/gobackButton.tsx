import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Goback {
  onPress: () => any;
}

export default class GobackButton extends Component<Goback, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.icon}>
        <Image source={require('../../assets/images/goback_icon.png')}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#242424',
    position: 'absolute',
    top:
      Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : getStatusBarHeight(true),
    left: '3%',
  },
});
