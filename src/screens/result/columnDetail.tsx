import {
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const ColumnDetail = ({navigation, route}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 16,
          fontWeight: '400',
          color: '#000000',
        }}>
        {'\n'}전문가 칼럼{'\n'}
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: '700',
          color: '#000000',
          height: 60,
        }}>
        가임력 보존을 위한 '난자냉동'
      </Text>
      <Image
        resizeMode="contain"
        style={{width: '100%'}}
        source={require('./columnImage/Rectangle_239.png')}></Image>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 14,
          fontWeight: '400',
          color: '#242424',
          width: '97%',
          height: '44%',
        }}>
        {'\n'}만 40세의 미혼 여성 직장인 이 모씨는 결혼 계획은 없지만 행복한
        가정을 꾸리는 것이 꿈이다. 친구들과의 모임에서도 자연스럽게 난자냉동
        얘기가 나온다. 이씨는 고민 끝에 OO병원에서 난자냉동 시술을 받았고 6개의
        난자를 채취했는데 생각보다 난자 개수가 적게 나온 것에 실망했지만, 앞으로
        난자 20개 정도를 모아두는 것이 목표이다. 난자냉동 등을 통해 가임력
        보존이 필요한 경우는 난소 기능 저하, 자궁 내막증,조기폐경의 가족력,난소
        수술을 받는 경우나 암으로 진단되어 항암 요법이나 방사선 치료가 필요하다.
      </Text>
      <View style={{flexDirection: 'row', padding: 1}}>
        <View
          style={{
            width: 85,
            height: 26,
            borderRadius: 100,
            backgroundColor: '#B0B3BC1A',
          }}>
          <Text style={{alignSelf: 'center'}}>#난자냉동</Text>
        </View>
        <View
          style={{
            width: 90,
            height: 26,
            borderRadius: 100,
            backgroundColor: '#B0B3BC1A',
          }}>
          <Text style={{alignSelf: 'center'}}>#가임력보존</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Text> OO병원 전문의{'\n'}김명확</Text>
        <Image source={require('./columnImage/Rectangle_338.png')}></Image>
      </View>
    </SafeAreaView>
  );
};

export default ColumnDetail;
