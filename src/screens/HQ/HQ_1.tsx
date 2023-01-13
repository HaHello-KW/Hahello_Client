import {View, Text, Button} from 'react-native';

import {UserStyle} from '../../styling/userLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

import HQimg from '../../../assets/images/HQ1.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const HQ_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 여성호르몬 검사를</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('yes')}
        />
        <SelectionButton
          text={'알고 있지만, 해 본 적 없어'}
          textColor={'#000000'}
          onPress={() => alert('no')}
        />
        <SelectionButton
          text={'잘 모르고 있어'}
          textColor={'#000000'}
          onPress={() => alert('dont know')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('HQ_2')}></NextButton>
      </View>
      <UserImg img={HQimg}></UserImg>
    </>
  );
};

export default HQ_1;
