import {RouteProp, useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import GobackButton from '../../../components/gobackButton';

// type TermDetailRouteProp = RouteProp<
//   {termDetail: {termData: any}},
//   'termDetail'
// >;

// interface TermDetailProps {
//   route: TermDetailRouteProp;
// }

interface TermDetailRouteProp {
  termDetail: {
    termData: any;
    index: number;
  };
}

interface TermDetailProps {
  route: RouteProp<TermDetailRouteProp, 'termDetail'>;
}

const TermDetail = ({route}: TermDetailProps) => {
  const {termData, index} = route.params;

  const navigation = useNavigation<any>();

  const handleGoback = () => {
    navigation.pop();
  };

  //hook으로 빼서 관리? -> 추후 고려 후 리팩토링 시 반영
  //현재는 테스트 단계, 추후 이미지 소스 전달받아 수정 예정
  const getImageSource = (index: number) => {
    const imagePaths = [
      require('./images/testing.png'),
      require('./images/과배란유도주사.png'),
      require('./images/testing.png'),
      require('./images/신선배아.png'),
      require('./images/testing.png'),
    ];

    return imagePaths[index];
  };

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView>
        <GobackButton onPress={handleGoback} />
        <Text style={styles.barTitle}>{termData.termTitle}</Text>
        <View style={styles.contentsContainer}>
          <Text style={styles.mainTitle}>{termData.termTitle}란?</Text>

          <Image style={styles.image} source={getImageSource(index)} />

          <Text style={styles.termDescription}>{termData.definition}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermDetail;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  contentsContainer: {
    // flex: 1,
    // height: '100%',
    position: 'relative',
    marginTop: 50,
    // top: 70,
    backgroundColor: '#ffffff',
    // backgroundColor: '#FFF96A',
  },
  barTitle: {
    backgroundColor: '#ffffff',
    position: 'relative',
    top: '6%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    zIndex: -1,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#010101',
    // zIndex: -1,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    marginTop: 20,
  },
  termDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
    marginTop: 20,
    marginHorizontal: 18,
    color: '#242424',
  },
});
