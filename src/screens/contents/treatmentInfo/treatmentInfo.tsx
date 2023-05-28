import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import GobackButton from '../../../components/gobackButton';
import {useNavigation} from '@react-navigation/native';

import TermButton from './termButton';
import termList from './termList.json';
import {termImgPath} from './termImgPath';

import Procedure from './procedure';
import freezeProcedure from './freezeProcedure.json';
import externalProcedure from './externalProcedure.json';
import {freezeImgPath} from './freezeImgPath';
import {externalImgPath} from './externalImgPath';

import Injection from './injection';
import injectionList from './injectionList.json';
import {injectionImgPath} from './injectionImgPath';

const TreatmentInfo = () => {
  const navigation = useNavigation<any>();

  const handleGoback = () => {
    navigation.pop();
  };

  const contentsTitle1 = '시술정보';
  const contentsDescription = '호르몬에 관한 기본정보의 모든 것을 제공합니다.';

  const contentsTitle2 = '시술용어';
  const contentsTitle3 = '시술과정';

  //style={styles.container1}
  //style={styles.scrollviewConainer}
  return (
    // <>
    <SafeAreaView style={styles.container1}>
      <ScrollView>
        <GobackButton onPress={handleGoback} />
        <View style={styles.contentsContainer}>
          <Text style={styles.title}>{contentsTitle1}</Text>
          <Text style={styles.contentsDescription}>{contentsDescription}</Text>

          {/*시술용어*/}
          <Text style={styles.contentsTitle}>{contentsTitle2}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 15,
              marginBottom: 20,
            }}>
            {termList.map((termData: any, index: number) => {
              return (
                <TermButton
                  destination={termList[index].destination}
                  icon={termImgPath[index].icon}
                  termTitle={termData.termTitle}
                  termData={termData}
                  index={index}
                />
              );
            })}
          </View>
          {/*시술과정*/}
          <Text style={styles.contentsTitle}>{contentsTitle3}</Text>
          {/* 난자냉동 */}
          <View
            style={{
              flex: 1,
              position: 'relative',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <View style={styles.procedureBox}>
              {freezeProcedure.map((element: any, index: number) => {
                return (
                  <Procedure
                    number={freezeProcedure[index].number}
                    image={freezeImgPath[index].image}
                    title={freezeProcedure[index].title}
                    description={freezeProcedure[index].description}
                  />
                );
              })}
            </View>
            <View style={styles.freezePro}>
              <Text style={styles.freezeProTitle}>난자냉동 시술과정</Text>
            </View>
          </View>
          {/* 체외수정 */}
          <View
            style={{
              flex: 1,
              position: 'relative',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <View style={styles.procedureBox}>
              {externalProcedure.map((element: any, index: number) => {
                return (
                  <Procedure
                    number={externalProcedure[index].number}
                    image={externalImgPath[index].image}
                    title={externalProcedure[index].title}
                    description={externalProcedure[index].description}
                  />
                );
              })}
            </View>
            <View style={styles.freezePro}>
              <Text style={styles.freezeProTitle}>체외수정 시술과정</Text>
            </View>
          </View>
          {/* 주사목록 */}
          <View
            style={{
              flex: 1,
              position: 'relative',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <View style={styles.procedureBox}>
              {/*1*/}
              {injectionList.map((injectionData: any, index: number) => {
                return (
                  <Injection
                    number={injectionData.number}
                    image={injectionImgPath[index].image}
                    title={injectionData.title}
                    description={injectionData.description}
                    destination={injectionList[index].destination}
                    injectionData={injectionData}
                    index={index}
                  />
                );
              })}
            </View>
            <View style={styles.freezePro}>
              <Text style={styles.freezeProTitle}>주사종류 및 투약방법</Text>
            </View>
          </View>
          {/* 통증, 부작용 */}
          <View
            style={{
              flex: 1,
              position: 'relative',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <View style={styles.sideEffectsContainer}>
              {/*1*/}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  marginBottom: 10,
                  justifyContent: 'center',
                }}>
                <Image source={require('./images/원형체크아이콘.png')} />
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: 7,
                      marginBottom: 5,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    출혈이 있을 수 있어요
                  </Text>
                  <Text
                    style={{
                      marginLeft: 7,
                      fontSize: 13,
                      fontWeight: '400',
                      width: 285,
                    }}>
                    질 속으로 긴 바늘을 넣어 채취하기에, 시술 후 소량의 출혈이
                    있을 수 있어요. 대부분은 시간이 지나면 멈추기 때문에 크게
                    걱정하지 않아도 되지만, 계속해서 증상이 있으면 병원에
                    방문해주세요.
                  </Text>
                </View>
              </View>
              {/*2*/}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  marginBottom: 10,
                  justifyContent: 'center',
                }}>
                <Image source={require('./images/원형체크아이콘.png')} />
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: 7,
                      marginBottom: 5,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    통증이 있을 수 있어요{' '}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 7,
                      fontSize: 13,
                      fontWeight: '400',
                      width: 285,
                    }}>
                    난자 채취 시술 시간은 짧고 통증이 적은편이지만, 채취 후 복부
                    팽만감 또는, 미세한 복통이 있을 수 있어요. 계속해서 통증이
                    심해지면 병원에 방문해 주세요.
                  </Text>
                </View>
              </View>
              {/* 3 */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  marginBottom: 10,
                  justifyContent: 'center',
                }}>
                <Image source={require('./images/원형체크아이콘.png')} />
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: 7,
                      marginBottom: 5,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    감정기복이 생길 수 있어요{' '}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 7,
                      fontSize: 13,
                      fontWeight: '400',
                      width: 285,
                    }}>
                    호르몬 변화로 약 3주에 걸쳐 다양한 감정 기복이 생길 수
                    있어요. 마음 안정을 위해 정서를 관리해주는게 좋아요.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.freezePro}>
              <Text style={styles.freezeProTitle}>통증 및 부작용</Text>
            </View>
            {/* 공간채우기용 임시 */}
            <Text />
            <Text />
          </View>

          {/* 네비게이션바 */}
          <View
            style={{
              borderTopWidth: 0.2,
              borderTopColor: '#545454',
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 15,
              marginBottom: 30,
              marginTop: 15,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('./images/home_icon.png')}></Image>
              <Text style={styles.navigationBarTxt}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
              <Image source={require('./images/content_icon.png')}></Image>
              <Text style={styles.navigationBarTxt}>컨텐츠</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('서비스 준비중 입니다!')}>
              <Image source={require('./images/my_icon.png')}></Image>
              <Text style={styles.navigationBarTxt}>MY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </>
  );
};

export default TreatmentInfo;

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
    marginTop: 60,
    // top: 70,
    backgroundColor: '#ffffff',
    // backgroundColor: '#FFF96A',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#242424',
    marginLeft: 15,
    marginVertical: 10,
  },
  contentsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#545454',
    marginLeft: 18,
    marginVertical: 8,
  },
  contentsDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '##545454',
    marginLeft: 18,
    marginBottom: 10,
  },
  termButtonContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  freezePro: {
    position: 'absolute',
    width: '90%',
    height: 48,
    backgroundColor: '#F47100',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 5,
  },
  freezeProTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
  procedureBox: {
    flex: 1,
    flexWrap: 'wrap',
    position: 'relative',
    flexDirection: 'row',
    width: '90%',
    paddingTop: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#F47100',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  sideEffectsContainer: {
    flex: 1,
    position: 'relative',
    width: '90%',
    paddingTop: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  navigationBarTxt: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#F47100',
    marginTop: 5,
  },
});
