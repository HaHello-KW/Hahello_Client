import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../components/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/nq1Img.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';

import {useState} from 'react';
import NextButton from '../../Buttons/nextButton';

const NQ_1 = ({navigation, route}) => {
  const [isSelect, selectFunc] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); //버튼 다중선택을 위한 state
  const selectChangeFunction = (num: number) => {
    // 해당 인덱스에 해당하는 isSelect배열의 값을 바꿔주는 함수
    selectFunc([
      ...isSelect.slice(0, num),
      !isSelect[num],
      ...isSelect.slice(num + 1),
    ]);
  };
  const changeAllFalse = () => {
    for (let i = 0; i < 16; i++) {
      selectFunc([
        ...isSelect.slice(0, i),
        !isSelect[i],
        ...isSelect.slice(i + 1),
      ]);
    }
  };

  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
        <Text style={[UserStyle.onelinetxt]}>이런 영양제를 먹고 있어</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button1,
            {backgroundColor: isSelect[0] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(0)}>
          <Text style={styles.text}>종합비타민</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button2,
            {backgroundColor: isSelect[1] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(1)}>
          <Text style={styles.text}>칼슘</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button3,
            {backgroundColor: isSelect[2] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(2)}>
          <Text style={styles.text}>철분</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button4,
            {backgroundColor: isSelect[3] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(3)}>
          <Text style={styles.text}>엽산</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button5,
            {backgroundColor: isSelect[4] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(4)}>
          <Text style={styles.text}>마그네슘</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button6,
            {backgroundColor: isSelect[5] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(5)}>
          <Text style={styles.text}>오메가 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button7,
            {backgroundColor: isSelect[6] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(6)}>
          <Text style={styles.text}>코엔자임큐텐</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button8,
            {backgroundColor: isSelect[7] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(7)}>
          <Text style={styles.text}>아세틸시스테인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button9,
            {backgroundColor: isSelect[8] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(8)}>
          <Text style={styles.text}>아연</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button10,
            {backgroundColor: isSelect[9] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(9)}>
          <Text style={styles.text}>레스베라트롤</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button11,
            {backgroundColor: isSelect[10] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(10)}>
          <Text style={styles.text}>이노시톨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button12,
            {backgroundColor: isSelect[11] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(11)}>
          <Text style={styles.text}>요오드</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button13,
            {backgroundColor: isSelect[12] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(12)}>
          <Text style={styles.text}>셀레늄</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button14,
            {backgroundColor: isSelect[13] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(13)}>
          <Text style={styles.text}>프로바이오틱스</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button15,
            {backgroundColor: isSelect[14] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(14)}>
          <Text style={styles.text}>글루타치온</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button16,
            {backgroundColor: isSelect[15] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => selectChangeFunction(15)}>
          <Text style={styles.text}>타이로신</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button17,
            {backgroundColor: isSelect[16] ? '#F47100' : '#E0E0E0'},
          ]}
          onPress={() => {
            selectChangeFunction(16);
            changeAllFalse;
          }}>
          <Text style={styles.text}>영양제를 먹고 있지 않아</Text>
        </TouchableOpacity>
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton disabled={false} destination={'ALQ_1'} />
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
    backgroundColor: '#f5f5f5',
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
  button1: {
    //종합비타민
    // position: 'absolute',
    // left: 18,
    // top: 380,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button2: {
    //칼슘
    // position: 'absolute',
    // left: 106,
    // top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button3: {
    //철분
    // position: 'absolute',
    // left: 161,
    // top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button4: {
    //엽산
    // position: 'absolute',
    // left: 216,
    // top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button5: {
    //마그네슘
    // position: 'absolute',
    // left: 271,
    // top: 380,
    width: 69,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button6: {
    //오메가 3
    // position: 'absolute',
    // left: 18,
    // top: 424,
    width: 67,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button7: {
    //코엔자임큐텐
    // position: 'absolute',
    // left: 93,
    // top: 424,
    width: 91,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button8: {
    //아세틸시스테인
    // position: 'absolute',
    // left: 192,
    // top: 424,
    width: 102,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button9: {
    //아연
    // position: 'absolute',
    // left: 302,
    // top: 424,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button10: {
    //레스베라트롤
    // position: 'absolute',
    // left: 18,
    // top: 468,
    width: 91,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button11: {
    //이노시톨
    // position: 'absolute',
    // left: 117,
    // top: 468,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button12: {
    //요오드
    // position: 'absolute',
    // left: 205,
    // top: 468,
    width: 58,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button13: {
    //셀레늄
    // position: 'absolute',
    // left: 271,
    // top: 468,
    width: 58,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button14: {
    //프로바이오틱스
    // position: 'absolute',
    // left: 18,
    // top: 512,
    width: 102,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button15: {
    //글루타치온
    // position: 'absolute',
    // left: 128,
    // top: 512,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button16: {
    //타이로신
    // position: 'absolute',
    // left: 216,
    // top: 512,
    width: 69,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  button17: {
    //영양제 x
    // position: 'absolute',
    // left: 18,
    // top: 556,
    width: 143,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 4,
  },
  text: {
    fontSize: 12,
    color: '#000000',
  },
});

export default NQ_1;
