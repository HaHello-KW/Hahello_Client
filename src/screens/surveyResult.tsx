/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-lone-blocks */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';

//import {UserStyle} from '../../styling/userLayout';
import {UserStyle} from '../styling/userLayout';
import GobackButton from '../components/gobackButton';

//import TxtCollection from '../../txtCollection/txtcolletion';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
//import {UserStyle} from '../styles/typePageStyles';
import images from '../../assets/images/index';
import ResultPage from '../components/typeResult';

const SurveyResult = () => {
  const {TypeURL} = require('./survey2');

  const {NUM, TYPE} = require('./survey');

  const navigation = useNavigation();

  const [jsondata, setJson] = useState('');

  const [nowpage, setNowpage] = useState(jsondata);

  const GET = () => {
    axios
      .get(TypeURL)
      .then(res => {
        setJson(res.data);
        setNowpage(res.data[NUM - 1]);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    GET();
  }, []);

  var imgpath;
  switch (TYPE) {
    case 'A':
      {
        if (NUM == 1) imgpath = images.userA1R;
        else if (NUM == 2) imgpath = images.userA2R;
        else if (NUM == 3) imgpath = images.userA3R;
        else if (NUM == 4) imgpath = images.userA4R;
        else if (NUM == 5) imgpath = images.userA5R;
      }
      module.exports = {imgpath};
      break;
    case 'B':
      {
        if (NUM == 1) imgpath = images.userB1R;
        else if (NUM == 2) imgpath = images.userB2R;
        else if (NUM == 3) imgpath = images.userB3R;
        else if (NUM == 4) imgpath = images.userB4R;
        else if (NUM == 5) imgpath = images.userB5R;
      }
      module.exports = {imgpath};
      break;
    case 'C':
      {
        if (NUM == 1) imgpath = images.userC1R;
        else if (NUM == 2) imgpath = images.userC2R;
        else if (NUM == 3) imgpath = images.userC3R;
        else if (NUM == 4) imgpath = images.userC4R;
        else if (NUM == 5) imgpath = images.userC5R;
      }
      module.exports = {imgpath};
      break;
    case 'D':
      {
        if (NUM == 1) imgpath = images.userD1R;
        else if (NUM == 2) imgpath = images.userD2R;
        else if (NUM == 3) imgpath = images.userD3R;
        else if (NUM == 4) imgpath = images.userD4R;
        else if (NUM == 5) imgpath = images.userD5R;
      }
      module.exports = {imgpath};
      break;
    case 'E':
      {
        if (NUM == 1) imgpath = images.userE1R;
        else if (NUM == 2) imgpath = images.userE2R;
        else if (NUM == 3) imgpath = images.userE3R;
        else if (NUM == 4) imgpath = images.userE4R;
        else if (NUM == 5) imgpath = images.userE5R;
      }
      module.exports = {imgpath};
      break;
    default:
      break;
  }

  const handleGoback = () => {
    navigation.pop();
  };

  return (
    <>
      <GobackButton onPress={handleGoback} />
      <ResultPage pageContents={nowpage} />
      <View style={[UserStyle.containerR_2]}>
        <Image source={imgpath} style={styles.image} />
      </View>
      <View style={[UserStyle.containerR_3]}>
        <TouchableOpacity
          style={styles.startbutton}
          onPress={() => navigation.navigate('HQ_1')}>
          <Text style={styles.starttxt}>내 호르몬 맞춤 콘텐츠 추천</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.laterbutton}
          onPress={() => navigation.navigate('RESULT_HOME')}>
          <Text style={styles.latertxt}>나중에 할래요</Text>
        </TouchableOpacity>
      </View>
      {/* <Image source={TxtCollection.q_a_type.imgPath} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    color: '#f47100',
    lineHeight: 40,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#010101',
    lineHeight: 18,
  },
  image: {
    //피그마에서 그대로 갖고온것, 추후 수정 필요
    // position: 'absolute',
    width: 300,
    height: 300,
    // left: 20,
    // top: 200,
  },
  startbutton: {
    width: 250,
    height: 48,
    backgroundColor: '#f47100',
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: '4%',
  },
  starttxt: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  laterbutton: {
    width: 250,
    height: 48,
    backgroundColor: 'transparent',
    borderColor: '#f47100',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  latertxt: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SurveyResult;
