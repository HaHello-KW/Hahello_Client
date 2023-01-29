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
} from 'react-native';

import {ImageBackground} from 'react-native';
import Homebg from '../../../assets/images/home_start.png';
import NextButton from '../../Buttons/nextButton';
import UserAimg from '../../../assets/images/userA.png';

import base from '../../../assets/images/Rectangle_base.png';
import base_1 from '../../../assets/images/Rectangle_1.png';
import {height} from '@mui/system';
import rectangle_hospital from '../../../assets/images/Rectangle_hospital.png';

import {useState} from 'react';

//차트 라이브러리 테스트를 위함
import Chart from './chartExam';

import TimeLine from './timeLineFullPage';

const RESULT_HOME = ({navigation, route}) => {
  const [target, change] = useState(false);
  const [amh_isopen, openFunc] = useState(true);

  const graph_box_open_amh = () => {
    return (
      <View style={styles.hormone_box_openMode}>
        <Image
          style={styles.amh}
          source={require('../../../assets/images/AMH_result.png')}
        />

        <Text style={styles.hormone_text}>정상</Text>
        <Text style={styles.hormone_value}>1.91 ng/ml</Text>
        <TouchableOpacity onPress={() => change(!target)}>
          <Image
            style={styles.hormone_button1}
            source={require('../../../assets/images/hormone_open.png')}
          />
        </TouchableOpacity>
        <View style={styles.graph_base}>
          {/* <Text style={styles.graph_xValue1}>34세</Text>
          <Text style={styles.graph_xValue2}>35세</Text>
          <Text style={styles.graph_xValue3}>36세</Text>
          <Text style={styles.graph_xValue4}>37세</Text>
          <Text style={styles.graph_yValue1}>87.5</Text>
          <Text style={styles.graph_yValue2}>75.5</Text>
          <Text style={styles.graph_yValue3}>62.5</Text>
          <Text style={styles.graph_yValue4}>50.1</Text>
          <Text style={styles.graph_yValue5}>37.6</Text>
          {graph()} */}
          <>{Chart()}</>
        </View>
      </View>
    );
  };

  const graph_box_closed_amh = () => {
    return (
      <View style={styles.hormone_box_closeMode}>
        <Image
          style={styles.amh}
          source={require('../../../assets/images/AMH_result.png')}
        />

        <Text style={styles.hormone_text}>정상</Text>
        <Text style={styles.hormone_value}>1.91 ng/ml</Text>
        <TouchableOpacity onPress={() => change(!target)}>
          <Image
            style={styles.hormone_button1}
            source={require('../../../assets/images/hormone_close.png')}
          />
        </TouchableOpacity>
        {/* <View style={styles.graph_base}>
          
          <>{Chart()}</>
        </View> */}
      </View>
    );
  };

  const graph_box_closed_fsh = () => {
    return (
      <View style={styles.hormone_box_fsh_closeMode}>
        <Image
          style={styles.fsh}
          source={require('../../../assets/images/FSH_result.png')}
        />

        <Text style={styles.hormone_text}>정상</Text>
        <Text style={styles.hormone_value}>1.91 ng/ml</Text>
        <TouchableOpacity onPress={() => alert('aa')}>
          <Image
            style={styles.hormone_button1}
            source={require('../../../assets/images/hormone_open.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const graph_box_closed_lh = () => {
    return (
      <View style={styles.hormone_box_lh_closeMode}>
        <Image
          style={styles.lh}
          source={require('../../../assets/images/LH_result.png')}
        />

        <Text style={styles.hormone_text}>정상</Text>
        <Text style={styles.hormone_value}>1.91 ng/ml</Text>
        <TouchableOpacity onPress={() => alert('aa')}>
          <Image
            style={styles.hormone_button1}
            source={require('../../../assets/images/hormone_open.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={base} style={{height: 3242}}>
          <ImageBackground source={base_1} style={{height: 812}}>
            <Text style={styles.welcometxt}>안녕하세요 하해호님</Text>
            <Text style={styles.descriptxt}>
              긴 여정을 함께 와주셔서 감사합니다. 하해호와 함께 건강관리 함께
              해봐요!
            </Text>

            <View
              style={{
                position: 'absolute',
                left: 45,
                top: 219,
                height: 428,
                width: 300,
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
              }}>
              <Image
                style={styles.A_image}
                source={require('../../../assets/images/userA.png')}
              />
              {/* <Text style={styles.content1}>여유로운 똑똑이 유형</Text> */}
              <Text style={styles.content2}>
                BMI정상(상위15%) 건강 상황에 대한 요약 내용
              </Text>
            </View>

            <Text style={styles.content1}>여유로운 똑똑이 유형</Text>

            <Text style={styles.content3}>하해호님 호르몬 수치</Text>

            <TouchableOpacity onPress={() => alert('호르몬수치 입력')}>
              <Text style={styles.input_hormone}>
                호르몬 수치 입력하기 {'>'}
              </Text>
            </TouchableOpacity>
            {/* {graph_box_open_amh()} */}
            <View>
              {/* {target ? graph_box_open_amh() : graph_box_closed_amh()} */}
              {target ? graph_box_open_amh() : graph_box_closed_amh()}
              {graph_box_closed_fsh()}
              {graph_box_closed_lh()}
            </View>
          </ImageBackground>
          <ImageBackground
            source={rectangle_hospital}
            style={{
              position: 'absolute',
              left: 0,
              top: 1398,
              height: 367,
              width: 390,
            }}>
            <Image
              style={{
                position: 'absolute',
                left: 104,
                top: 22.6,
                width: 185.62,
                height: 113.77,
              }}
              source={require('../../../assets/images/twoHand.png')}
            />
            <Text
              style={{
                position: 'absolute',
                left: 97,
                top: 140,
                width: 206.94,
                height: 33,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '700',
                color: '#000000',
              }}>
              근처 여성병원 검색하기
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: 105,
                top: 172,
                width: 190.48,
                height: 40,
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '400',
                color: '#000000',
                letterSpacing: -0.03,
              }}>
              여성호르몬 수치를 검사받을 수 있는 병원을 찾아보세요
            </Text>
            {/* 병원 검색하기 버튼 */}
            <TouchableOpacity onPress={() => alert('병원검색')}>
              <View
                style={{
                  position: 'absolute',
                  left: 65,
                  top: 223,
                  width: 260,
                  height: 48,
                  backgroundColor: '#F47100',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    top: 12,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#FBFBFB',
                  }}>
                  병원 검색하기
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          {/* 밑은 건강여정 포함된 박스 */}
          <View style={styles.otherBox}>
            <Text
              style={{
                left: 24,
                top: 66,
                width: 189,
                height: 28,
                fontFamily: 'Noto Sans KR',
                fontSize: 24,
                fontWeight: '700',
                color: '#F47100',
              }}>
              하해호님 건강여정
            </Text>

            {/* "전체보기 >" 스타일 피그마와 상이하게 조정한 부분 존재 */}
            <TouchableOpacity onPress={() => alert('전체보기 화면으로 이동')}>
              <Text
                style={{
                  left: 290,
                  top: 45,
                  width: 80,
                  height: 20,
                  fontFamily: 'Noto Sans KR',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#15111',
                }}>
                전체보기 {'>'}
              </Text>
            </TouchableOpacity>

            <View style={styles.timeLine_ex}>
              <ScrollView nestedScrollEnabled={true}>
                {/* <Text
                  style={{
                    left: 22,
                    top: 6,
                    width: 29,
                    height: 15,
                    fontSize: 12,
                    fontWeight: '400',
                    color: '#9D9D9D',
                  }}>
                  2022
                  </Text>
                  <Text
                  style={{
                    left: 1,
                    top: 6,
                    width: 42,
                    height: 30,
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#9D9D9D',
                  }}>
                  32세
                  </Text>
                  <Text>aa</Text>
                  <Text>aa</Text>
                  <Text>aa</Text>
                  <Text>aa</Text>
                  <Text>aa</Text>
                  <Text>aa2</Text>
                  <Text>aa3</Text>
                  <Text>aa4</Text>
                  <Text>aa5</Text>
                <Text>aa6</Text>
                <Text>aa7</Text>
              <Text>aa8</Text> */}
                <TimeLine />
              </ScrollView>
              <TouchableOpacity onPress={() => alert('타임라인수정')}>
                <Image
                  style={{left: 311, top: 2, width: 48, height: 48}}
                  source={require('../../../assets/images/changeTimelineButton.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => alert('시술정보')}>
            <ImageBackground
              style={styles.medicalInfo}
              source={require('../../../assets/images/medical_info.png')}>
              <Text
                style={{
                  left: 10,
                  top: 70,
                  width: 110,
                  height: 27,
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#FFFFFF',
                }}>
                시술 정보
              </Text>
              <Text
                style={{
                  left: 8,
                  top: 80,
                  width: 250,
                  height: 20,
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#FFFFFF',
                }}>
                난자 냉동, 난임 시술 정보를 확인해보세요
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('시술정보')}>
            <ImageBackground
              style={styles.column}
              source={require('../../../assets/images/column.png')}>
              <Text
                style={{
                  left: 10,
                  top: 70,
                  width: 120,
                  height: 27,
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#FFFFFF',
                }}>
                전문가 칼럼
              </Text>
              <Text
                style={{
                  left: 8,
                  top: 80,
                  width: 250,
                  height: 20,
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#FFFFFF',
                }}>
                전문가들이 조언하는 난소 건강 관리 방법
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 30,
              top: 2586,
              width: 215,
              height: 22,
              fontSize: 18,
              fontWeight: '700',
              color: '#242424',
            }}>
            하해호님을 위한 건강 컨텐츠
          </Text>
          <TouchableOpacity onPress={() => alert('골반스트레칭')}>
            <Image
              //style={styles.strecth}
              style={{
                position: 'absolute',
                left: 30,
                top: 1810,
                width: 160,
                height: 132,
              }}
              source={require('../../../assets/images/stretch.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 30,
              top: 2760,
              width: 128,
              height: 25,
              fontSize: 14,
              fontWeight: '700',
              color: '#545454',
            }}>
            골반 허벅지 스트레칭
          </Text>
          <Text
            style={{
              position: 'absolute',
              left: 30,
              top: 2782,
              width: 154,
              height: 18,
              fontSize: 12,
              fontWeight: '400',
              color: '#545454',
            }}>
            쉽고 재미있게 따라할 수 있어요
          </Text>
          <TouchableOpacity onPress={() => alert('음악명상')}>
            <Image
              //style={styles.strecth}
              style={{
                position: 'absolute',
                left: 200,
                top: 1810,
                width: 160,
                height: 132,
              }}
              source={require('../../../assets/images/music.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 203,
              top: 2760,
              width: 151,
              height: 25,
              fontSize: 14,
              fontWeight: '700',
              color: '#545454',
            }}>
            내면에 집중하는 음악명상
          </Text>
          <Text
            style={{
              position: 'absolute',
              left: 203,
              top: 2782,
              width: 154,
              height: 18,
              fontSize: 12,
              fontWeight: '400',
              color: '#545454',
            }}>
            마음건강은 곧 신체건강 !
          </Text>
          <TouchableOpacity onPress={() => alert('영양제추천')}>
            <Image
              //style={styles.strecth}
              style={{
                position: 'absolute',
                left: 30,
                top: 2000,
                width: 160,
                height: 132,
              }}
              source={require('../../../assets/images/folicAcid.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 30,
              top: 2952,
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
              position: 'absolute',
              left: 30,
              top: 2976,
              width: 154,
              height: 18,
              fontSize: 12,
              fontWeight: '400',
              color: '#545454',
            }}>
            꼭 필요한 영야제를 모아봤어요
          </Text>
          <TouchableOpacity onPress={() => alert('음식정보')}>
            <Image
              //style={styles.strecth}
              style={{
                position: 'absolute',
                left: 203,
                top: 2000,
                width: 160,
                height: 132,
              }}
              source={require('../../../assets/images/food.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 203,
              top: 2952,
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
              position: 'absolute',
              left: 203,
              top: 2976,
              width: 154,
              height: 18,
              fontSize: 12,
              fontWeight: '400',
              color: '#545454',
            }}>
            이런 레시피 어때요?
          </Text>
          <TouchableOpacity onPress={() => alert('더많은 컨텐츠 보러 가기')}>
            <View
              style={{
                position: 'absolute',
                left: 65,
                top: 2220,
                width: 260,
                height: 48,
                alignItems: 'center',
                backgroundColor: '#F47100',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  top: 15,
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#FBFBFB',
                }}>
                더 많은 컨텐츠 보러가기
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcometxt: {
    position: 'absolute',
    left: 95,
    top: 101,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    // lineHeight: '100%',
    // letterSpacing: -0.8,
  },
  descriptxt: {
    position: 'absolute',
    width: 213,
    height: 37,
    left: 91,
    top: 140,
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
    textAlign: 'center',
  },
  //여유로운 똑똑이 유형 이미지(userA 이미지)
  A_image: {
    position: 'absolute',
    left: 20,
    top: 26,
    width: 260,
    height: 260,
  },
  //여유로운 똑똑이 유형
  content1: {
    position: 'absolute',
    width: 260,
    height: 33,
    left: 65,
    top: 525,
    fontSize: 26,
    fontWeight: '900',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.6,
    color: '#994E9C',
  },
  //bml수치, 건강상황에 대한 요약 내용
  content2: {
    position: 'absolute',
    width: 146,
    height: 40,
    left: 72,
    top: 355,
    fontSize: 14,
    fontWeight: '400',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.6,
    color: '#000000',
  },
  //하해호님 호르몬 수치
  content3: {
    position: 'absolute',
    width: 164,
    height: 21,
    left: 34,
    top: 698,
    fontSize: 18,
    fontWeight: '700',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.006,
    color: '#000000',
  },
  //호르몬 수치 입력하기
  input_hormone: {
    position: 'absolute',
    width: 140,
    height: 18,
    left: 221,
    top: 701,
    fontSize: 14,
    fontWeight: '400',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.006,
    color: '#151111',
  },
  //호르몬 수치 박스
  hormone_box_openMode: {
    position: 'absolute',
    left: 30,
    top: 732,
    height: 434,
    width: 330,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  hormone_box_closeMode: {
    position: 'absolute',
    left: 30,
    //left: '5%',
    top: 732,
    height: 72,
    width: 330,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  hormone_box_fsh_closeMode: {
    position: 'absolute',
    left: 30,
    top: 1181,
    height: 72,
    width: 330,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  hormone_box_lh_closeMode: {
    position: 'absolute',
    left: 30,
    top: 1265,
    height: 72,
    width: 330,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  amh: {
    position: 'absolute',
    width: 52,
    height: 51.65,
    left: 14,
    top: 14.25,
  },
  fsh: {
    position: 'absolute',
    width: 50.04,
    height: 50,
    left: 14,
    top: 12.66,
  },
  lh: {
    position: 'absolute',
    width: 50.04,
    height: 50,
    left: 14,
    top: 11,
  },
  //호르몬 수치 표현 text ( ex)정상 )
  hormone_text: {
    position: 'absolute',
    width: 30,
    height: 18,
    left: 232,
    top: 23,
    fontSize: 16,
    fontWeight: '700',
    color: '#FF7C00',
  },
  hormone_value: {
    position: 'absolute',
    width: 64,
    height: 15,
    left: 215,
    top: 47,
    fontSize: 12,
    fontWeight: '400',
    color: '#242424',
    //lineHeight: 100,
  },
  hormone_button1: {
    position: 'absolute',
    left: 293,
    top: 31.5,
    width: 20,
    height: 11,
  },
  //그래프 박스
  graph_base: {
    position: 'absolute',
    width: 306,
    height: 207,
    left: 15,
    top: 78,
    //backgroundColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
  },
  graph_xValue1: {
    position: 'absolute',
    fontSize: 12,
    left: 61,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue2: {
    position: 'absolute',
    fontSize: 12,
    left: 122,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue3: {
    position: 'absolute',
    fontSize: 12,
    left: 183,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue4: {
    position: 'absolute',
    fontSize: 12,
    left: 244,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue1: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 12,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue2: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 44,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue3: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 76,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue4: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 108,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue5: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 140,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  line_x0: {
    position: 'absolute',
    left: 74,
    top: 0,
  },
  line_y0: {
    position: 'absolute',
    left: 74,
    top: 147,
  },
  line_x1: {
    position: 'absolute',
    left: 134,
    top: 0,
  },
  line_y1: {
    position: 'absolute',
    left: 74,
    top: 115,
  },
  line_x2: {
    position: 'absolute',
    left: 194,
    top: 0,
  },
  line_y2: {
    position: 'absolute',
    left: 74,
    top: 83,
  },
  line_x3: {
    position: 'absolute',
    left: 254,
    top: 0,
  },
  line_y3: {
    position: 'absolute',
    left: 74,
    top: 50,
  },
  line_x4: {
    position: 'absolute',
    left: 314,
    top: 0,
  },
  line_y4: {
    position: 'absolute',
    left: 74,
    top: 18,
  },
  otherBox: {
    position: 'absolute',
    left: 0,
    top: 1703,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    //border-top-left-radius: '24',
  },
  //전체보기 > 버튼 피그마 기준 지정 스타일
  // viewAll: {
  //   width: 59,
  //   height: 16,
  //   left: 281,
  //   // top: 1773,
  //   fontWeight: '400',
  //   fontSize: 16,
  //   textAlign: 'center',
  //   letterSpacing: -0.006,
  //   color: '#151111',
  // },
  timeLine_ex: {
    position: 'absolute',
    left: 20,
    top: 134,
    width: 330,
    // height: 250,
    height: 300,
    backgroundColor: '#ffffff',
  },
  medicalInfo: {
    position: 'absolute',
    left: 20,
    //top: 2110,
    top: 1410,
    width: 350,
    height: 150,
    borderRadius: 8,
  },
  column: {
    position: 'absolute',
    left: 20,
    //top: 2110,
    top: 1580,
    width: 350,
    height: 150,
    borderRadius: 8,
  },
  strecth: {
    position: 'absolute',
    left: 30,
    top: 2620,
    width: 160,
    height: 132,
    borderRadius: 8,
  },
});
export default RESULT_HOME;
