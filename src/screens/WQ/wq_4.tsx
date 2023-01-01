import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

import SelectionButton2 from '../../Buttons/selectionButton2';

import {DefaultStyle} from '../../styling/defaultLayout';

import React from 'react';
import {useState} from 'react';
import {textAlign} from '@mui/system';

const WQ_4 = ({navigation, route}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number_bodyWater, onChangeNumber_bodyWater] = React.useState(null);
  const [number_mineral, onChangeNumber_mineral] = React.useState(null);
  const [number_skeletalMuscle, onChangeNumber__skeletalMuscle] =
    React.useState(null);
  const [number_protein, onChangeNumber_protein] = React.useState(null);
  const [number_bodyFat, onChangeNumber_bodyFat] = React.useState(null);
  const [number_bellyFat, onChangeNumber_bellyFat] = React.useState(null);

  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <UserImg img={UserAimg}></UserImg>

      <View style={styles.container}>
        <View style={styles.container_0}></View>

        <View style={styles.container_1}>
          <View style={styles.container_1_1}>
            <Text style={DefaultStyle.threelinetxt}>체수분</Text>
            <Text style={DefaultStyle.threelinetxt}>무기질</Text>
            <Text style={DefaultStyle.threelinetxt}>골격근량</Text>
            <Text style={DefaultStyle.threelinetxt}>단백질</Text>
            <Text style={DefaultStyle.threelinetxt}>체지방</Text>
            <Text style={DefaultStyle.threelinetxt}>복부지방</Text>
          </View>
          <View style={styles.container_1_2}>
            <View style={styles.container_input1}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber_bodyWater}
                value={number_bodyWater}
                placeholder="0.00 L"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 16,
              }}>
              L
            </Text>
            <View style={styles.container_input2}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber_mineral}
                value={number_mineral}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 73,
              }}>
              kg
            </Text>
            <View style={styles.container_input3}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber__skeletalMuscle}
                value={number_skeletalMuscle}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 130,
              }}>
              kg
            </Text>
            <View style={styles.container_input4}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber_protein}
                value={number_protein}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 188,
              }}>
              kg
            </Text>
            <View style={styles.container_input5}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber_bodyFat}
                value={number_bodyFat}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 245,
              }}>
              kg
            </Text>
            <View style={styles.container_input6}>
              <TextInput
                style={styles.inputText}
                onChangeText={onChangeNumber_bellyFat}
                value={number_bellyFat}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                fontSize: 19,
                position: 'absolute',
                left: 130,
                top: 303,
              }}>
              kg
            </Text>
            <View style={styles.container_input7}></View>
          </View>
        </View>

        <View style={styles.container_2}>
          <View style={styles.container_2_1}>
            <SelectionButton2
              text={'나중에 입력할래'}
              textColor={'#000000'}
              onPress={() => alert('want')}
            />
          </View>
          <View style={styles.container_2_2}>
            <SelectionButton2
              text={'다음'}
              textColor={'#000000'}
              onPress={() => alert('want')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_0: {
    flex: 0.8,
    //backgroundColor: 'red',
  },
  container_1: {
    flex: 3.2,
    //backgroundColor: 'green',
    flexDirection: 'row',
  },
  container_1_1: {
    flex: 3.2,
  },
  container_1_2: {
    flex: 3.2,
  },
  container_2: {
    flex: 0.8,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  container_2_1: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  container_2_2: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  container_input1: {
    flex: 1,
  },
  container_input2: {
    flex: 1,
  },
  container_input3: {
    flex: 1,
  },
  container_input4: {
    flex: 1,
  },
  container_input5: {
    flex: 1,
  },
  container_input6: {
    flex: 1,
  },
  container_input7: {
    flex: 1,
  },
  inputText: {
    fontSize: 19,
    //fontWeight: '400',
    color: '#000000',
    // marginTop: 20,
    textAlign: 'center',
    // lineHeight: 34.75,

    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
  },
});

export default WQ_4;
