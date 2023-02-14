import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const UserStyle = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: 80,
    backgroundColor: '#ffffff',
  },
  //
  //질문 스타일링
  //container0_1, 0_1_n -> 3줄 질문 스타일링
  container0_1: {
    flex: 2.5,
    // width: 240,
    // height: 140,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // lineHeight: 34.75,
  },
  container0_1_1: {
    // flex: 1,
    flexDirection: 'row',
    // width: 240,
    // height: 140,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  container0_1_2: {
    // flex: 1,
    flexDirection: 'row',
    // width: 240,
    // height: 140,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  container0_1_3: {
    // flex: 1,
    flexDirection: 'row',
    // width: 240,
    // height: 140,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  //한줄 질문 스타일링 && 선택지박스 2개 이하
  container0_2: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //한줄 질문 스타일링 && 선택지박스 3개 이상
  container0_3: {
    flex: 1.2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  //선택지박스 스타일링
  container1_1: {
    flex: 3.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  //2개 이하
  container1_2: {
    flex: 4.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  //3개 이상
  container1_3: {
    flex: 4.8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  //
  //다음버튼 스타일링
  container2: {
    // position: 'absolute',
    // bottom: 0,
    // height: 90,
    flex: 1.5,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  //
  //생리주기 생리기간 스타일링 - default 예상
  container3_1: {
    flex: 1.5,
    // flexDirection: 'row'
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3_2: {
    flex: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container3_3: {
    flex: 2.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  //type result page container
  containerR_0: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerR_1: {
    flex: 4.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerR_2: {
    flex: 9,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerR_3: {
    flex: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //one? three?? 결국 같은거같은데 이거 수정 ㄱㄱ
  onelinetxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  threelinetxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  //생리주기 보충설명 스타일링
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6F6F6F',
    lineHeight: 20,
    width: 300,
    height: 55,
  },
  //보충설명 스타일링 gray 버전
  descriptionGray: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: '400',
    color: '#6F6F6F',
    lineHeight: 20,
    backgroundColor: '#E4E4E4',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

//container 설명 필요!!
//container flex -> 7 기준, 1 : 2: 4, ...
