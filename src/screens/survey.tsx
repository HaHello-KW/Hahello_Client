import React, {useState, useEffect, useReducer, useRef} from 'react';
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

// export function usePrevState(state: any) {
//   const ref = useRef(state);
//   useEffect(() => {
//     ref.current = state;
//   }, [state]);
//   return ref.current;
// }

const Survey = () => {
  //survey -> survey2
  const navigation = useNavigation();

  //deafultpage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  // const [inputarr, setInputarr] = useState(new Array());

  const jsondata = handleGet('http://localhost:8080/defaultPage');

  const [input, setInput] = useState();
  var [iterator, setIterator] = useState(0);

  const [nowpage, setNowpage] = useState(jsondata[0]);

  // const [pagename, setPagename] = useState(contents.pagename);
  // const prevPagename = usePrevState(pagename);

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

  // var [url, setUrl] = useState('');

  const handleNext = async () => {
    if (iterator < jsondata.length) {
      if (iterator === jsondata.length - 1) {
        storeData(`userinput_${iterator}`, input);

        switch (await getData(`userinput_${iterator}`)) {
          case 0:
            console.log('type a');
            storeData('typeUrl', 'localhost:8080/typePage/A');
            break;
          case 1:
            console.log('type b');
            storeData('typeUrl', 'localhost:8080/typePage/B');
            break;
          case 2:
            console.log('type c');
            storeData('typeUrl', 'localhost:8080/typePage/C');
            break;
          case 3:
            console.log('type d');
            storeData('typeUrl', 'localhost:8080/typePage/D');
            break;
          case 4:
            console.log('type e');
            storeData('typeUrl', 'localhost:8080/typePage/E');
            break;
          default:
            console.log('testing');
        }

        //navigation
        navigation.navigate('Survey2');
      } else {
        // setPagename(nowpage.pagename);
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(jsondata[iterator]);
      // setPagename(contents.pagename);
    }
  };
  // console.log(url);
  // getData(`userinput_${contents.length - 1}`);

  //jsx구성요소 오류 해결 필요
  return (
    <>
      <MyUpBar level={nowpage.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage pageContents={nowpage} parentFunction={parentFucntion} />
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
