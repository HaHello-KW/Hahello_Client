import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_D_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_5 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'첮째가 있어'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButton
          text={'둘째가 있어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2_1')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_D_1;
