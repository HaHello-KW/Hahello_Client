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
    third_pickerType: string;
    imgpath: object | null;
    nextpage: string;
};

//default 단계에서는 imgpath 가 null인 경우가 없으므로
//조건문 생략
function Sixline_Picker({
    pglevel,
    first,
    second,
    third,
    first_pickerType,
    second_pickerType,
    third_pickerType,
    imgpath,
    nextpage,
}:props){
    const navigation = useNavigation();
    return(
        <>
            <MyUpBar level={pglevel}/>
            <GobackButton onPress={() => navigation.pop()}/>
            <View style={[UserStyle.container]} />
            <View style={[UserStyle.container3_1]}>
                <Text style={styles.blacktxt}>{first}</Text>
                <PType Type_of_Picker={first_pickerType}></PType>
            </View>
            <View style={[UserStyle.container3_2]}>
                <Text style={styles.blacktxt}>
                    {second}
                </Text>
                <Text style={[UserStyle.descriptionGray]}>
                    보충보충
                </Text>
                <View style={styles.container_test}>
                    <PType Type_of_Picker={second_pickerType}></PType>
                </View>
            </View>
            <View style={[UserStyle.container3_3]}>
                <Text style = {styles.blacktxt}>
                    {third}
                </Text>
                <Text style={[UserStyle.descriptionGray]}>
                    보충보충
                </Text>
                <View style={styles.container_test}>
                    <PType Type_of_Picker={third_pickerType}></PType>
                </View>
            </View>
            <View style={[UserStyle.container2]}>
                <NextButton destination={nextpage} disabled={false}/>
            </View>
            <Image source={imgpath} style={styles.image} />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
      fontSize: 24,
      fontWeight: '400',
      color: '#F47100',
      height: 50,
      width: 300,
      textAlign: 'center',
      //borderColor: '#000000',
      //borderWidth: 1,
      //borderRadius: 12,
      padding: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: '400',
      color: '#C1C1C1',
      textAlign: 'center',
    },
    boxline: {
      marginTop: 80,
      marginBottom: '10%',
      marginRight: '3%',
      marginLeft: '3%',
    },
    boxlineDone: {
      backgroundColor: '#F47100',
    },
    boxlineYet: {
      backgroundColor: '#FFFFFF',
    },
    buttonSelection: {
      backgroundColor: '#F2F2F2',
      width: 300,
      height: 40,
    },
    blacktxt: {
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 23,
      color: '#000000',
      textAlign: 'center',
    },
    coloredtxt: {
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 23,
      color: '#FF7C00',
    },
    input: {
      alignItems: 'center',
      fontSize: 24,
      fontWeight: '400',
      color: '#F47100',
      justifyContent: 'center',
    },
    container_test: {
      // flex: 1,
      flexDirection: 'row',
      // width: 240,
      // height: 140,
      // backgroundColor: '#008000',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      // lineHeight: 34.75,
    },
    image: {
      position: 'absolute',
      left: '36%',
      top: '13%',
      width: 105,
      height: 105,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Sixline_Picker
