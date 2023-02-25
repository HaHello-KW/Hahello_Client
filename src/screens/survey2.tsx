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

  const navigation = useNavigation();

  //typepage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  const [inputarr, setInputarr] = useState(new Array());
  const [input, setInput] = useState();

  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing2[iterator]);

  const [pagename, setPagename] = useState(contents.pagename);
  const prevPagename = usePrevState(pagename);
  // const [inputarr, setInputArr] = useState(new Array(MAX).fill(null))
  function parentFucntion(x: any) {
    // useEffect(() => {
    //   setInput(x);
    //   inputarr.push(input);
    //   setInputarr(inputarr);
    // }, [x]);

    // useEffect(() => {
    //   storeData(`userinput_${iterator}`, inputarr);
    //   // getData(`userinput_${iterator}`);
    // }, [iterator] && [inputarr]);

    // useEffect(() => {
    //   storeData(`userinput_${iterator}`, input);
    //   getData(`userinput_${iterator}`);
    // }, [input]);

    //얘를 어디다가 해야하나?
    setPagename(contents.pagename);

    useEffect(() => {
      setInput(x);
    }, [x]);

    useEffect(() => {
      // if (prevPagename !== pagename) {
      // setInput(x);
      storeData(`${pagename}`, input);
      getData(`${pagename}`);
      // }
      // else if (prevPagename === pagename) {
      //   // setInput(x);
      //   inputarr.push(input);
      //   setInputarr(inputarr);
      //   // console.log(inputarr);
      //   storeData(`${pagename}`, inputarr);
      //   getData(`${pagename}`);
      // }
    }, [pagename] && [input]);

    // && ([inputarr] || [input])

    // if (prevPagename !== pagename) {
    //   useEffect(() => {
    //     storeData(`${pagename}`, input);
    //     getData(`${pagename}`);
    //   }, [pagename] && [input]);
    // } else if (prevPagename === pagename) {
    //   useEffect(() => {
    //     inputarr.push(input);
    //     setInputarr(inputarr);
    //     storeData(`${pagename}`, inputarr);
    //     getData(`${pagename}`);
    //   }, [input]);
    // }

    // useEffect(() => {
    //   storeMultiData(`userinput_${iterator}`, input);
    //   getData(`userinput_${iterator}`);
    // }, [input]);
  }

  //임시 테스트
  // function parentFunction_x(x: any) {
  //   useEffect(() => {
  //     setInput(x);
  //   }, [x]);

  //   useEffect(() => {
  //     storeData(`userinput_${iterator}`, input);
  //     // getData(`userinput_${iterator}`);
  //   }, [input]);
  // }
  // function parentFunction_y(y: any) {
  //   useEffect(() => {
  //     setInput(y);
  //   }, [y]);

  //   useEffect(() => {
  //     storeData(`userinput_${iterator}`, input);
  //     // getData(`userinput_${iterator}`);
  //   }, [input]);
  // }
  // function parentFunction_z(z: any) {
  //   useEffect(() => {
  //     setInput(z);
  //   }, [z]);

  //   useEffect(() => {
  //     storeData(`userinput_${iterator}`, input);
  //     // getData(`userinput_${iterator}`);
  //   }, [input]);
  // }

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [contents, setContents] = useState('');

  // var [iterator, setIterator] = useState(0);
  // const [contents, setContents] = useState(testing2[iterator]);

  //각 페이지마다 입력받은 input들을 inputarr에 담아 handlePost 통해 서버로 inputarr을 전달
  // const [inputarr, setInputArr] = useState(
  //   new Array(testing.length).fill(null),
  // );

  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setContents(testing2[iterator]);
    setPagename(contents.pagename);
  };

  const handleNext = () => {
    if (iterator < testing2.length) {
      if (iterator === testing2.length - 1) {
        // console.log('testing');
        // setPagename(contents.pagename);
        getData(`${pagename}`);
        //
        // for (let i = 0; i < testing2.length; i++) {
        //   getData(`userinput_${i}`);
        // }
        //
        // AsyncStorage.getAllKeys().then(keys =>
        //   AsyncStorage.multiGet(keys).then(data => console.log(data)),
        // );
        //
        //navigation
      } else {
        // setPagename(contents.pagename);
        ++iterator;
        setIterator(iterator);
      }
      // getData(`${contents.pagename}`);
      // setPagename(contents.pagename);
      setContents(testing2[iterator]);
      // setPagename(contents.pagename);
    }
  };

  //jsx구성요소 오류 해결 필요
  //survey에 default, type공통으로 겹치는 myupbar, goback, next button을 구현해야하나?
  return (
    <>
      <MyUpBar level={contents.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <TypePage pageContents={contents} parentFunction={parentFucntion} />
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
