import React, {useState, useEffect, useReducer, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar from '../components/MyUpBar';
import GobackButton from '../components/gobackButton';
import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';

//for testing
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import testing from '../txtCollection/testing.json';

import Survey2 from './survey2';

import testing1 from '../txtCollection/testing1.json';

//asyncstorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  storeData,
  getData,
  containsKey,
  removeData,
  storeMultiData,
} from './async';
import handleGet from './axios';

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

const Survey = () => {
  const navigation = useNavigation();

  const [jsondata, setJson] = useState('');

  const [input, setInput] = useState();
  var [iterator, setIterator] = useState(0);

  const [nowpage, setNowpage] = useState(jsondata);

  const GET = () => {
    axios
      .get('http://10.0.2.2:8080/defaultPage')
      .then(res => {
        //console.log(res.data);
        console.log('1');
        setJson(res.data);
        console.log(jsondata);
        console.log('2');
        setNowpage(res.data[iterator]);
        console.log(nowpage);

        // return res.data
      })
      .catch(error => console.log(error))
      .then(function () {
        console.log('loading');
      });
  };
  useEffect(() => {
    GET();
  }, []);
  // console.log(nowpage);

  function parentFucntion(x: any) {
    // setPagename(contents.pagename);
    useEffect(() => {
      setInput(x);
    }, [x]);
  }

  //다음 핸들러 함수들 안의 console.log들은 확인용임
  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setNowpage(jsondata[iterator]);
  };

  //GET함수에서 로컬호스트 대신에 10.0.2.2를 넣어 주었으니 handleNext함수
  //안에서도 똑같이 url을 바꿔줘야 한다
  //'http://10.0.2.2:8080/defaultPage'
  const handleNext = async () => {
    if (iterator < jsondata.length) {
      if (iterator === jsondata.length - 1) {
        storeData(`userinput_${iterator}`, input);

        var GETURL;
        var TYPE;
        switch (await getData(`userinput_${iterator}`)) {
          case 0:
            //console.log('type a');
            // storeData('typeUrl', 'http://10.0.2.2:8080/typePage/A');
            // storeData('typeUrl', 'http://localhost:8080/typePage/A');
            GETURL = 'http://10.0.2.2:8080/typePage/A';
            TYPE = 'A'
            module.exports = {GETURL, TYPE};
            break;
          case 1:
            //console.log('type b');
            // storeData('typeUrl', 'http://10.0.2.2:8080/typePage/B');
            // storeData('typeUrl', 'http://localhost:8080/typePage/B');
            GETURL = 'http://10.0.2.2:8080/typePage/B';
            TYPE = 'B'
            module.exports = {GETURL, TYPE};
            break;
          case 2:
            //console.log('type c');
            // storeData('typeUrl', 'http://10.0.2.2:8080/typePage/A');
            // storeData('typeUrl', 'http://localhost:8080/typePage/C');
            GETURL = 'http://10.0.2.2:8080/typePage/C';
            TYPE = 'C'
            module.exports = {GETURL, TYPE};
            break;
          case 3:
            //console.log('type d');
            // storeData('typeUrl', 'http://10.0.2.2:8080/typePage/A');
            // storeData('typeUrl', 'http://localhost:8080/typePage/D');
            GETURL = 'http://10.0.2.2:8080/typePage/D';
            TYPE = 'D'
            module.exports = {GETURL, TYPE};
            break;
          case 4:
            //console.log('type e');
            // storeData('typeUrl', 'http://10.0.2.2:8080/typePage/A');
            // storeData('typeUrl', 'http://localhost:8080/typePage/E');
            GETURL = 'http://10.0.2.2:8080/typePage/E';
            TYPE = 'E'
            module.exports = {GETURL, TYPE};
            break;
          default:
            console.log('testing');
        }
        //navigation
        navigation.navigate('Survey2');
      } else {
        storeData(`userinput_${iterator}`, input);
        //console.log(input);
        
        // setPagename(nowpage.pagename);
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(jsondata[iterator]);
      // setPagename(contents.pagename);
    }
  };
  //console.log(url);
  //getData(`userinput_${contents.length - 1}`);

  // //jsx구성요소 오류 해결 필요

  return (
    <>
      <MyUpBar level={nowpage.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage pageContents={nowpage} parentFunction={parentFucntion} />
      <View style={[defaultPageStyles.container_next]}>
        <TouchableOpacity style={styles.nxt_bt} onPress={handleNext}>
          <Text style={styles.nxt_txt}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
  // }
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

export default Survey;
