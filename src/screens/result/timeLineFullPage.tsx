import React from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Touchable,
  SafeAreaView,
  TextBase,
  ScrollView,
  Image,
} from 'react-native';

import {ImageBackground} from 'react-native';
import Homebg from '../../../assets/images/home_start.png';
import NextButton from '../../Buttons/nextButton';
import UserAimg from '../../../assets/images/userA.png';

import base from '../../../assets/images/Rectangle_base.png';
import base_1 from '../../../assets/images/Rectangle_1.png';
import {height} from '@mui/system';
import rectangle_hospital from '../../../assets/images/Rectangle_hospital.png';

import {useState} from 'react';

const TimeLine = () => {
  const tt = 72;

  const test = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            left: 99,
            top: 16,
            width: 2,
            height: 1200,
            zIndex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            left: 95,
            top: 88,
            width: 10,
            height: 10,
            borderRadius: 100,
            zIndex: 2,
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#F2F1F0',
            width: 229,
            height: 48,
            left: 116,
            top: 72,
          }}>
          <Text>결혼한 시기</Text>
        </View>
        <Text style={{position: 'absolute', left: 58, top: 72, fontSize: 12}}>
          2022
        </Text>
        <Text style={{position: 'absolute', left: 46, top: 95, fontSize: 20}}>
          32세
        </Text>

        {/**/}
        <View
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            left: 95,
            top: 16,
            width: 10,
            height: 10,
            borderRadius: 100,
            zIndex: 2,
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#F2F1F0',
            width: 229,
            height: 48,
            left: 116,
            top: 0,
          }}>
          <Text>결혼한 시기</Text>
        </View>
        <Text style={{position: 'absolute', left: 58, top: 4, fontSize: 12}}>
          2022
        </Text>
        <Text style={{position: 'absolute', left: 46, top: 19, fontSize: 20}}>
          32세
        </Text>
      </>
    );
  };
  return (
    <>
      {/* <View
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          left: 99,
          //top: 18,
          width: 2,
          height: 900,
          zIndex: 1,
        }}></View>
      <View
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          left: 95,
          top: 88,
          width: 10,
          height: 10,
          borderRadius: 100,
          zIndex: 2,
        }}></View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#F2F1F0',
          width: 229,
          height: 48,
          left: 116,
          top: 72,
        }}>
        <Text>결혼한 시기</Text>
      </View>
      <Text style={{position: 'absolute', left: 58, top: 72, fontSize: 12}}>
        2022
      </Text>
      <Text style={{position: 'absolute', left: 46, top: 95, fontSize: 20}}>
        34세
      </Text> */}
      {test()}
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </>
  );
};

export default TimeLine;
