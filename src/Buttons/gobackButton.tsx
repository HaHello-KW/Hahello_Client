import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Goback {
  onPress: () => null;
}

export default class GobackButton extends Component<Goback, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Icon
        style={styles.icon}
        name="arrow-left"
        size={30}
        onPress={this.props.onPress}
      />
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
