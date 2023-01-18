import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const ALQ_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <Text
        style={{
          fontSize: 24,
          position: 'absolute',
          left: 90,
          top: 254,
          color: '#000000',
        }}>
        나는 해산물 알러지가
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button1}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>있어</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button2}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>없어</Text>
      </TouchableOpacity>

      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('IQ_1')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  container_button: {
    position: 'absolute',
    top: 310,
    left: 35,
    flex: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button1: {
    position: 'absolute',
    left: 19,
    top: 300,
    width: 171,
    height: 126,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  button2: {
    position: 'absolute',
    left: 198,
    top: 300,
    width: 171,
    height: 126,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '215',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#000000',
  },
});

export default ALQ_1;