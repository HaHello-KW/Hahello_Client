import {View, Text, Button} from 'react-native';


import {UserStyle} from '../../styling/userLayout';
import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../components/gobackButton';

import HQimg from '../../../assets/images/HQ1.png';
//import HQimg from '../../../assets/images/HQ1.png'
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';
import TxtCollection from '../../txtCollection/txtcolletion';
import SelectionButton from '../../Buttons/selectionButton';
import {useState} from 'react';
import NextButton from '../../Buttons/nextButton';

const HQ_1 = ({navigation, route}) => {
  const [isButtonSelect, setIsButtonSelect] = useState('');
  const newArr = Array(TxtCollection.hq_1.contents.length).fill(false);
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

        <Text style={[UserStyle.onelinetxt]}>{TxtCollection.hq_1.title}</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        {TxtCollection.hq_1.contents.map(function (value: any, index: number) {
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
        <NextButton disabled={false} destination={'HQ_2'} />

      </View>
      <UserImg img={HQimg}></UserImg>
    </>
  );
};


export default HQ_1;

