import {View, Text, Button, Image, StyleSheet} from 'react-native';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/HQ1.png';
import UserImg from '../../Buttons/userImg';

const HQ_1 = ({navigation, route}) => {
  return (
    <>
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_3]}>
        <Text style={[UserStyle.onelinetxt]}>나는 여성호르몬 검사를</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
        <SelectionButton
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('1')}
        />
        <SelectionButton
          text={'알고있지만, 해 본 적 없어'}
          textColor={'#000000'}
          onPress={() => alert('2')}
        />
        <SelectionButton
          text={'잘 모르고 있어'}
          textColor={'#000000'}
          onPress={() => alert('3')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('HQ_2')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default HQ_1;
