import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {set} from 'react-native-reanimated';
import {defaultPageModel} from '../models/defaultPageModel';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import PType from './dateConverter';
import SelectionButton from './selectionButton';

type defaultPageProps = {
  pageContents: defaultPageModel;
  parentFunction: any;
  //handling function 추후 ㄱㄱ
};

function DefaultPage({pageContents, parentFunction}: defaultPageProps) {
  // const navigation = useNavigation();

  // 질문 유형=button selector
  if (
    pageContents.questionType == 'Button_Selector' &&
    pageContents.selectionTxt != null
  ) {
    const [isButtonSelect, setIsButtonSelect] = useState('');
    // const [newArr, setnewArr] = useState(Array(pageContents.selectionTxt.length).fill(false));
    const newArr = Array(pageContents.selectionTxt.length).fill(false);
    const [getidx, setgetidx] = useState();
    const handlePress = (idx: number) => {
      newArr[idx] = true;
      // setnewArr(newArr);
      setIsButtonSelect(newArr);
      // console.log(idx);
      setgetidx(idx);
    };

    //페이지마다 서버로 보내야하는 사용자의 선택지 답변 = getidx
    //이에 따라 type이 정해진다 a-1, a-2, ..., e-5

    //부모 컴포넌트로 getidx 전달
    parentFunction(getidx);
    //
    //console.log(getidx);

    return (
      <>
        <View style={[defaultPageStyles.container_bs_q]}>
          <Text style={[defaultPageStyles.txt]}>
            {pageContents.questionTxt}
          </Text>
        </View>
        <View style={[defaultPageStyles.container_bs_c]}>
          {pageContents.selectionTxt.map(function (value: any, index: number) {
            return (
              //왜 가려져서 나오지?? scrollview의 문제인가? 스타일링 관련해서 알아볼 것
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
  //ptype jsx 구성요소 반환 에러? 해결필요
  else if (
    pageContents.questionType == 'Threeline_Picker' &&
    pageContents.selectionTxt == null
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
              Type_of_Picker={pageContents.secondPickerType}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.secondlineTxt}</Text>
          </View>
          <View style={styles.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.thirdPickerType}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.thirdlineTxt}</Text>
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
