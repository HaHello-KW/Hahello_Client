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
} from 'react-native';

import {ImageBackground} from 'react-native';
import Homebg from '../../../assets/images/home_start.png';
import NextButton from '../../Buttons/nextButton';

import {UserStyle} from '../../styling/userLayout';
import GobackButton from '../../components/gobackButton';

const Q_RESULT = ({navigation, route}) => {
  return (
    <>
      <ImageBackground source={Homebg} style={styles.image}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.welcometxt}>수고하셨습니다!</Text>
          <Text style={styles.descriptxt}>
            검사가 완료되었습니다. {'\n'}나의 유형을 확인해보세요
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.navigate('RESULT_HOME')}>
          <Text style={styles.text3}>검사결과보기</Text>
        </TouchableOpacity>
      </ImageBackground>
      <GobackButton onPress={() => navigation.pop()} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  welcometxt: {
    position: 'absolute',
    left: 92,
    top: 280,
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    // lineHeight: '100%',
    // letterSpacing: -0.8,
  },
  descriptxt: {
    position: 'absolute',
    width: 250,
    height: 50,
    left: 74,
    top: 340,
    color: '#242424',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  startbutton: {
    position: 'absolute',
    width: 250,
    height: 48,
    left: 70,
    bottom: 100,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    justifyContent: 'center',
  },
  starttxt: {
    color: '#242424',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  laterbutton: {
    position: 'absolute',
    width: 250,
    height: 48,
    left: 70,
    bottom: 40,
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  latertxt: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    //다음
    position: 'absolute',
    left: 65,
    bottom: 40,
    width: 260,
    height: 48,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text3: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#F47100',
  },
});
export default Q_RESULT;
