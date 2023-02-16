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

//survey에 goback button, next button, myupbar를 넣으면 안되는 것인가??
//됨 -> routing기능 넣어도? reducer? redux?

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

  //서버로부터 데이터 받아오기
  //이런느낌 같은데 맞을까...
  // useEffect(() => {
  //   axios.get(url).then(response => {
  //     setDefaultPage(response.data);
  //   });
  // }, []);

  //iterator 쓸거면 굳이 navigation 안갖고와도 될거같은데...?
  // const navigation = useNavigation();

  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing[iterator]);

  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      iterator = 0;
      setIterator(iterator);
    }
    setContents(testing[iterator]);
  };

  const handleNext = () => {
    if (iterator < testing.length) {
      iterator++;
      setIterator(iterator);
    } else {
      iterator = testing.length - 1;
      setIterator(iterator);
    }
    setContents(testing[iterator]);
  };

  //jsx구성요소 오류 해결 필요
  //survey에 default, type공통으로 겹치는 myupbar, goback, next button을 구현해야하나?
  return (
    <>
      <MyUpBar level={contents.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage pageContents={contents} />
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

export default Survey;
