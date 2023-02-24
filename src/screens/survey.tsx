import React, {useState, useEffect} from 'react';
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
import testing1 from '../txtCollection/testing1.json';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//콘솔창 에러 숨기기(임시)
console.warn = console.error = () => {};

const Survey = () => {
  // const [contents, setContents] = useState([]);
  // const [defaultpage, setDefaultPage] = useState<defaultPageModel>({
  //   id: 0,
  //   pgLevel: 0,
  //   questionType: '',
  //   questionTxt: '',
  //   selectionTxt: [],
  //   firstPickerType: '',
  //   firstlineTxt: '',
  //   secondPickerType: '',
  //   secondlineTxt: '',
  //   thirdPickerType: '',
  //   thirdlineTxt: '',
  //   nextpage: '',
  // });

  //survey -> survey2
  const navigation = useNavigation();

  //deafultpage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  const [input, setInput] = useState(null);
  function parentFucntion(x: any) {
    setInput(x);
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [contents, setContents] = useState('');

  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing[iterator]);

  //각 페이지마다 입력받은 input들을 inputarr에 담아 handlePost 통해 서버로 inputarr을 전달
  const [inputarr, setInputArr] = useState(
    new Array(testing.length).fill(null),
  );

  //handleget? home의 시작 버튼...? 음
  const handleGet = async () => {
    try {
      //요청 시작 할 때에는 error, contents 초기화
      setError('');
      // setContents(null);
      //loading 상태를 true로 바꿈
      setLoading(true);

      const response = await axios.get('~/survey/default');
      //데이터는 response.data 안에 들어있다. or response.data.data
      setContents(response.data);
    } catch (error) {
      setError('An error has occurred');
    }
    //loading 끄기
    setLoading(false);
  };

  // const form = new FormData();
  // form.append('userInput', inputarr);
  //{ "userInput" : inputarr }

  const handlePost = async (event: any) => {
    try {
      //loading 상태 true로 바꿔주고
      setLoading(true);
      //error, contents 초기화 안해도 되나..? 필요하다면 추가할 것
      //input arr 값을 서버로 전달
      const response = await axios.post(`~/survey`, form);

      //요청이 성공적 + 결과로 새로운 리소스 생성 | POST, PUT
      if (response.status === 201) {
        console.log('success');
        //loading 상태 false로 바꿔주고 inputarr값 reset
        setLoading(false);
        setInputArr(new Array());
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      setError('An error has occurred');
      setLoading(false);
    }
  };

  //다음 핸들러 함수들 안의 console.log들은 확인용임
  const handleGoback = () => {
    inputarr.splice(iterator, 1, null);
    setInputArr(inputarr);
    console.log(inputarr);
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setContents(testing[iterator]);
    // return inputarr;
  };

  //다시 해볼 것 왜 마지막은 다음을 누른 다음에서야 입력이 되는거지?
  const handleNext = () => {
    var arr = [iterator, input];
    inputarr.splice(iterator, 1, arr);
    setInputArr(inputarr);
    console.log(inputarr);
    if (iterator < testing.length) {
      if (iterator === testing.length - 1) {
        //navigation
        navigation.navigate('Survey2');
      } else {
        ++iterator;
        setIterator(iterator);
      }
      setContents(testing[iterator]);
    }
    return inputarr;
  };
  //왜 마지막이 출력안됨? handleNext안에선 되는데?
  console.log('test');
  console.log(inputarr);

  // let obj
  // useEffect(() => {
  //   console.log(iterator);
  //   console.log(input);
  //   console.log('hihi');
  // }, [iterator]);
  //
  // useEffect(() => {
  //   inputarr.splice(iterator, 1, input);
  //   setInputArr(inputarr);
  //   obj = {...inputarr};
  //   console.log(obj);
  // }, []);

  const handler = () => {
    //방법1
    // var it = iterator.toString();
    // useEffect(() => {
    //   AsyncStorage.setItem(it, JSON.stringify(input), () => {
    //     AsyncStorage.mergeItem(it, JSON.stringify(input), () => {
    //       AsyncStorage.getItem(it, (err, result) => {
    //         console.log(result);
    //       });
    //     });
    //   });
    // }, [it]);
    //방법2
    // let data = JSON.stringify(obj);
    // AsyncStorage.setItem('userinput', data, () => {});
  };

  //jsx구성요소 오류 해결 필요
  return (
    <>
      <MyUpBar level={contents.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage pageContents={contents} parentFunction={parentFucntion} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
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
