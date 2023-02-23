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
import PType from './dateConverter';
import {UserStyle} from '../styles/typePageStyles';

import SelectionButton from './selectionButton';
type typePageProps = {
  pageContents: TypePageModel;
};

function TypePage({pageContents}: typePageProps) {
  // const [isButtonSelect, setIsButtonSelect] = useState('');
  // let newArr;
  // if (pageContents.selectionTxt != null) {
  //   newArr = Array(pageContents.selectionTxt.length).fill(false);
  // } else {
  //   newArr = Array(10).fill(false);
  // }
  // const handlePress = (idx: number | any) => {
  //   newArr[idx] = true;
  //   setIsButtonSelect(newArr);
  // };
  // useEffect(() => {
  //   console.log(newArr);
  // }, [newArr]);

  if (
    pageContents.questionType == 'Button_Selector' &&
    pageContents.selectionTxt != null
  ) {
    const [isButtonSelect, setIsButtonSelect] = useState('');
    const newArr = Array(pageContents.selectionTxt.length).fill(false);
    const handlePress = (idx: number) => {
      newArr[idx] = true;
      setIsButtonSelect(newArr);
      console.log(idx);
    };

    /*
        const setCount = () => {
        count = content.length;
        return count;
        };
        setCount();
        useEffect(() => {
            console.log(newArr);
        }, [newArr]);
    
        */

    return (
      <>
        {/* 여기에 넣는게 맞나? 아니면 screen의 survey에?  */}
        {/* <MyUpBar level={pageContents.pgLevel} /> */}
        {/* <GobackButton onPress={() => navigation.pop()} /> */}
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
        {/* 여기에 넣는게 맞나? 아니면 screen의 survey에?  */}
        {/* <View style={[defaultPageStyles.container_next]}>
              <NextButton destination={pageContents.nextpage} disabled={false} />
              <Text>hi hello this is test</Text>
            </View> */}
      </>
    );
  }
  // 질문 유형 = threeline picker
  //ptype jsx 구성요소 반환 에러? 해결필요
  else if (
    pageContents.questionType == 'Threeline_Picker' &&
    pageContents.selectionTxt == null
  ) {
    return (
      <>
        {/* <MyUpBar level={pageContents.pgLevel} /> */}
        <View style={[defaultPageStyles.container_tlp_q]}>
          <View style={styles.container_tlp_line}>
            <PType Type_of_Picker={pageContents.firstPickerType}></PType>
            <Text style={styles.tlp_txt}>{pageContents.firstlineTxt}</Text>
          </View>
          <View style={styles.container_tlp_line}>
            <PType Type_of_Picker={pageContents.secondPickerType} />
            <Text style={styles.tlp_txt}>{pageContents.secondlineTxt}</Text>
          </View>
          <View style={styles.container_tlp_line}>
            <PType Type_of_Picker={pageContents.thirdPickerType} />
            <Text style={styles.tlp_txt}>{pageContents.thirdlineTxt}</Text>
          </View>
        </View>
        <View style={[defaultPageStyles.container_tlp_c]} />
        {/* <View style={[defaultPageStyles.container_next]}>
              <NextButton destination={pageContents.nextpage} disabled={false} />
              <Text>hi hello this is test</Text>
            </View> */}
      </>
    );
  } else if (
    pageContents.questionType == 'Sixline_Picker' &&
    pageContents.selectionTxt == null
  ) {
    return (
      <>
        <View style={[UserStyle.container]} />
        <View style={[UserStyle.container3_1]}>
          <Text style={styles.blacktxt}>{pageContents.firstlineTxt}</Text>
          <PType Type_of_Picker={pageContents.firstPickerType}></PType>
        </View>
        <View style={[UserStyle.container3_2]}>
          <Text style={styles.blacktxt}>{pageContents.secondlineTxt}</Text>
          <Text style={[UserStyle.descriptionGray]}>보충보충</Text>
          <View style={styles.container_test}>
            <PType Type_of_Picker={pageContents.secondPickerType}></PType>
          </View>
        </View>
        <View style={[UserStyle.container3_3]}>
          <Text style={styles.blacktxt}>{pageContents.thirdlineTxt}</Text>
          <Text style={[UserStyle.descriptionGray]}>보충보충</Text>
          <View style={styles.container_test}>
            <PType Type_of_Picker={pageContents.thirdPickerType}></PType>
          </View>
        </View>
        {/* <Text>this is Six_line</Text> */}
      </>
    );
  } else if (
    pageContents.questionType == 'Hybrid_Picker' &&
    pageContents.selectionTxt != null
  ) {
    const [isButtonSelect2, setIsButtonSelect2] = useState('');

    const newArr = Array(pageContents.selectionTxt.length).fill(false);
    const handlePress2 = (idx: number | any) => {
      newArr[idx] = true;
      setIsButtonSelect2(newArr);
    };
    // useEffect(() => {
    //   console.log(newArr);
    // }, [newArr]);

    return (
      <>
        <View style={styles.container}>
          <View style={styles.container_question}>
            <View style={{flex: 1.6}}></View>
            <View style={{flex: 3}}>
              <Text style={styles.text_H}>{pageContents.firstlineTxt}</Text>
              <View style={styles.container_t}>
                <PType Type_of_Picker={pageContents.firstPickerType}></PType>
                <Text style={styles.text_H}>{pageContents.secondlineTxt}</Text>
              </View>
              <View style={styles.container_t}>
                <Text style={styles.text_H}>{pageContents.thirdlineTxt}</Text>
              </View>
            </View>

            <View style={{flex: 4.1}}>
              {/* 여기부터 코드삽입 */}

              <ScrollView>
                {pageContents.selectionTxt.map(function (
                  value: any,
                  index: number,
                ) {
                  return (
                    <SelectionButton
                      key={index}
                      isSelected={isButtonSelect2[index]}
                      handlePress={handlePress2}
                      elementIndex={index}
                      txt={value}
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

  //이 밑은 Sixline_picker.tsx에서 가져온 스타일 객체들임
  ////////////////////
  textInput: {
    fontSize: 24,
    fontWeight: '400',
    color: '#F47100',
    height: 50,
    width: 300,
    textAlign: 'center',
    //borderColor: '#000000',
    //borderWidth: 1,
    //borderRadius: 12,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#C1C1C1',
    textAlign: 'center',
  },
  boxline: {
    marginTop: 80,
    marginBottom: '10%',
    marginRight: '3%',
    marginLeft: '3%',
  },
  boxlineDone: {
    backgroundColor: '#F47100',
  },
  boxlineYet: {
    backgroundColor: '#FFFFFF',
  },
  buttonSelection: {
    backgroundColor: '#F2F2F2',
    width: 300,
    height: 40,
  },
  blacktxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#000000',
    textAlign: 'center',
  },
  coloredtxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#FF7C00',
  },
  input: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: '#F47100',
    justifyContent: 'center',
  },
  container_test: {
    // flex: 1,
    flexDirection: 'row',
    // width: 240,
    // height: 140,
    // backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // lineHeight: 34.75,
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

  //이 밑은 하이브리드tsx파일에서 가져온 스타일 객체
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
  textInput_H: {
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
});

export default TypePage;
