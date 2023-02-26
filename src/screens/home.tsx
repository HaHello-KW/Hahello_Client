import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
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
import Axios from 'axios';
import {ImageBackground} from 'react-native';
// import {RootStackParamList} from '../../../App';
import Homebg from '../../assets/images/home_start.png';
import GobackButton from '../../Buttons/gobackButton';
import NextButton from '../../Buttons/nextButton';

const Q_Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Homebg} style={styles.image}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.welcometxt}>환영합니다, 하해호님!</Text>
        <Text style={styles.descriptxt}>
          나의 유형을 체크하면 맞춤형 콘텐츠와 건강관리를 받아보실 수 있어요!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.startbutton}

        onPress={() => {
          navigation.navigate('Survey');
        }}>


        <Text style={styles.starttxt}>시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.laterbutton} onPress={() => null}>
        <Text style={styles.latertxt}>나중에 할래요</Text>
      </TouchableOpacity>
    </ImageBackground>

    //스타일링 없는 버전
    // <ImageBackground source={Homebg}>
    //   <View>
    //     <Text>환영합니다, 하해호님!</Text>
    //     <Text>
    //       나의 유형을 체크하면 맞춤형 콘텐츠와 건강관리를 받아보실 수 있어요!
    //     </Text>
    //   </View>
    //   <TouchableOpacity onPress={() => navigation.navigate('Q_Default_1')}>
    //     <Text>시작하기</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => null}>
    //     <Text>나중에 할래요</Text>
    //   </TouchableOpacity>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  welcometxt: {
    position: 'absolute',
    left: 52,
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
});
export default Q_Home;
