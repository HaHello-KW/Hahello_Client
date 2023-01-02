import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const WQ_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 체성분 측정을</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButton
          text={'해본적 없어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('WQ_3')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default WQ_2;
