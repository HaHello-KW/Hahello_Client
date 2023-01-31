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
import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../Buttons/gobackButton';

import HQimg from '../../../assets/images/HQ1.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';
//import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

import {useState} from 'react';
import {Alert, alertClasses} from '@mui/material';
import NextButton from '../../Buttons/nextButton';

const HQ_3 = ({navigation, route}) => {
  //0: AMH, 1: FSH, 2: LH, 3: TSH, 4: E2
  const [isSelect, selectFunc] = useState([false, false, false, false, false]); //버튼 다중선택을 위한 state
  const selectChange = (num: number) => {
    selectFunc([
      ...isSelect.slice(0, num),
      !isSelect[num],
      ...isSelect.slice(num + 1),
    ]);
  };

  // amh는 버튼 amh의 수치값을 보관하기 위한 state, 초기에 null로 세팅
  const [amh, amhChange] = useState(null);
  const [lh, lhChange] = useState(null);
  const [fsh, fshChange] = useState(null);
  const [e2, e2Change] = useState(null);
  const [tsh, tshChange] = useState(null);

  const [selection1, select1F] = useState(false);
  //만약 amh의 수치값이 입력되지 않았으면(null값이면) false를 리턴함.
  const isNullAmh = () => {
    if (amh !== null) {
      return false;
    } else {
      return true;
    }
  };
  const isNullFsh = () => {
    if (fsh !== null) {
      return false;
    } else {
      return true;
    }
  };
  const isNullLh = () => {
    if (lh !== null) {
      return false;
    } else {
      return true;
    }
  };
  const isNullTsh = () => {
    if (tsh !== null) {
      return false;
    } else {
      return true;
    }
  };
  const isNullE2 = () => {
    if (e2 !== null) {
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
  const [modalVisiblefsh, setModalVisiblefsh] = useState(false);
  const [modalVisiblelh, setModalVisiblelh] = useState(false);
  const [modalVisibletsh, setModalVisibletsh] = useState(false);
  const [modalVisiblee2, setModalVisiblee2] = useState(false);

  return (
    <>
      {/* 밑에 있는 modal은 amh */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && isSelect[0]}
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
                {backgroundColor: isNullAmh() ? '#BDBDBD' : '#FF7C00'},
              ]}
              //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
              disabled={isNullAmh()}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* 밑에 있는 modal은 fsh */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblefsh && isSelect[1]}
        onRequestClose={() => {
          //alert('Modal has been closed.');
          setModalVisiblefsh(!modalVisiblefsh);
        }}
        onShow={() => {
          //alert('Modal has been open.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>나의 FSH수치는</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={fshChange}
              value={fsh}
              placeholder="0.00"
              keyboardType="numeric"
            />
            <Pressable
              // isNull함수의 리턴값에 따라 Modal창의 확인 버튼의 색이 달라짐 -> 수치값을 입력하지 않으면 회색, 입력했으면 주황색
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: isNullFsh() ? '#BDBDBD' : '#FF7C00'},
              ]}
              //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
              disabled={isNullFsh()}
              onPress={() => setModalVisiblefsh(!modalVisiblefsh)}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* 밑에 있는 modal은 lh */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblelh && isSelect[2]}
        onRequestClose={() => {
          //alert('Modal has been closed.');
          setModalVisiblelh(!modalVisiblelh);
        }}
        onShow={() => {
          //alert('Modal has been open.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>나의 LH수치는</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={lhChange}
              value={lh}
              placeholder="0.00"
              keyboardType="numeric"
            />
            <Pressable
              // isNull함수의 리턴값에 따라 Modal창의 확인 버튼의 색이 달라짐 -> 수치값을 입력하지 않으면 회색, 입력했으면 주황색
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: isNullLh() ? '#BDBDBD' : '#FF7C00'},
              ]}
              //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
              disabled={isNullLh()}
              onPress={() => setModalVisiblelh(!modalVisiblelh)}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* 밑에 있는 modal은 tsh */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibletsh && isSelect[3]}
        onRequestClose={() => {
          //alert('Modal has been closed.');
          setModalVisibletsh(!modalVisibletsh);
        }}
        onShow={() => {
          //alert('Modal has been open.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>나의 TSH수치는</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={tshChange}
              value={tsh}
              placeholder="0.00"
              keyboardType="numeric"
            />
            <Pressable
              // isNull함수의 리턴값에 따라 Modal창의 확인 버튼의 색이 달라짐 -> 수치값을 입력하지 않으면 회색, 입력했으면 주황색
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: isNullTsh() ? '#BDBDBD' : '#FF7C00'},
              ]}
              //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
              disabled={isNullTsh()}
              onPress={() => setModalVisibletsh(!modalVisibletsh)}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* 밑에 있는 modal은 e2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblee2 && isSelect[4]}
        onRequestClose={() => {
          //alert('Modal has been closed.');
          setModalVisiblee2(!modalVisiblee2);
        }}
        onShow={() => {
          //alert('Modal has been open.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>나의 E2수치는</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e2Change}
              value={e2}
              placeholder="0.00"
              keyboardType="numeric"
            />
            <Pressable
              // isNull함수의 리턴값에 따라 Modal창의 확인 버튼의 색이 달라짐 -> 수치값을 입력하지 않으면 회색, 입력했으면 주황색
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: isNullE2() ? '#BDBDBD' : '#FF7C00'},
              ]}
              //amh수치값이 입력되지 않았으면 modal을 닫을 수 없음
              disabled={isNullE2()}
              onPress={() => setModalVisiblee2(!modalVisiblee2)}>
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* dd */}
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />

      {/* <View style={styles.container}> */}
      <View style={[UserStyle.container0_3]}>
        <Text style={styles.text}>나는 이런 검사를 받았어</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
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
              left: -160,
              top: 40,
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
            setModalVisiblefsh(true);
            selectChange(1);
          }}>
          <Image
            style={{
              position: 'absolute',
              left: -100,
              // left: '21.03%',
              top: 160,
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

        {/* LH버튼.. */}
        <Pressable
          onPress={() => {
            setModalVisiblelh(true);
            //changeS1();
            selectChange(2);
          }}>
          <Image
            style={{
              position: 'absolute',
              left: -40,
              top: 20,
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
              isSelect[2]
                ? require('../../../assets/images/LH_colored.png')
                : require('../../../assets/images/LH.png')
            }
          />
        </Pressable>
        {/* tsh버튼.. */}
        <Pressable
          onPress={() => {
            setModalVisibletsh(true);
            //changeS1();
            selectChange(3);
          }}>
          <Image
            style={{
              position: 'absolute',
              left: 25,
              top: 170,
              width: 100,
              height: 100,
              borderRadius: 40,
              overflow: 'hidden',
              //borderWidth: 3,
              borderColor: 'blue',
            }}
            //source={require('../../../assets/images/AMH.png')}
            source={
              // amh수치값이 입력되지 않았으면 AMH파일을 불러오고 입력됐으면 AMHSelect파일을 불러옴
              isSelect[3]
                ? require('../../../assets/images/TSH_colored.png')
                : require('../../../assets/images/TSH.png')
            }
          />
        </Pressable>
        {/* e2버튼.. */}
        <Pressable
          onPress={() => {
            setModalVisiblee2(true);
            //changeS1();
            selectChange(4);
          }}>
          <Image
            style={{
              position: 'absolute',
              left: 65,
              top: 60,
              width: 100,
              height: 100,
              borderRadius: 40,
              overflow: 'hidden',
              //borderWidth: 3,
              borderColor: 'blue',
            }}
            //source={require('../../../assets/images/AMH.png')}
            source={
              // amh수치값이 입력되지 않았으면 AMH파일을 불러오고 입력됐으면 AMHSelect파일을 불러옴
              isSelect[4]
                ? require('../../../assets/images/E2_colored.png')
                : require('../../../assets/images/E2.png')
            }
          />
        </Pressable>
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton disabled={false} destination={'WQ_1'} />
      </View>
      {/* </View> */}
      <UserImg img={HQimg} />
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    // position: 'absolute',
    // top: 240,
    // left: 70,
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
    backgroundColor: '#',
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
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    background: '#f5f5f5',
  },
  middleContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  nextContainer: {
    // position: 'absolute',
    // //justifyContent: 'center',
    // //alignItems: 'center',
    flex: 1.5,
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    // left: '16%',
    // top: 650,
  },
});

export default HQ_3;
