import {View, Text, Button} from 'react-native';
import MyUpBar_3 from '../../upbar/UpBar_3';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';

import Button_Selector from './selector';

import contentList from './content';
import {ScrollView} from 'react-native-gesture-handler';

const QTEST = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_3 />
      <GobackButton onPress={() => navigation.pop()} />
      <Button_Selector
        title="selector테스트"
        count="10"
        content={contentList}
      />

      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_1')} />
      </View>
    </>
  );
};

export default QTEST;
