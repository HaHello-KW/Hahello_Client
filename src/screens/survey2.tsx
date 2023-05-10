import React, {useState, useEffect, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar_Type from '../components/MyUpBar_Type';
import GobackButton from '../components/gobackButton';
// import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';
import {useNavigation} from '@react-navigation/native';
//for testing
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import TypePage from '../components/typePage';

import images from '../../assets/images/index';
//test
import mock_type from "../txtCollection/mock_type.json"
import mock_typeA from "../txtCollection/mock_typeA.json"
import mock_typeB from "../txtCollection/mock_typeB.json"
import mock_typeC from "../txtCollection/mock_typeC.json"
import mock_typeD from "../txtCollection/mock_typeD.json"
import mock_typeE from "../txtCollection/mock_typeE.json"
//asyncstorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  storeData,
  getData,
  containsKey,
  removeData,
  storeMultiData,
  getResponse,
} from './async';
import { TypePageModel } from '../models/typePageModel';
// import handleGet from './axios';

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

export function usePrevState(state: any) {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

const initialType : TypePageModel = {
  Questions_ID: 0,
  page_type: '',
  page_name: '',
  page_level: 0,
  question_type: '',
  question_txt: '',
  selection_txt: [[]],
  first_picker_type: '',
  first_line_txt: '',
  second_picker_type: '',
  second_line_txt: '',
  third_picker_type: '',
  third_line_txt: '',
  img_path: '',
  max_level: 0
}

const Survey2 = () => {
  const {GETURL, TYPE, NUM} = require('./survey');

  const navigation = useNavigation();
  const [input, setInput] = useState();
  var [iterator, setIterator] = useState(0);

  const [jsondata, setJson] = useState('');
  const [nowpage, setNowpage] = useState(jsondata);

  // const GET = () => {
  //   axios
  //     .get(GETURL)
  //     .then(res => {
  //       setJson(res.data);
  //       setNowpage(res.data[iterator]);
  //     })
  //     .catch(error => console.log(error));
  // };

  async function GET() {
    try {
      //응답 성공
      const res = await axios.get(GETURL);
      setJson(res.data.responseDTO);
      setNowpage(res.data.responseDTO[iterator]);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  var imgpath;
  var TypeURL;

  switch (TYPE) {
    case 'A':
      {
        if (NUM == 1) imgpath = images.userA1;
        else if (NUM == 2) imgpath = images.userA2;
        else if (NUM == 3) imgpath = images.userA3;
        else if (NUM == 4) imgpath = images.userA4;
        else if (NUM == 5) imgpath = images.userA5;
      }
      TypeURL = 'http://10.0.2.2:8080/resultPage/A';
      module.exports = {TypeURL, imgpath};
      break;
    case 'B':
      {
        if (NUM == 1) imgpath = images.userB1;
        else if (NUM == 2) imgpath = images.userB2;
        else if (NUM == 3) imgpath = images.userB3;
        else if (NUM == 4) imgpath = images.userB4;
        else if (NUM == 5) imgpath = images.userB5;
      }
      TypeURL = 'http://10.0.2.2:8080/resultPage/B';
      module.exports = {TypeURL, imgpath};
      break;
    case 'C':
      {
        if (NUM == 1) imgpath = images.userC1;
        else if (NUM == 2) imgpath = images.userC2;
        else if (NUM == 3) imgpath = images.userC3;
        else if (NUM == 4) imgpath = images.userC4;
        else if (NUM == 5) imgpath = images.userC5;
      }
      TypeURL = 'http://10.0.2.2:8080/resultPage/C';
      module.exports = {TypeURL, imgpath};
      break;
    case 'D':
      {
        if (NUM == 1) imgpath = images.userD1;
        else if (NUM == 2) imgpath = images.userD2;
        else if (NUM == 3) imgpath = images.userD3;
        else if (NUM == 4) imgpath = images.userD4;
        else if (NUM == 5) imgpath = images.userD5;
      }
      TypeURL = 'http://10.0.2.2:8080/resultPage/D';
      module.exports = {TypeURL, imgpath};
      break;
    case 'E':
      {
        if (NUM == 1) imgpath = images.userE1;
        else if (NUM == 2) imgpath = images.userE2;
        else if (NUM == 3) imgpath = images.userE3;
        else if (NUM == 4) imgpath = images.userE4;
        else if (NUM == 5) imgpath = images.userE5;
      }
      TypeURL = 'http://10.0.2.2:8080/resultPage/E';
      module.exports = {TypeURL, imgpath};
      break;
    default:
      imgpath = null;
      break;
  }
  
  useEffect(() => {
    GET();
  }, []);

  function parentFucntion(x: any) {
    useEffect(() => {
      setInput(x);
    }, [x]);
  }

  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setNowpage(jsondata[iterator]);
  };

  const handleNext = async () => {
    if (iterator < jsondata.length) {
      if (iterator === jsondata.length - 1) {
        await storeData(`type_${TYPE}_${iterator}`, input);
        console.log(await getData(`type_${TYPE}_${iterator}`));
        navigation.navigate('SurveyResult');
      } else {
        await storeData(`type_${TYPE}_${iterator}`, input);
        console.log(await getData(`type_${TYPE}_${iterator}`));
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(jsondata[iterator]);
    }
    getResponse(jsondata.length,`type_${TYPE}`);
  };

  return (
    <>
      <MyUpBar_Type max_level = {nowpage.max_level} current_level={nowpage.page_level} />
      <GobackButton onPress={handleGoback} />
      <TypePage pageContents={nowpage} parentFunction={parentFucntion} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
        <TouchableOpacity style={styles.nxt_bt} onPress={handleNext}>
          <Text style={styles.nxt_txt}>다음</Text>
        </TouchableOpacity>
      </View>
      {/* <Image
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
      /> */}
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
