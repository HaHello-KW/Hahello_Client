import React, {useState, useEffect} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar from '../components/MyUpBar';
import GobackButton from '../components/gobackButton';
// import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';

//for testing
import Test_contents from '../txtCollection/testing';
import {View, Text} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import {Pressable} from '@react-native-material/core';

//survey에 goback button, next button, myupbar를 넣으면 안되는 것인가??
//됨 -> routing기능 넣어도? reducer? redux?

const Survey = () => {
  // const [contents, setContents] = useState([]);
  // const [defaultpage, setDefaultPage] = useState<defaultPageModel>({
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

  //서버로부터 데이터 받아오기
  //이런느낌 같은데 맞을까...
  // useEffect(() => {
  //   axios.get(url).then(response => {
  //     setDefaultPage(response.data);
  //   });
  // }, []);

  // const navigation = useNavigation();

  //이런 접근 괜찮나요??

  let a = 0;
  const [contents, setContents] = useState(Test_contents.default_question[a]);

  const handleGoback = () => {
    // a--;
    // setContents(Test_contents.default_question[a]);
  };

  const handleNext = () => {
    // a++;
    // setContents(Test_contents.default_question[a]);
    // console.log(a);
  };

  //jsx구성요소 오류 해결 필요
  //survey에 default, type공통으로 겹치는 myupbar, goback, next button을 구현해야하나?
  return (
    <>
      <MyUpBar level={contents.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage index={0} pageContents={contents} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
        <Pressable onPress={handleNext}>
          <Text>next</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Survey;
