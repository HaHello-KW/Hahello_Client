import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';

//import {UserStyle} from '../../styling/userLayout';
import {UserStyle} from '../styling/userLayout';
import GobackButton from '../components/gobackButton';

//import TxtCollection from '../../txtCollection/txtcolletion';
import TxtCollection from '../txtCollection/txtcolletion';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
//import {UserStyle} from '../styles/typePageStyles';
import images from '../../assets/images/index';
import ResultPage from '../components/typeResult';
import testresult from '../txtCollection/testresult.json';

const SurveyResult = () => {
  const navigation = useNavigation();

  // const [jsondata, setJson] = useState('');

  // const [nowpage, setNowpage] = useState(jsondata);

  // const GET = () => {
  //   axios.get(TypeURL)
  //     .then(res=>{
  //       setJson(res.data);
  //       setNowpage(res.data[0]);
  //     })
  //     .catch(error => console.log(error))
  // }
  // //TypeURL = 'http://10.0.2.2:8080/resultPage/A~E'
  const {TypeURL, imgpath} = require('./survey2');

  // useEffect(() => {
  //   GET();
  // }, []);

  const handleGoback = () => {
    navigation.pop();
  };

  return (
    <>
      <GobackButton onPress={handleGoback} />
      <ResultPage pageContents={testresult} />
      <View style={[UserStyle.containerR_2]}>
        <Image source={imgpath} style={styles.image} />
      </View>
      <View style={[UserStyle.containerR_3]}>
        <TouchableOpacity
          style={styles.startbutton}
          onPress={() => navigation.navigate('HQ_1')}>
          <Text style={styles.starttxt}>컨텐츠 추천 받기</Text>
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
