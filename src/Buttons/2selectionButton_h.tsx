//2 selection button, horizontal 가로
import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

interface Selection_hori {
  text: string;
  textColor: '#000000';
  onPress: () => null;
}

export default class SelectionButton_H2 extends Component<Selection_hori, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={[styles.title, {color: this.props.textColor}]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
    width: 171,
    height: 126,
    borderRadius: 12,
    marginTop: '20%',

    //   width: 300,
    //   height: 50,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#242424',
  },
});
