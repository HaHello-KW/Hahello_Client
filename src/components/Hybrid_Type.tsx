import {useLinkProps, useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import PropTypes, {array, number, string} from 'prop-types';
import SelectionButton from '../../Buttons/selectionButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import {UserStyle} from '../../styling/userLayout';
import NextButton from '../../Buttons/nextButton';
import UserImg from '../../Buttons/userImg';
import images from '../../img';
import MyUpBar from '../../upbar/MyUpBar';
import GobackButton from '../../Buttons/gobackButton';
import {DefaultStyle} from '../../styling/defaultLayout';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PType from '../converter/dateConverter';

type props = {
  pglevel: number;
  first: string;
  second: string;
  third: string;
  first_pickerType: string;
  //second_pickerType: string;
  imgpath: object | null;
  nextpage: string;
  content: string[];
  count: number; //엇 그럼 필요없어지나? map으로 content 내용 개수만큼 갖고오면?
};

//pickerType : datePicker, yearPicker, numberPicker, None
function Hybrid_Type({
  pglevel,
  first,
  second,
  third,
  first_pickerType,
  //second_pickerType,
  imgpath,
  nextpage,
  content,
  count,
}: props) {
  const navigation = useNavigation();

  //from ButtonSelector.tsx
  const setCount = () => {
    count = content.length;
    return count;
  };
  setCount();

  const [isButtonSelect, setIsButtonSelect] = useState('');

  //idx, newArr에 빨간줄이 뜨는 이유는??

  const newArr = Array(content.length).fill(false);
  const handlePress = (idx: number | any) => {
    newArr[idx] = true;
    setIsButtonSelect(newArr);
  };
  useEffect(() => {
    console.log(newArr);
  }, [newArr]);
  //

  return (
    <>
      <MyUpBar level={pglevel} />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={styles.container}>
        <View style={styles.container_question}>
          <View style={{flex: 1.6}}></View>
          <View style={{flex: 3}}>
            <Text style={styles.text}>{first}</Text>
            <View style={styles.container_t}>
              <PType Type_of_Picker={first_pickerType}></PType>
              <Text style={styles.text}>{second}</Text>
            </View>
            <View style={styles.container_t}>
              <Text style={styles.text}>{third}</Text>
            </View>
          </View>

          <View style={{flex: 4.1}}>
            {/* 여기부터 코드삽입 */}

            <ScrollView>
              {content.map(function (value: any, index: number) {
                return (
                  <SelectionButton
                    key={index}
                    isSelected={isButtonSelect[index]}
                    handlePress={handlePress}
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
      <View style={[DefaultStyle.container2]}>
        <NextButton destination={nextpage} disabled={false} />
      </View>
      {imgpath === null ? (
        <></>
      ) : (
        <Image source={imgpath} style={styles.image} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
  text: {
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

export default Hybrid_Type;
