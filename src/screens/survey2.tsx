import React, {useState, useEffect, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar from '../components/MyUpBar';
import GobackButton from '../components/gobackButton';
// import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';
import {useNavigation} from '@react-navigation/native';
//for testing
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import testing from '../txtCollection/testing.json';
import testing2 from '../txtCollection/testing2.json';
import TypePage from '../components/typePage';

import UserImg from '../components/userImg';
import UserAimg from '../../assets/images/userA.png';

import handleGet from './axios';

import images from '../../assets/images/index';

//asyncstorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  storeData,
  getData,
  containsKey,
  removeData,
  storeMultiData,
} from './async';
// import handleGet from './axios';

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

// const MAX = 3;

export function usePrevState(state: any) {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

const Survey2 = () => {
  const navigation = useNavigation();

  const [jsondata, setJson] = useState('');

  const [input, setInput] = useState();
  var [iterator, setIterator] = useState(0);

  const [nowpage, setNowpage] = useState(jsondata);

  const [url, setUrl] = useState('');

  //store에 저장되어 있는 url을 이용하여 axios.get해온다
  const GET = () => {
    axios
      .get(GETURL)
      .then(res => {
        //console.log(res.data);
        // console.log('1');
        setJson(res.data);
        // console.log(jsondata);
        // console.log('2');
        setNowpage(res.data[iterator]);
        // console.log(nowpage);
        // return res.data
      })
      .catch(error => console.log(error));
  };

  //전역변수 moduel 사용
  const {GETURL, TYPE, NUM} = require('./survey');

  var imgpath;
  var TypeURL;
  switch (TYPE) {
    case 'A':
      imgpath = images.userA;
      TypeURL = 'http://10.0.2.2:8080/resultPage/A';
      module.exports = {TypeURL, imgpath};
      break;
    case 'B':
      imgpath = images.userB;
      TypeURL = 'http://10.0.2.2:8080/resultPage/B';
      module.exports = {TypeURL, imgpath};
      break;
    case 'C':
      imgpath = images.userC;
      TypeURL = 'http://10.0.2.2:8080/resultPage/C';
      module.exports = {TypeURL, imgpath};
      break;
    case 'D':
      imgpath = images.userD;
      TypeURL = 'http://10.0.2.2:8080/resultPage/D';
      module.exports = {TypeURL, imgpath};
      break;
    case 'E':
      imgpath = images.userE;
      TypeURL = 'http://10.0.2.2:8080/resultPage/E';
      module.exports = {TypeURL, imgpath};
      break;
    default:
      imgpath = null;
      break;
  }

  //asyncstorage 사용
  // const GETURL = async () => {
  //   setUrl(await getData('typeUrl'));
  // };
  // GETURL();
  // //console.log(`${url}`);
  // console.log(url);

  useEffect(() => {
    GET();
    console.log(TYPE);
    console.log(NUM);
  }, []);
  //console.log(jsondata);
  //console.log(nowpage);

  function parentFucntion(x: any) {
    // setPagename(contents.pagename);
    useEffect(() => {
      setInput(x);
    }, [x]);
  }

  //typepage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  //const jsondata = handleGet(t); //t 에는 url 들어가있다. 잠시 보류
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
        navigation.navigate('SurveyResult');
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
  //imgpath형식 : ex) A-1

  //jsx구성요소 오류 해결 필요
  //survey에 default, type공통으로 겹치는 myupbar, goback, next button을 구현해야하나?
  return (
    <>
      <MyUpBar level={nowpage.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <TypePage pageContents={nowpage} parentFunction={parentFucntion} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
        <TouchableOpacity style={styles.nxt_bt} onPress={handleNext}>
          <Text style={styles.nxt_txt}>다음</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={imgpath}
        style={{
          position: 'absolute',
          left: '36%',
          top: '13%',
          width: 105,
          height: 105,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      {/* <UserImg img={HQimg} /> */}
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
