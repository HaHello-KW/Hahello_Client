import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

// import GobackButton from '../../components/gobackButton';
import {useNavigation} from '@react-navigation/native';

const BottomBar = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          borderTopWidth: 0.2,
          borderTopColor: '#545454',
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 15,
          marginTop: 15,
          marginBottom: 30,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('RESULT_HOME')}>
          <Image source={require('./home_icon.png')}></Image>
          <Text style={styles.navigationBarTxt}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RESULT_CONTENT')}>
          <Image source={require('./content_icon.png')}></Image>
          <Text style={styles.navigationBarTxt}>컨텐츠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
          <Image source={require('./my_icon.png')}></Image>
          <Text style={styles.navigationBarTxt}>MY</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const CP1 = () => {
  return (
    <View style={{zIndex: -1}}>
      <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
        <Image
          style={{alignSelf: 'center', top: 82}}
          source={require('../../../assets/images/Rectangle_a.png')}
        />
        <View style={{width: 135}}>
          <Text
            style={{
              fontSize: 16,
              left: '25%',
              top: '-30%',
              fontWeight: '700',
              color: '#242424',
            }}>
            5가지 대표 호르몬을 알고있나요?
          </Text>
          <Image
            style={{left: '153%', top: '-60%', width: 167, height: 158}}
            source={require('../../../assets/images/Rectangle_333.png')}
          />
        </View>
        <Text style={{left: '10%', top: '-50%', color: '#242424'}}>
          해당 칼럼 간략 요약{'\n'}1~2줄
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CP2 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TreatmentInfo')}>
      <Image
        style={{top: '-120%', alignSelf: 'center'}}
        source={require('../../../assets/images/medInfo.png')}
      />
    </TouchableOpacity>
  );
};
const CP3 = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: 358,
        height: 450,
        top: '-20%',
        borderRadius: 8,
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        alignContent: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#242424',
          left: '-10%',
          top: '-5%',
          fontWeight: '700',
          marginTop: 15,
        }}>
        하해호님을 위한 건강 컨텐츠
      </Text>

      <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
        <Image
          // style={{left: '3%', top: '25 %'}}
          source={require('./Rectangle_334.png')}
        />
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2760,
            width: 151,
            height: 25,
            fontSize: 14,
            fontWeight: '700',
            color: '#545454',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          골반 허벅지 스트레칭
        </Text>
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2782,
            width: 154,
            height: 18,
            fontSize: 12,
            fontWeight: '400',
            color: '#545454',
            marginHorizontal: 5,
          }}>
          쉽고 재미있게 따라할 수 있어요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
        <Image
          //style={styles.strecth}
          style={{
            //position: 'absolute',
            //left: 200,
            //top: 1810,
            width: 160,
            height: 132,
          }}
          source={require('../../../assets/images/music.png')}
        />
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2760,
            width: 153,
            height: 25,
            fontSize: 14,
            fontWeight: '700',
            color: '#545454',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          내면에 집중하는 음악명상
        </Text>
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2782,
            width: 154,
            height: 18,
            fontSize: 12,
            fontWeight: '400',
            color: '#545454',
            marginHorizontal: 5,
          }}>
          마음건강은 곧 신체건강 !
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
        <Image
          //style={styles.strecth}
          style={{
            //position: 'absolute',
            //left: 200,
            //top: 1810,
            width: 160,
            height: 132,
          }}
          source={require('../../../assets/images/folicAcid.png')}
        />
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2760,
            width: 151,
            height: 25,
            fontSize: 14,
            fontWeight: '700',
            color: '#545454',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          엽산이 필요해요
        </Text>
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2782,
            width: 154,
            height: 18,
            fontSize: 12,
            fontWeight: '400',
            color: '#545454',
            marginHorizontal: 5,
          }}>
          꼭 필요한 영양제를 모아봤어요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
        <Image
          //style={styles.strecth}
          style={{
            //position: 'absolute',
            //left: 200,
            //top: 1810,
            width: 160,
            height: 132,
          }}
          source={require('../../../assets/images/food.png')}
        />
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2760,
            width: 151,
            height: 25,
            fontSize: 14,
            fontWeight: '700',
            color: '#545454',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          식물성 단백질 샐러드
        </Text>
        <Text
          style={{
            //position: 'absolute',
            //left: 203,
            //top: 2782,
            width: 154,
            height: 18,
            fontSize: 12,
            fontWeight: '400',
            color: '#545454',
            marginHorizontal: 5,
          }}>
          이런 레시피 어때요?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RESULT_CONTENT = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            // height: 1050,
            alignContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#242424',
              left: '8%',
              top: '6%',
              fontWeight: '500',
            }}>
            호르몬 백과사전
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text
              style={{
                fontSize: 14,
                color: '#242424',
                left: '65%',
                top: '330%',
              }}>
              전문가 칼럼 보기 {`>`}
            </Text>
          </TouchableOpacity>
          {/* <View style={{flex: 1, flexDirection: 'column'}}> */}
          <CP1></CP1>
          <CP2></CP2>
          <CP3></CP3>
          <BottomBar />
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RESULT_CONTENT;

const styles = StyleSheet.create({
  navigationBarTxt: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#F47100',
    marginTop: 5,
  },
});
