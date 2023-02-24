import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {defaultPageModel} from '../models/defaultPageModel';
import {TypePageModel} from '../models/typePageModel';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import {UserStyle} from '../styles/typePageStyles';
import PType from './dateConverter';
//for test
import UserImg from './userImg';
import UserImgHQ from './userImgHQ';

type typePageProps = {
  pageContents: TypePageModel;
  parentFunction: any;
};

function TypePage({pageContents, parentFunction}: typePageProps) {
  if (
    pageContents.questionType == 'Button_Selector' &&
    pageContents.selectionTxt != null
  ) {
    const [isButtonSelect, setIsButtonSelect] = useState('');
    const newArr = Array(pageContents.selectionTxt.length).fill(false);
    const [getidx, setgetidx] = useState(0);
    const handlePress = (idx: number) => {
      newArr[idx] = true;
      setIsButtonSelect(newArr);
      setgetidx(idx);
    };
    parentFunction(getidx);

    return (
      <>
        <View style={[UserStyle.container_bs_q]}>
          <Text style={[UserStyle.txt]}>{pageContents.questionTxt}</Text>
        </View>
        <View style={[UserStyle.container_bs_c]}>
          {pageContents.selectionTxt.map(function (value: any, index: number) {
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
        <View style={[UserStyle.container_tlp_q]}>
          <View style={UserStyle.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.firstPickerType}
              pickDate={pickDateFunction}></PType>
            <Text style={styles.tlp_txt}>{pageContents.firstlineTxt}</Text>
          </View>
          <View style={UserStyle.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.secondPickerType}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.secondlineTxt}</Text>
          </View>
          <View style={UserStyle.container_tlp_line}>
            <PType
              Type_of_Picker={pageContents.thirdPickerType}
              pickDate={pickDateFunction}
            />
            <Text style={styles.tlp_txt}>{pageContents.thirdlineTxt}</Text>
          </View>
        </View>
        <View style={[UserStyle.container_tlp_c]} />
      </>
    );
  } else if (
    pageContents.questionType == 'Sixline_Picker' &&
    pageContents.selectionTxt == null
  ) {
    function pickDateFunction(x: any) {
      parentFunction(x);
    }
    return (
      <>
        {}
        <View style={UserStyle.container_slp_q}>
          <View style={UserStyle.container3_1}>
            <Text style={UserStyle.blacktxt}>{pageContents.firstlineTxt}</Text>
            <PType
              Type_of_Picker={pageContents.firstPickerType}
              pickDate={pickDateFunction}></PType>
          </View>
          <View style={UserStyle.container3_2}>
            <Text style={UserStyle.blacktxt}>{pageContents.secondlineTxt}</Text>
            <Text style={[UserStyle.descriptionGray]}>보충보충</Text>
            <PType
              Type_of_Picker={pageContents.secondPickerType}
              pickDate={pickDateFunction}></PType>
          </View>
          <View style={UserStyle.container3_3}>
            <Text style={UserStyle.blacktxt}>{pageContents.thirdlineTxt}</Text>
            <Text style={[UserStyle.descriptionGray]}>보충보충</Text>
            <PType
              Type_of_Picker={pageContents.thirdPickerType}
              pickDate={pickDateFunction}></PType>
          </View>
        </View>
        {}
      </>
    );
  } else if (
    pageContents.questionType == 'Hybrid_Picker' &&
    pageContents.selectionTxt == null
  ) {
    return <></>;
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    //현재 absolute로 지정되어잇음(px단위)
    //%로 바꿔서 구현해야함ㅇㅇ 알고잇을것!! -> 바꿈, 확인 필요
    width: '85%',
    height: '18%',
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

  blacktxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#000000',
    textAlign: 'center',
  },
});

export default TypePage;
