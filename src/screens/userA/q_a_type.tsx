import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_Type = ({navigation, route}) => {
  return (
    <>
      <View style={[UserStyle.container]} />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container0_1]}></View>
      <View style={[UserStyle.container1_1]} />
      <View style={[UserStyle.container2]}>
        {/* <NextButton onPress={() => navigation.navigate('BTEST')}></NextButton> */}
      </View>
      <UserImg img={UserAimg}></UserImg>
      <NextButton onPress={() => navigation.navigate('WQ_1')}></NextButton>
    </>
  );
};

export default Q_A_Type;
