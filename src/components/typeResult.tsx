import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {UserStyle} from '../styling/userLayout';
import { resultPageModel } from '../models/resultPageModel';

type resultPageProps = {
  pageContents: resultPageModel;
};

function ResultPage({pageContents}: resultPageProps) {
  return (
    <>
      <View style={[UserStyle.containerR_0]} />
      <View style={[UserStyle.containerR_1]}>
        <Text style={styles.title}>{pageContents.title}</Text>
        <Text style={styles.description}>
          {pageContents.description[0]}
        </Text>
        <Text style={styles.description}>
          {pageContents.description[1]}
        </Text>
      </View>
      {/* <View style={[UserStyle.containerR_2]}>
        <Image source={TxtCollection.q_a_type.imgPath} style={styles.image} />
      </View> */}
      {/* <View style={[UserStyle.containerR_3]}>
        <TouchableOpacity
          style={styles.startbutton}
          onPress={() => navigation.navigate('HQ_1')}>
          <Text style={styles.starttxt}>컨텐츠 추천 받기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.laterbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.latertxt}>나중에 할래요</Text>
        </TouchableOpacity>
      </View> */}
      {/* <Image source={TxtCollection.q_a_type.imgPath} /> */}
      {/* <GobackButton onPress={() => navigation.pop()}></GobackButton> */}
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

export default ResultPage;