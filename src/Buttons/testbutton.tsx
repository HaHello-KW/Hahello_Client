import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Proptypes from 'prop-types';

const ChangeColorSelect = props => {
  const [isSelect, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: isSelect ? '#F47100' : '#E3E3E3'},
      ]}
      onPress={() => setSelected(!isSelect)}>
      <Text> style={[styles.txt]}</Text>
    </TouchableOpacity>
  );
};

ChangeColorSelect.defaultProps = {
  txt: null,
};

ChangeColorSelect.propTypes = {
  txt: Proptypes.string,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    width: 324,
    height: 64,
    borderRadius: 8,
    marginBottom: '2%',

    //   width: 300,
    //   height: 50,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#242424',
  },
});

export default ChangeColorSelect;
