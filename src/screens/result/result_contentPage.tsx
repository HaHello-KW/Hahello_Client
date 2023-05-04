import {fontWeight} from '@mui/system';
import React from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Touchable,
  SafeAreaView,
  TextBase,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import GobackButton from '../../components/gobackButton';
const BottomBar = ({navigation, route}) => {
  return (
    <View>
      <View
        style={{
          //position: 'absolute',
          width: 390,
          height: 0.6,
          //top: 3140,
          backgroundColor: '#000000',
        }}></View>
      <View style={{flexDirection: 'column', height: 100}}>
        <TouchableOpacity onPress={() => navigation.navigate('RESULT_HOME')}>
          <Image
            // style={{left: 81, top: 10}}
            style={{left: '21%', top: '20%'}}
            source={require('./home_icon.png')}></Image>
          <Text
            style={{
              //position: 'absolute',
              //left: 93,
              left: '23.5%',
              //top: 20,
              top: '38%',
              color: '#F47100',
            }}>
            홈
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
          <Image
            //style={{left: 177, top: -43}}
            style={{left: '45%', top: '-75%'}}
            source={require('./content_icon.png')}></Image>
          <Text
            style={{
              //position: 'absolute',
              //left: 179,
              left: '44.5%',
              //top: -34,
              top: '-60%',
              color: '#F47100',
            }}>
            컨텐츠
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
          <Image
            //style={{left: 273, top: -97}}
            style={{left: '70%', top: '-180%'}}
            source={require('./my_icon.png')}></Image>
          <Text
            style={{
              //position: 'absolute',
              //left: 283,
              left: '72%',
              //top: -88,
              top: '-160%',
              color: '#F47100',
            }}>
            MY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const CP1 = () => {
  return (
    <View>
      <Image
        style={{alignSelf: 'center', top: 82}}
        source={require('../../../assets/images/Rectangle_a.png')}
      />
      <View style={{width: 135}}>
        <Text style={{fontSize: 16, left: '25%', top: '-30%'}}>
          5가지 대표 호르몬을 알고있나요?
        </Text>
        <Image
          style={{left: '153%', top: '-60%', width: 167, height: 158}}
          source={require('../../../assets/images/Rectangle_333.png')}
        />
      </View>
      <Text style={{left: '10%', top: '-50%'}}>요약줄ddddd</Text>
    </View>
  );
};

const CP2 = () => {
  return (
    <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
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
        height: 436,
        top: '-20%',
        borderRadius: 8,
        backgroundColor: '#d9d9d9',
        flexDirection: 'row',
        alignContent: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#242424',
          left: '-10%',
          top: '-5%',
          fontWeight: '700',
        }}>
        하해호님을 위한 건강 컨텐츠
      </Text>
      <>
        <TouchableOpacity>
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
            }}>
            쉽고 재미있게 따라할 수 있어요
          </Text>
        </TouchableOpacity>
      </>
      <>
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
            }}>
            마음건강은 곧 신체건강 !
          </Text>
        </TouchableOpacity>
      </>
      <>
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
            }}>
            꼭 필요한 영양제를 모아봤어요
          </Text>
        </TouchableOpacity>
      </>
      <>
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
            }}>
            이런 레시피 어때요?
          </Text>
        </TouchableOpacity>
      </>
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
            height: 1050,
            alignContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',
            //alignItems: 'center',
            //alignSelf: 'center',
            //flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#242424',
              left: '8%',
              top: '6%',
            }}>
            호르몬 백과사전
          </Text>
          <TouchableOpacity>
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
          <View style={{flex: 1, flexDirection: 'column'}}>
            <CP1></CP1>
            <CP2></CP2>
            <CP3></CP3>
            <View>
              <BottomBar navigation={navigation}></BottomBar>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RESULT_CONTENT;
