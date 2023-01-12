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

  // amh는 버튼 amh의 수치값을 보관하기 위한 state, 초기에 null로 세팅
  const [amh, amhChange] = useState(null);

  const [selection1, select1F] = useState(false);
  //만약 amh의 수치값이 입력되지 않았으면(null값이면) false를 리턴함.
  const isNull = () => {
    if (amh !== null) {
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

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
          onShow={() => {
            //alert('Modal has been open.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>나의 AMH수치는</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={amhChange}
                value={amh}
                placeholder="0.00"
                keyboardType="numeric"
              />
              <Pressable
                // isNull함수의 리턴값에 따라 Modal창의 확인 버튼의 색이 달라짐 -> 수치값을 입력하지 않으면 회색, 입력했으면 주황색
                style={[
                  styles.button,
                  styles.buttonClose,
                  {backgroundColor: isNull() ? '#BDBDBD' : '#FF7C00'},
                ]}
                //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
                disabled={isNull()}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <MyUpBar_wq />
        <GobackButton onPress={() => navigation.pop()} />
        <Text style={styles.text}>나는 이런 검사를 받았어</Text>

        {/* AMH버튼.. */}
        <Pressable
          onPress={() => {
            setModalVisible(true);
            //changeS1();
            selectChange(0);
          }}>
          <Image
            style={{
              position: 'absolute',
              left: 28,
              top: 180,
              width: 100,
              height: 100,
              borderRadius: 100,
              overflow: 'hidden',
              //borderWidth: 3,
              borderColor: 'blue',
            }}
            //source={require('../../../assets/images/AMH.png')}
            source={
              // amh수치값이 입력되지 않았으면 AMH파일을 불러오고 입력됐으면 AMHSelect파일을 불러옴
              isSelect[0]
                ? require('../../../assets/images/AMHSelect.png')
                : require('../../../assets/images/AMH.png')
            }
          />
        </Pressable>

        {/* FSH버튼.. */}
        <Pressable
          onPress={() => {
            setModalVisible(true);
            selectChange(1);
          }}>
          <Image
            style={{
              position: 'absolute',
              //left: 148,
              left: '21.03%',
              top: 300,
              //bottom: '20%',
              width: 100,
              height: 100,
              borderRadius: 10,
              overflow: 'hidden',
              //borderWidth: 3,
              borderColor: 'blue',
            }}
            //source={require('../../../assets/images/AMH.png')}
            source={
              // amh수치값이 입력되지 않았으면 AMH파일을 불러오고 입력됐으면 AMHSelect파일을 불러옴
              isSelect[1]
                ? require('../../../assets/images/FSHSelect.png')
                : require('../../../assets/images/FSH.png')
            }
          />
        </Pressable>
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
