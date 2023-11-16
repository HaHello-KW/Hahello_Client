import React, {useState, useEffect, useReducer, useRef} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar_Default from '../components/MyUpBar_Default';
import GobackButton from '../components/gobackButton';
import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';

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
  getResponse,
  storingData,
  parseData,
} from './async';
import {userdataModel} from '../models/userdataModel';

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
  img_path: '',
};

//default_1, default_2, default_3이라는 키 값 안에 저장될 배열 형식
const userdataDefault: userdataModel = {
  questionID: 0,
  question_Type: '',
  pglevel: 0,
  answer_selection: 0,
  answer_first_type: '',
  answer_first_content: '',
  answer_second_type: '',
  answer_second_content: '',
  answer_third_type: '',
  answer_third_content: '',
};

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

const Survey = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState();

  var [iterator, setIterator] = useState(0);
  const [jsondata, setJson] = useState([]);
  const [nowpage, setNowpage] = useState(initialDefault);

  //사용자 답변을 포함한 api -> asyncstorage에
  const [userdata, setUserdata] = useState(userdataDefault);

  async function GET() {
    try {
      //응답 성공
      const res = await axios.get('http://cnslab.org:8000/question/default');

      setJson(res.data.responseDTO);
      setNowpage(res.data.responseDTO[iterator]);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
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
        //초기화
        const serializedValues = JSON.stringify(userdata);
        await AsyncStorage.setItem(`default_${iterator}`, serializedValues);
        //아이템을 가져와서 파싱
        const storedValues = await AsyncStorage.getItem(`default_${iterator}`);
        const parsedValues =
          storedValues !== null ? JSON.parse(storedValues) : null;
        //파싱 후 데이터 업데이트
        parsedValues.questionID = jsondata[iterator].Questions_ID;
        parsedValues.question_Type = jsondata[iterator].question_type;
        parsedValues.pglevel = jsondata[iterator].page_level;
        if (jsondata[iterator].question_type === 'Threeline_Picker') {
          parsedValues.answer_first_type = 'None';
          parsedValues.answer_first_content = null;
          parsedValues.answer_second_type = 'DatePicker';
          parsedValues.answer_second_content = input;
          parsedValues.answer_third_type = 'None';
          parsedValues.answer_third_content = null;
        } else if (jsondata[iterator].question_type === 'Button_Selector') {
          parsedValues.answer_selection = input;
        }
        //업데이트 후 다시 저장
        const updatedValues = JSON.stringify(parsedValues);
        await AsyncStorage.setItem(`default_${iterator}`, updatedValues);

        // await storeData(`default_${iterator}`, input);
        var GETURL;
        var TYPE;
        var NUM;

        const storedValues2 = await AsyncStorage.getItem(
          `default_${iterator - 1}`,
        );
        const parsedValues2 =
          storedValues !== null ? JSON.parse(storedValues2) : null;

        switch (parsedValues2.answer_selection) {
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

        switch (parsedValues.answer_selection) {
          case 0:
            GETURL = 'http://cnslab.org:8000' + '/question/type/A';
            TYPE = 'A';
            module.exports = {GETURL, TYPE, NUM};
            break;
          case 1:
            GETURL = 'http://cnslab.org:8000' + '/question/type/B';
            TYPE = 'B';
            module.exports = {GETURL, TYPE, NUM};
            break;
          case 2:
            GETURL = 'http://cnslab.org:8000' + '/question/type/C';
            TYPE = 'C';
            module.exports = {GETURL, TYPE, NUM};
            break;
          case 3:
            GETURL = 'http://cnslab.org:8000/question/type/D';
            TYPE = 'D';
            module.exports = {GETURL, TYPE, NUM};
            break;
          case 4:
            GETURL = 'http://cnslab.org:8000/question/type/E';
            TYPE = 'E';
            module.exports = {GETURL, TYPE, NUM};
            break;
          default:
            console.log('testing');
        }
        //navigation
        navigation.navigate('Survey2');
      } else {
        //초기화
        const serializedValues = JSON.stringify(userdata);
        await AsyncStorage.setItem(`default_${iterator}`, serializedValues);
        //아이템을 가져와서 파싱
        const storedValues = await AsyncStorage.getItem(`default_${iterator}`);
        const parsedValues =
          storedValues !== null ? JSON.parse(storedValues) : null;
        //파싱 후 데이터 업데이트
        parsedValues.questionID = jsondata[iterator].Questions_ID;
        parsedValues.question_Type = jsondata[iterator].question_type;
        parsedValues.pglevel = jsondata[iterator].page_level;
        if (jsondata[iterator].question_type === 'Threeline_Picker') {
          parsedValues.answer_first_type = 'None';
          parsedValues.answer_first_content = null;
          parsedValues.answer_second_type = 'DatePicker';
          parsedValues.answer_second_content = input;
          parsedValues.answer_third_type = 'None';
          parsedValues.answer_third_content = null;
        } else if (jsondata[iterator].question_type === 'Button_Selector') {
          parsedValues.answer_selection = input;
        }
        //업데이트 후 다시 저장
        const updatedValues = JSON.stringify(parsedValues);
        await AsyncStorage.setItem(`default_${iterator}`, updatedValues);

        // await storeData(`default_${iterator}`, input);
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(jsondata[iterator]);
      getResponse(jsondata.length, 'default');
    }
  };

  return (
    <>
      <MyUpBar_Default level={nowpage.page_level} />
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
