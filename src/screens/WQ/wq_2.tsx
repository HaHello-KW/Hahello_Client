import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';
import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/WQ-1.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';
import TxtCollection from '../../txtCollection/txtcolletion';
import {useState} from 'react';
import SelectionButton from '../../Buttons/selectionButton';

const WQ_2 = ({navigation, route}) => {
  const [isButtonSelect, setIsButtonSelect] = useState('');
  const newArr = Array(TxtCollection.wq_2.contents.length).fill(false);
  const handlePress = (idx: number | any) => {
    newArr[idx] = true;
    setIsButtonSelect(newArr);
  };

  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>{TxtCollection.wq_2.title}</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        {TxtCollection.wq_2.contents.map(function (value: any, index: number) {
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
      </View>
      <View style={[UserStyle.container2]}>
        <NextButtonHQ
          onPress={() => navigation.navigate('WQ_3')}></NextButtonHQ>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default WQ_2;
