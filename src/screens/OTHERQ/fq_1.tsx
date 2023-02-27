import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../components/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/fq1Img.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';
import TxtCollection from '../../txtCollection/txtcolletion';
import {useState} from 'react';
import SelectionButton from '../../Buttons/selectionButton';
import NextButton from '../../Buttons/nextButton';

const FQ_1 = ({navigation, route}) => {
  const [isButtonSelect, setIsButtonSelect] = useState('');

  //idx, newArr에 빨간줄이 뜨는 이유는??

  const newArr = Array(TxtCollection.fq_1.contents.length).fill(false);
  const handlePress = (idx: number | any) => {
    newArr[idx] = true;
    setIsButtonSelect(newArr);
  };
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_3]}>
        <Text style={[UserStyle.onelinetxt]}>{TxtCollection.fq_1.title}</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
        {TxtCollection.fq_1.contents.map(function (value: any, index: number) {
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
        <NextButton disabled={false} destination={'NQ_1'} />
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

// const styles = StyleSheet.create({
//   container_button: {
//     position: 'absolute',
//     top: 310,
//     left: 35,
//     flex: 5,
//     backgroundColor: '#f5f5f5',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });

export default FQ_1;
