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

export function usePrevState(state: any) {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

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
  // const [inputarr, setInputarr] = useState(new Array());

  // const jsondata = handleGet('http://localhost:8080/defaultPage');

  const [input, setInput] = useState();
  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing);
  //const [contents, setContents] = useState(jsondata); or useState(handleget(url))
  const [nowpage, setNowpage] = useState(contents[0]);

  // const [pagename, setPagename] = useState(contents.pagename);
  // const prevPagename = usePrevState(pagename);

  function parentFucntion(x: any) {
    // setPagename(contents.pagename);
    useEffect(() => {
      setInput(x);
    }, [x]);

    // useEffect(() => {
    //   storeData(`${pagename}`, input);
    //   console.log('useeffect');
    //   getData(`${pagename}`);
    // }, [pagename]);

    // useEffect(() => {
    //   storeData(`userinput_${iterator}`, input);
    //   getData(`userinput_${iterator}`);
    // }, [input]);

    //usereducer...?
    // const[state, dispatch] = useReducer(reducer, {
    //   iterator: ,
    //   input: ,
    // })
  }

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  //handleget? home의 시작 버튼...? 음
  //아예 따로 뽑아버려? -> 일단 빼버려
  // const handleGet = async ({url}: any) => {
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState('');
  //   try {
  //     //요청 시작 할 때에는 error, contents 초기화
  //     setError('');
  //     // setContents(null);
  //     //loading 상태를 true로 바꿈
  //     setLoading(true);

  //     const response = await axios.get(url);
  //     //데이터는 response.data 안에 들어있다. or response.data.data
  //     // setContents(response.data);

  //     return response.data;

  //   } catch (error) {
  //     setError('An error has occurred');
  //   }
  //   //loading 끄기
  //   setLoading(false);
  // };

  // const handlePost = async (event: any) => {
  //   try {
  //     //loading 상태 true로 바꿔주고
  //     setLoading(true);
  //     //error, contents 초기화 안해도 되나..? 필요하다면 추가할 것
  //     //input arr 값을 서버로 전달
  //     const response = await axios.post(`~/survey`, form);

  //     //요청이 성공적 + 결과로 새로운 리소스 생성 | POST, PUT
  //     if (response.status === 201) {
  //       console.log('success');
  //       //loading 상태 false로 바꿔주고 inputarr값 reset
  //       setLoading(false);
  //       setInputArr(new Array());
  //     } else {
  //       throw new Error('An error has occurred');
  //     }
  //   } catch (error) {
  //     setError('An error has occurred');
  //     setLoading(false);
  //   }
  // };

  //다음 핸들러 함수들 안의 console.log들은 확인용임
  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setNowpage(contents[iterator]);
  };

  //다시 해볼 것 왜 마지막은 다음을 누른 다음에서야 입력이 되는거지?
  const handleNext = () => {
    if (iterator < contents.length) {
      if (iterator === contents.length - 1) {
        //
        // setPagename(contents.pagename);
        // console.log('handlenext last iterator');
        storeData(`userinput_${iterator}`, input);
        console.log('hihello');
        getData(`userinput_${iterator}`);

        //get 요청? 서버로 보내기?
        // if(getdata = 0) -> a
        // if(getdata = 1) -> b
        // if(getdata = 2) -> c
        // if(getdata = 3) -> d
        // if(getdata = 4) -> e
        // switch(getData) {
        //   case 0:
        //     console.log('type a');
        //     break;
        //   case 1:
        //     console.log('type b');
        //     break;
        //   case 2:
        //     console.log('type c');
        //     break;
        //   case 3:
        //     console.log('type d');
        //     break;
        //   case 4:
        //     console.log('type e');
        //     break;
        //     default:
        //       console.log('testing')
        // }

        //navigation
        navigation.navigate('Survey2');
      } else {
        // setPagename(nowpage.pagename);
        ++iterator;
        setIterator(iterator);
      }
      setNowpage(contents[iterator]);
      // setPagename(contents.pagename);
    }
  };
  // console.log('after');
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
