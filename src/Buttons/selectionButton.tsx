import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import PropTypes, {element, number} from 'prop-types';
import {UserStyle} from '../styling/userLayout';

//
//
//route 활용해 네비게이션 기능 추가해야함
// const showMsg = event => {
//   const msg = event.target.gtAttribute('selectNum');
//   console.log(msg);
// };

type props = {
  txt: string;
  isSelected: any | boolean;
  handlePress: any;
  elementIndex: number;
};

function SelectionButton({txt, isSelected, handlePress, elementIndex}: props) {
  // const [isSelect, setSelected] = useState(false);
  // const disabled = () => {
  //   if (isSelect) return false;
  //   else return true;
  // };
  // console.log(disabled());
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isSelected ? '#F47100' : '#f2f2f2'},
        ]}
        onPress={() => handlePress(elementIndex)}>
        <Text style={[styles.txt, {color: isSelected ? '#fbfbfb' : '#242424'}]}>
          {txt}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    width: 324,
    height: 64,
    borderRadius: 8,
    marginTop: '2%',

    //   width: 300,
    //   height: 50,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    // color: '#242424',
  },
});

export default SelectionButton;
