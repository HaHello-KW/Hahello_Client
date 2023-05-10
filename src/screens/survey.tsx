import React, {useState, useEffect, useReducer, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar_Default from '../components/MyUpBar_Default';
import GobackButton from '../components/gobackButton';
import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';
import mock_default from '../txtCollection/mock_default.json'
import mock_typeA from '../txtCollection/mock_typeA.json'
import mock_typeB from '../txtCollection/mock_typeB.json'



//for testing
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';

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

const initialDefault: defaultPageModel = {
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
  img_path: ''
}

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

const Survey = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState();
  
  var [iterator, setIterator] = useState(0);
  const [jsondata, setJson] = useState([]);
  const [nowpage, setNowpage] = useState(initialDefault);
  
  // const GET = () => {
  //   axios
  //     .get('http://52.79.207.4/question/default')
  //     .then(res => {
  //       setJson(res.data.responseDTO);
  //       setNowpage(res.data.responseDTO[0]);
  //     })
  //     .catch(error => console.log(error))
  //     .then(function () {
  //       console.log('loading');
  //     });
  // };

  async function getData() {
    try {
      //응답 성공
      const res = await axios.get('http://52.79.207.4/question/default');
      console.log(res.data.responseDTO);
      setJson(res.data.responseDTO);
      setNowpage(res.data.responseDTO[iterator]);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    // GET();
    getData();
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

  //GET함수에서 로컬호스트 대신에 10.0.2.2를 넣어 주었으니 handleNext함수
  //안에서도 똑같이 url을 바꿔줘야 한다
  //'http://10.0.2.2:8080/defaultPage'
  const handleNext = async () => {
    if (iterator < jsondata.length) {
      if (iterator === jsondata.length - 1) {
        storeData(`userinput_${iterator}`, input);

        var GETURL;
        var TYPE;
        var NUM;

        switch (await getData(`userinput_${iterator - 1}`)) {
          case 0:
            NUM = 1;
            break;
          case 1:
            NUM = 2;
            break;
          case 2:
            NUM = 3;
            break;
          case 3:
            NUM = 4;
            break;
          case 4:
            NUM = 5;
            break;
          default:
            console.log('testing2');
        }

        switch (await getData(`userinput_${iterator}`)) {
          case 0:
            GETURL = 'http://52.79.207.4' + '/question/type/A';
            TYPE = 'A';

            module.exports = {GETURL, TYPE, NUM};

            break;
          case 1:
            GETURL = 'http://52.79.207.4' + '/question/type/B';
            TYPE = 'B';

            module.exports = {GETURL, TYPE, NUM};

            break;
          case 2:
            GETURL = 'http://52.79.207.4' + '/question/type/C';
            TYPE = 'C';

            module.exports = {GETURL, TYPE, NUM};

            break;
          case 3:
            GETURL = 'http://52.79.207.4/question/type/D';
            TYPE = 'D';

            module.exports = {GETURL, TYPE, NUM};

            break;
          case 4:
            GETURL = 'http://52.79.207.4/question/type/E';
            TYPE = 'E';

            module.exports = {GETURL, TYPE, NUM};

            break;
          default:
            console.log('testing');
        }
        //navigation
        navigation.navigate('Survey2');
      } else {
        storeData(`userinput_${iterator}`, input);
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(jsondata[iterator]);
    }
  };

  var NUM;
  const getNUM = async () => {
    switch (await getData(`userinput_1`)) {
      case 0:
        NUM = 1;
        module.exports = {NUM};
        break;
      case 1:
        NUM = 2;
        module.exports = {NUM};
        break;
      case 2:
        NUM = 3;
        module.exports = {NUM};
        break;
      case 3:
        NUM = 4;
        module.exports = {NUM};
        break;
      case 4:
        NUM = 5;
        module.exports = {NUM};
        break;
      default:
        console.log('testing2');
    }
  };

  return (
    <>
      <MyUpBar_Default level = {nowpage.page_level} />
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
