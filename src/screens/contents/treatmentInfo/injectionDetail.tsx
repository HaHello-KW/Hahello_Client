import {RouteProp, useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import GobackButton from '../../../components/gobackButton';

interface InjectionDetailRouteProps {
  injectionDetail: {
    injectionData: any;
    index: number;
  };
}

interface InjectionDetailProps {
  route: RouteProp<InjectionDetailRouteProps, 'injectionDetail'>;
}

const InjectionDetail = ({route}: InjectionDetailProps) => {
  const {injectionData, index} = route.params;

  const navigation = useNavigation<any>();

  const handleGoback = () => {
    navigation.pop();
  };

  //hook으로 빼서 관리? -> 추후 고려 후 리팩토링 시 반영
  //현재는 테스트 단계, 이미지 깨짐, 추후 원본 이미지 전달받아 수정 예정
  const getImageSource = (index: number) => {
    const imagePaths = [
      require('./images/고날-에프펜.png'),
      require('./images/로렐린.png'),
      require('./images/메노푸어.png'),
      require('./images/세트로타이드.png'),
      require('./images/아이브이에프엠.png'),
      require('./images/오비드렐.png'),
      require('./images/퍼고베리스.png'),
      require('./images/폴리트롭.png'),
      require('./images/퓨레곤펜.png'),
      require('./images/프룰루텍스주.png'),
    ];

    return imagePaths[index];
  };

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView>
        <GobackButton onPress={handleGoback} />
        <Text style={styles.barTitle}>{injectionData.title}</Text>
        <View style={styles.contentsContainer}>
          {/* 약물 이름, 이미지, 설명*/}
          <View style={styles.injectIntroduction}>
            <Text style={styles.mainTitle}>{injectionData.title}</Text>
            <Image style={styles.image} source={getImageSource(index)}></Image>
            <Text style={styles.injectionDescription}>
              {injectionData.description}
            </Text>
          </View>
          {/* 약물 투여 방법*/}
          <View style={styles.injectAdministration}>
            <Text style={styles.subTitle}>투여방법</Text>
            {injectionData.injectAdministration.map(
              (administration: any, index: number) => {
                return (
                  <Text style={styles.contentsTxt}>
                    {index + 1}. {administration}
                  </Text>
                );
              },
            )}
          </View>
          {/* 약물 투여 방법 동영상*/}
          <View style={styles.injectVideo}>
            <Text style={styles.subTitle}>투여방법 영상으로 보기</Text>
            <Text
              style={{
                width: 325,
                height: 162,
                backgroundColor: '#D9D9D9',
                textAlign: 'center',
              }}>
              동영상이 들어갈 공간입니다.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InjectionDetail;

//텍스트, 레이아웃 정렬 마진 값 고려해서 재작성할 것
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#ffffff',
    zIndex: 1,
  },
  contentsContainer: {
    // flex: 1,
    // height: '100%',
    position: 'relative',
    marginTop: 10,
    // top: 70,
    backgroundColor: '#ffffff',
    // backgroundColor: '#FFF96A',
    zIndex: -1,
  },
  barTitle: {
    backgroundColor: '#ffffff',
    // position: 'relative',
    // top: '6%',
    marginTop: 30,
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
  injectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
    marginTop: 20,
    marginHorizontal: 18,
    color: '#242424',
  },
  //각 콘텐츠별 콘테이너 레이아웃
  injectIntroduction: {
    marginVertical: 10,
  },
  injectAdministration: {
    marginVertical: 15,
    marginHorizontal: 18,
  },
  injectVideo: {
    marginVertical: 15,
    marginHorizontal: 18,
    marginBottom: 50,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#545454',
    marginBottom: 10,
  },
  contentsTxt: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 22,
    color: '#545454',
  },
});
