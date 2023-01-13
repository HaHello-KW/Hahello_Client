import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

import {UserStyle} from '../../styling/userLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

import HQimg from '../../../assets/images/HQ1.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';
//import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

import {useState} from 'react';
import {Alert, alertClasses} from '@mui/material';

import {Chip} from 'react-native-paper';
import AMH from './modal_amh';
import FSH from './modal_fsh';

//modal테스트용 import
import Mymodal from './modal';
import popvar from './popupVar';

var popUPon = true;

const ModalOpen = () => {
  //popUPon = !popUPon;
  popUPon = true;
  //return !popUPon;
};

const HQ_3 = ({navigation, route}) => {
  //0: AMH, 1: FSH, 2: LH, 3: TSH, 4: E2
  const [isSelect, selectFunc] = useState([false, false, false, false]); //버튼 다중선택을 위한 state
  const selectChange = (num: number) => {
    selectFunc([
      ...isSelect.slice(0, num),
      !isSelect[num],
      ...isSelect.slice(num + 1),
    ]);
  };

  const [valueList, valueF] = useState([null, null, null, null, null]);
  const changeValue = (num: number) => {
    valueF([
      ...valueList.slice(0, num),
      !valueList[num],
      ...valueList.slice(num + 1),
    ]);
  };

  // amh는 버튼 amh의 수치값을 보관하기 위한 state, 초기에 null로 세팅
  const [amh, amhChange] = useState(null);

  const [selection1, select1F] = useState(false);

  //만약 amh의 수치값이 입력되지 않았으면(null값이면) false를 리턴함.
  const isNull = (num: number) => {
    if (valueList[num] !== null) {
      return false;
    } else {
      return true;
    }
  };
  const isSelected1 = () => {
    if (selection1 == false) {
      return false;
    } else {
      return true;
    }
  };
  const changeS1 = () => {
    select1F(!selection1);
  };

  // 이건 구글링 해옴
  const [modalVisible, setModalVisible] = useState(false);

  //let popUPon = false;

  return (
    <>
      <View style={styles.container}>
        <AMH></AMH>
        <FSH></FSH>
        <MyUpBar_wq />
        <GobackButton onPress={() => navigation.pop()} />
        <Text style={styles.text}>나는 이런 검사를 받았어</Text>

        <TouchableOpacity>
          <Text>modalTest</Text>
          <Mymodal title="팝업 테스트임"></Mymodal>
        </TouchableOpacity>

        <UserImg img={HQimg}></UserImg>
        <View style={styles.nextContainer}>
          <NextButton onPress={() => navigation.navigate('HQ_3')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    position: 'absolute',
    top: 240,
    left: 70,
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
    //backgroundColor: '#F47100',
  },
  //
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 358,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    top: 180,
    width: 358,
    height: 48,
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputText: {
    fontSize: 19,
    //fontWeight: '400',
    color: '#F47100',
    // marginTop: 20,
    textAlign: 'center',
    // lineHeight: 34.75,

    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
  },
  nextContainer: {
    position: 'absolute',
    //justifyContent: 'center',
    //alignItems: 'center',
    left: '16%',
    top: 650,
  },
});

export default HQ_3;
