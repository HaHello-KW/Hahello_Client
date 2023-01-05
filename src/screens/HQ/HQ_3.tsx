import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <Text style={styles.text}>나는 이런 검사를 받았어</Text>

      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          style={{
            position: 'absolute',
            left: 28,
            top: 200,
            width: 100,
            height: 100,
            borderRadius: 100,
            overflow: 'hidden',
            //borderWidth: 3,
            borderColor: 'blue',
          }}
          source={require('../../../assets/images/AMH.png')}
        />
      </Pressable>

      <UserImg img={HQimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
});

export default HQ_3;
