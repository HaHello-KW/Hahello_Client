import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//test위해 임시로 다른 색상 지정함
export const defaultPageStyles = StyleSheet.create({
  //default page contents
  container_dp_contents: {
    flex: 7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //button selector question
  container_bs_q: {
    flex: 1.5,
    backgroundColor: '#123123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //button selector content
  container_bs_c: {
    flex: 5.5,
    backgroundColor: '#236743',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  //three line picker question
  container_tlp_q: {
    flex: 4,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //three line picker content
  container_tlp_c: {
    flex: 3,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  //next button
  container_next: {
    flex: 1.5,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  //text style
  txt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 34.75,
  },

  // threeline picker text style
  // text: {
  //   fontSize: 24,
  //   fontWeight: '400',
  //   color: '#000000',
  //   textAlign: 'center',
  // },
  //
  // threelinetxt: {
  //   fontSize: 24,
  //   fontWeight: '400',
  //   color: '#000000',
  //   marginTop: 20,
  //   textAlign: 'center',
  //   lineHeight: 34.75,
  // },
});

//container 설명 필요!!
//container flex -> 5 기준, 1 : 4, ...
