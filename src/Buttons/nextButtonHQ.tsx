import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Next {
  onPress: () => null;
}

export default class NextButton extends Component<Next, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.title}>다음</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});
