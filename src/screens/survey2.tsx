import React, {useState, useEffect, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar from '../components/MyUpBar';
import GobackButton from '../components/gobackButton';
// import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';

//for testing
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import testing from '../txtCollection/testing.json';
import testing2 from '../txtCollection/testing2.json';
import TypePage from '../components/typePage';
import {useNavigation} from '@react-navigation/native';
import UserImg from '../components/userImg';
import UserAimg from '../../assets/images/userA.png';

import handleGet from './axios';

//asyncstorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  storeData,
  getData,
  containsKey,
  removeData,
  storeMultiData,
} from './async';

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

const MAX = 3;

export function usePrevState(state: any) {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

const Survey2 = () => {
  const [t, ff] = useState(null);
  const GETURL = async () => {
    ff(await getData('typeUrl'));
  };

  GETURL();
  console.log(t);

  const navigation = useNavigation();

  //typepage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)

  const jsondata = handleGet(t); //t 에는 url 들어가있다.

  var [iterator, setIterator] = useState(0);

  const [nowpage, setNowpage] = useState(jsondata[0]);

  var [iterator, setIterator] = useState(0);

  // const [inputarr, setInputArr] = useState(new Array(MAX).fill(null))

  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setNowpage(jsondata[iterator]);
    //setPagename(nowpage.pagename);
  };

  const handleNext = () => {
    if (iterator < jsondata.length) {
      if (iterator === jsondata.length - 1) {
      } else {
        // setPagename(contents.pagename);
        ++iterator;
        setIterator(iterator);
      }
      // setPagename(contents.pagename);
      setNowpage(jsondata[iterator]);
      //setPagename(contents.pagename);
    }
  };

  //jsx구성요소 오류 해결 필요
  //survey에 default, type공통으로 겹치는 myupbar, goback, next button을 구현해야하나?
  return (
    <>
      <MyUpBar level={nowpage.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <TypePage pageContents={nowpage} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
        <TouchableOpacity style={styles.nxt_bt} onPress={handleNext}>
          <Text style={styles.nxt_txt}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nxt_bt: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    marginTop: '2%',
    //크기 px아닌 %로 설정
    //selection button box와 동일한 구조로
    width: '70%',
    height: '45%',
    borderRadius: 5,
  },
  nxt_txt: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});

export default Survey2;
