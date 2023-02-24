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
import testing2 from '../txtCollection/testing2.json';
import TypePage from '../components/typePage';
import {useNavigation} from '@react-navigation/native';
import UserImg from '../components/userImg';
import UserAimg from '../../assets/images/userA.png';

import testing3 from '../txtCollection/testing1.json';
import {getData} from '../get';

//survey에 goback button, next button, myupbar를 넣으면 안되는 것인가??
//됨 -> routing기능 넣어도? reducer? redux?

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
  let TargetJSON;
  const num = getData('UserChoice');
  console.log('저장되어 있는 데이터는??    ' + Number(num));
  // const target = await getData('UserChoice');
  // switch (target) {
  //   case '0':
  //     TargetJSON = testing;
  //     break;
  //   case '1':
  //     TargetJSON = testing2;
  //     break;
  //   case '2':
  //     TargetJSON = testing3;
  //     break;
  //   default:
  //     break;
  // }

  //typepage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  const [input, setInput] = useState(0);
  function parentFucntion(x: any) {
    // console.log(x);
    setInput(x);
  }
  // console.log(input);

  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing2[iterator]);
  const navigation = useNavigation();

  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      navigation.pop();
    }
    setContents(testing2[iterator]);
  };

  const handleNext = () => {
    if (iterator < testing2.length) {
      if (iterator === testing2.length - 1) {
        //navigation
      } else {
        setIterator(++iterator);
      }
    }
    setContents(testing2[iterator]);
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
