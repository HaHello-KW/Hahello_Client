import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const UserStyle = StyleSheet.create({
  //sixline_picker의 스타일링
  container_slp_q: {
    flex: 7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blacktxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#000000',
    textAlign: 'center',
  },
  container3_1: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container3_2: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3_3: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  //Threeline_picker의 스타일링
  container_tlp_q: {
    flex: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_tlp_line: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_tlp_c: {
    flex: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tlp_txt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  //buttonselector의 스타일링
  container_bs_q: {
    flex: 2.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_bs_c: {
    flex: 4.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 34.75,
  },
});

//container 설명 필요!!
//container flex -> 7 기준, 1 : 2: 4, ...
