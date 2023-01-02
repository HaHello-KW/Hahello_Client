import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import {Box, HStack} from '@react-native-material/core';

import Homebg from '../../../assets/images/home_start.png';
import {ImageBackground} from 'react-native';
import {unstable_getNormalizedScrollLeft} from '@mui/utils';

import React, {Component} from 'react';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const heightSource = new Array(); // 키 배열 객체 선언

const weightSource = new Array(); // 몸무게 배열 객체 선언

const WQ_1 = ({navigation, route}) => {
  // const [time, setTime] = React.useState(asPickerFormat(new Date()));

  for (var i = 120; i < 210; i++) {
    heightSource.push(i);
  } //키 배열 초기화

  for (var i = 30; i < 150; i++) {
    weightSource.push(i);
  } //몸무게 배열 초기화

  return (
    <>
      <ImageBackground source={Homebg} style={styles.image}>
        <GobackButton onPress={() => navigation.pop()}></GobackButton>
        <View style={styles.container_0}></View>
        <View style={styles.container_1}>
          <View style={styles.container_1_1}>
            <Text style={styles.infoText}>나의 키와 몸무게는</Text>
          </View>
          <View style={styles.container_1_2}>
            <View style={styles.container_1_2_1}>
              <Text style={styles.content}>
                맞춤형 컨텐츠를 추천받을 수 있어
              </Text>
              <View style={styles.container_1_2_2}>
                <View style={styles.container_1_2_2_1}>
                  <ScrollPicker
                    dataSource={heightSource}
                    selectedIndex={42}
                    renderItem={(data, index) => {
                      //
                      return (
                        <View>
                          <Text>{data}cm</Text>
                        </View>
                      );
                    }}
                    onValueChange={(data, selectedIndex) => {
                      //
                    }}
                    wrapperHeight={180}
                    wrapperWidth={150}
                    wrapperColor="#FFFFFF"
                    itemHeight={60}
                    highlightColor="#d8d8d8"
                    highlightBorderWidth={2}
                  />
                </View>

                <View style={styles.container_1_2_2_2}>
                  <ScrollPicker
                    dataSource={weightSource}
                    selectedIndex={24}
                    renderItem={(data, index) => {
                      //
                      return (
                        <View>
                          <Text>{data}kg</Text>
                        </View>
                      );
                    }}
                    onValueChange={(data, selectedIndex) => {
                      //
                    }}
                    wrapperHeight={180}
                    wrapperWidth={150}
                    wrapperColor="#FFFFFF"
                    itemHeight={60}
                    highlightColor="#d8d8d8"
                    highlightBorderWidth={2}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container_1_3}>
            <View style={styles.container_1_3_1}></View>
            <View style={styles.container_1_3_2}>
              <NextButton
                onPress={() => navigation.navigate('WQ_2')}></NextButton>
            </View>
          </View>
        </View>
      </ImageBackground>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    //height: '43%',
    flex: 1,
  },
  container_0: {
    flex: 165,
  },
  container_1: {
    flex: 680,
    backgroundColor: 'white',
  },
  container_1_1: {
    textAlign: 'center',
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_1_2: {
    flex: 1.2,
    //backgroundColor: 'white',
  },
  container_1_2_1: {
    flex: 2,
    //backgroundColor: 'white',
  },
  container_1_2_2: {
    flexDirection: 'row',
    flex: 9,
    //backgroundColor: 'blue',
  },
  container_1_2_2_1: {
    flex: 9,
    //backgroundColor: 'blue',
  },
  container_1_2_2_2: {
    flex: 9,
    //backgroundColor: 'blue',
  },
  container_1_3: {
    flex: 0.8,
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_1_3_1: {
    flex: 2,
  },
  container_1_3_2: {
    flex: 1.3,
  },
  infoText: {
    position: 'absolute',
    width: 252,
    height: 35,
    left: 100,
    top: 110,
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    //textAlign: 'center',
    lineHeight: 34.75,
  },
  content: {
    // position: 'absolute',
    // width: 252,
    // height: 35,
    // left: 70,
    // top: 0,
    flex: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  view: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default WQ_1;
