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

import {Image} from 'react-native';
//for test
import UserImg from './userImg';
import UserImgHQ from './userImgHQ';

import SelectionButton from './selectionButton';
type typePageProps = {
  pageContents: TypePageModel;

  parentFunction: any;
};

function TypePage(this: any, {pageContents, parentFunction}: typePageProps) {
  if (
    pageContents.question_type == 'Button_Selector' &&
    pageContents.selection_txt != null
  ) {
    const [isButtonSelect, setIsButtonSelect] = useState('');
    const newArr = Array(pageContents.selection_txt.contents.length).fill(
      false,
    );

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
          <Text style={[UserStyle.txt]}>{pageContents.question_txt}</Text>
        </View>
        <View style={[UserStyle.container_bs_c]}>
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
  //ptype jsx 구성요소 반환 에러? 해결필요
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
              Type_of_Picker={pageContents.first_picker_type}
              pickDate={pickDateFunction}></PType>
            <Text style={styles.tlp_txt}>{pageContents.first_line_txt}</Text>
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
  } else if (
    pageContents.question_type == 'Sixline_Picker' &&
    pageContents.selection_txt == null
  ) {
    function pickDateFunction(x: any) {
      parentFunction(x);
    }

    return (
      <>
        {}
        <View style={UserStyle.container_slp_q}>
          <View style={UserStyle.container3_1}>
            <Text style={UserStyle.blacktxt}>
              {pageContents.first_line_txt}
            </Text>

            <PType
              Type_of_Picker={pageContents.first_picker_type}
              pickDate={pickDateFunction}></PType>
          </View>
          <View style={UserStyle.container3_2}>
            <Text style={UserStyle.blacktxt}>
              {pageContents.second_line_txt}
            </Text>
            <Text style={[UserStyle.descriptionGray]}>
              마지막 생리일에서 다음 생리 때까지 걸리는 시기
            </Text>

            <PType
              Type_of_Picker={pageContents.second_picker_type}
              pickDate={pickDateFunction}></PType>
          </View>
          <View style={UserStyle.container3_3}>
            <Text style={UserStyle.blacktxt}>
              {pageContents.third_line_txt}
            </Text>
            <Text style={[UserStyle.descriptionGray]}>생리하는 기간</Text>

            <PType
              Type_of_Picker={pageContents.third_picker_type}
              pickDate={pickDateFunction}></PType>
          </View>
        </View>
        {}
      </>
    );
  } else if (
    pageContents.question_type == 'Hybrid_Type'
    // && pageContents.selectionTxt == null
  ) {
    const newArr2 = Array(pageContents.selection_txt.contents.length).fill(
      false,
    );
    const [isButtonSelect2, setIsButtonSelect2] = useState(newArr2);
    const [getidx, setgetidx] = useState(0);

    const handlePress2 = (idx2: number | any) => {
      newArr2[idx2] = true;
      setIsButtonSelect2(newArr2);
      setgetidx(idx2);
    };

    parentFunction(getidx);

    function pickDateFunction(x: any) {
      parentFunction(x);
    }

    return (
      <>
        <View style={styles.container}>
          <View style={styles.container_question}>
            <View style={{flex: 1.6}}></View>
            <View style={{flex: 3}}>
              <Text style={styles.text_H}>{pageContents.first_line_txt}</Text>
              <View style={styles.container_t}>
                <PType
                  Type_of_Picker={pageContents.second_picker_type}
                  pickDate={pickDateFunction}></PType>
                <Text style={styles.text_H}>
                  {pageContents.second_line_txt}
                </Text>
              </View>
              <View style={styles.container_t}>
                <Text style={styles.text_H}>{pageContents.third_line_txt}</Text>
              </View>
            </View>

            <View style={{flex: 4.1}}>
              {/* 여기부터 코드삽입 */}

              <ScrollView>
                {pageContents.selection_txt.contents.map(function (
                  value2: any,
                  index2: number,
                ) {
                  return (
                    <SelectionButton
                      key={index2}
                      isSelected={isButtonSelect2[index2]}
                      handlePress={handlePress2}
                      elementIndex={index2}
                      txt={value2}
                    />
                  );
                })}
              </ScrollView>

              {/* 이 위로 마침 */}
            </View>
          </View>
          <View style={{flex: 0.2}}></View>
          {/* <View style={styles.container_contents} /> */}
        </View>
        <Image
          //source={pageContents.imgpath}
          source={{uri: pageContents.img_path}}
          style={{
            position: 'absolute',
            left: '36%',
            top: '13%',
            width: 105,
            height: 105,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
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

  //밑 stlye 객체는 하이브리드타입 파일에서 가져옴
  container: {
    flex: 7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_t: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_s: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_question: {
    flex: 4,
    // flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_contents: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
    fontWeight: '400',
    color: '#f47100',
    textAlign: 'center',
  },
  text_H: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    left: '36%',
    top: '13%',
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TypePage;
