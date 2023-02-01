import {useLinkProps, useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import PropTypes, {array, number, string} from 'prop-types';
import SelectionButton from '../../Buttons/selectionButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import {UserStyle} from '../../styling/userLayout';
import NextButton from '../../Buttons/nextButton';
import UserImg from '../../Buttons/userImg';
import images from '../../img';
import MyUpBar from '../../upbar/MyUpBar';
import GobackButton from '../../Buttons/gobackButton';
import {DefaultStyle} from '../../styling/defaultLayout';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PType from '../converter/dateConverter';

type props = {
  pglevel: number;
  first: string;
  second: string;
  third: string;
  first_pickerType: string;
  second_pickerType: string;
  imgpath: object | null;
  nextpage: string;
};

//pickerType : datePicker, yearPicker, numberPicker, None
function Threeline_Picker({
  pglevel,
  first,
  second,
  third,
  first_pickerType,
  second_pickerType,
  imgpath,
  nextpage,
}: props) {
  const navigation = useNavigation();
  if (imgpath === null) {
    if (second_pickerType == 'None') {
      return (
        <>
          <MyUpBar level={pglevel} />
          <GobackButton onPress={() => navigation.pop()} />
          <View style={styles.container}>
            <View style={styles.container_question}>
              <Text style={styles.text}>{first}</Text>
              <View style={styles.container_t}>
                <PType Type_of_Picker={first_pickerType}></PType>
                <Text style={styles.text}>{second}</Text>
              </View>
              <View style={styles.container_t}>
                <Text style={styles.text}>{third}</Text>
              </View>
            </View>
            <View style={styles.container_contents} />
          </View>
          <View style={[DefaultStyle.container2]}>
            <NextButton destination={nextpage} disabled={false} />
          </View>
        </>
      );
    } else {
      return (
        <>
          <MyUpBar level={pglevel} />
          <GobackButton onPress={() => navigation.pop()} />
          <View style={styles.container}>
            <Text style={styles.text}>{first}</Text>
            <View style={styles.container_t}>
              <PType Type_of_Picker={first_pickerType}></PType>
              <Text style={styles.text}>{second}</Text>
            </View>
            <View style={styles.container_t}>
              <PType Type_of_Picker={second_pickerType}></PType>
              <Text style={styles.text}>{third}</Text>
            </View>
          </View>
          <View style={[DefaultStyle.container2]}>
            <NextButton destination={nextpage} disabled={false} />
          </View>
        </>
      );
    }
  } else {
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_t: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_question: {
    flex: 4,
    // flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_contents: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
    fontWeight: '400',
    color: '#f47100',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});

export default Threeline_Picker;
