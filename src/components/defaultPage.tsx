/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
// import {set} from 'react-native-reanimated';
import {defaultPageModel} from '../models/defaultPageModel';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import PType from './dateConverter';
import SelectionButton from './selectionButton';

//async 테스트를 위함
import AsyncStorage from '@react-native-async-storage/async-storage';

type defaultPageProps = {
  pageContents: defaultPageModel;
  parentFunction: any;

  //handling function 추후 ㄱㄱ
};

function DefaultPage({pageContents, parentFunction}: defaultPageProps) {
  // const navigation = useNavigation();

  // 질문 유형=button selector
  if (
    pageContents.question_type == 'Button_Selector' &&
    pageContents.selection_txt != null
  ) {
    const [isButtonSelect, setIsButtonSelect] = useState('');
    // const [newArr, setnewArr] = useState(Array(pageContents.selectionTxt.length).fill(false));
    const newArr = Array(pageContents.selection_txt.contents.length).fill(
      false,
    );
    const [getidx, setgetidx] = useState(0);
    const handlePress = (idx: number) => {
      newArr[idx] = true;
      // setnewArr(newArr);
      setIsButtonSelect({...newArr});
      // console.log(idx);
      setgetidx(idx);
    };

    //페이지마다 사용자의 선택지 답변 = getidx
    //부모 컴포넌트로 getidx 전달
    parentFunction(getidx);

    return (
      <>
        <View style={[defaultPageStyles.container_bs_q]}>
          <Text style={[defaultPageStyles.txt]}>
            {pageContents.question_txt}
          </Text>
        </View>
        <View style={[defaultPageStyles.container_bs_c]}>
          {pageContents.selection_txt.contents.map(function (
            value: any,
            index: number,
          ) {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  {
                    backgroundColor: isButtonSelect[index]
                      ? '#F47100'
                      : '#f2f2f2',
                  },
                ]}
                onPress={() => handlePress(index)}>
                <Text
                  style={[
                    styles.bt_txt,
                    {color: isButtonSelect[index] ? '#fbfbfb' : '#242424'},
                  ]}>
                  {value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  }
  // 질문 유형 = threeline picker
  else if (
    pageContents.question_type == 'Threeline_Picker' &&
    pageContents.selection_txt == null
  ) {
    function pickDateFunction(x: any) {
      parentFunction(x);
    }
    return (
      <>
        <View style={[defaultPageStyles.container_tlp_q]}>
          <View style={styles.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.firstPickerType}
              pickDate={pickDateFunction}></PType>
            <Text style={styles.tlp_txt}>{pageContents.firstlineTxt}</Text>
          </View>
          <View style={styles.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.second_picker_type}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.second_line_txt}</Text>
          </View>
          <View style={styles.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.third_picker_type}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.third_line_txt}</Text>
          </View>
        </View>
        <View style={[defaultPageStyles.container_tlp_c]} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    //현재 absolute로 지정되어잇음(px단위)
    //%로 바꿔서 구현해야함ㅇㅇ 알고잇을것!! -> 바꿈, 확인 필요
    width: '85%',
    height: '15%',
    borderRadius: 8,
    marginBottom: '2%',
    //   width: 300,
    //   height: 50,
  },
  //button text style
  bt_txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    // color: '#242424',
  },
  //three line picker question text style
  tlp_txt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  //three line picker line by line style
  container_tlp_line: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DefaultPage;
