import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../components/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/iq1Img.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';
import {Alert} from '@mui/material';

import React from 'react';
import {useState} from 'react';

//타입스크립트 배열
// let arr: number[] = [];

// car.push(1);
// car.push(2);
// car.push(3);

const IQ_1 = ({navigation, route}) => {
  const [isSelect, selectFunc] = useState([false, false, false, false]); //버튼 다중선택을 위한 state
  const selectChangeFunction = (num: number) => {
    // 해당 인덱스에 해당하는 isSelect배열의 값을 바꿔주는 함수
    selectFunc([
      ...isSelect.slice(0, num),
      !isSelect[num],
      ...isSelect.slice(num + 1),
    ]);
  };

  //test

  //test

  const [isVisibleDinput, setIsvisibleDinput] = React.useState(false); //input box 생성을 결정짓기위한 변수를 state를 이용하여 구현

  const change = () => {
    //state를 바꿔주는 함수 -> input박스를 표현할 것인가 결정함

    //setIsvisibleDinput(isVisibleDinput => !isVisibleDinput);
    setIsvisibleDinput(!isVisibleDinput);
  };

  //const [isSelect, setSelect] = useState([false, false, false, false]);

  //질병 input받는 함수
  const Dinput = () => (
    <TextInput
      style={{
        height: 40,
        //width: '80%',
        width: 315,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 20,
        // position: 'absolute',
        // left: 19,
        // top: 437,
      }}
      // Adding hint in TextInput using Placeholder option.
      placeholder="입력해주세요"
      // Making the Under line Transparent.
      underlineColorAndroid="transparent"
      onSubmitEditing={change}
    />
  );

  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
        <Text style={[UserStyle.onelinetxt]}>이런 질병이 있어</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button1,
            {backgroundColor: isSelect[0] ? '#F47100' : '#E0E0E0'},
          ]}
          //첫번째 버튼(고혈압) -> 첫번째 배열의 index는 0
          onPress={() => selectChangeFunction(0)}>
          <Text style={styles.text}>고혈압</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button2,
            {backgroundColor: isSelect[1] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(1)}>
          <Text style={styles.text}>당뇨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button3,
            {backgroundColor: isSelect[2] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(2)}>
          <Text style={styles.text}>갑상선 항진증</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button4,
            {backgroundColor: isSelect[3] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(3)}>
          <Text style={styles.text}>갑상선 저하증</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button5}
          onPress={() =>
            setIsvisibleDinput(isVisibleDinput => !isVisibleDinput)
          }>
          <Text style={styles.text}>기타 질병이 있어</Text>
        </TouchableOpacity>
        {isVisibleDinput && <Dinput />}
        {/* 위 부분은 isVisibleDinput값이 true일떄만 실행 즉 기타질병이 있다면 input box를 보여줌*/}
      </View>
      <View style={styles.containerNext}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button6}
          onPress={() => alert('dd')}>
          <Text style={styles.text2}>질병이 없어</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button7}
          onPress={() => navigation.navigate('Q_RESULT')}>
          <Text style={styles.text3}>다음</Text>
        </TouchableOpacity>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  container_button: {
    position: 'absolute',
    top: 310,
    left: 35,
    flex: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flex: 4.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    padding: 15,
  },
  containerNext: {
    flex: 1.5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button1: {
    //고혈압
    // position: 'absolute',
    // left: 19,
    // top: 346,
    width: 58,
    height: 33,
    margin: 4,
    //backgroundColor: '#E0E0E0',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button2: {
    //당뇨
    // position: 'absolute',
    // left: 85,
    // top: 346,
    width: 47,
    height: 33,
    margin: 4,
    //backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button3: {
    //갑상선 항진증
    // position: 'absolute',
    // left: 140,
    // top: 346,
    width: 93,
    height: 33,
    margin: 4,
    //backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button4: {
    //갑상선 저하증
    // position: 'absolute',
    // left: 241,
    // top: 346,
    width: 93,
    height: 33,
    margin: 4,
    //backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button5: {
    //기타 질병이 있어
    // position: 'absolute',
    // left: 19,
    // top: 387,
    width: 104,
    height: 33,
    margin: 4,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button6: {
    //질병이 없어
    // position: 'absolute',
    // left: 19,
    // top: 670,
    width: 170,
    height: 48,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button7: {
    //다음
    // position: 'absolute',
    // left: 199,
    // top: 670,
    width: 170,
    height: 48,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    fontSize: 12,
    fontWeight: '200',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#000000',
  },
  text2: {
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#000000',
  },
  text3: {
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#000000',
  },
});

export default IQ_1;
