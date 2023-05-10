import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import {ImageBackground} from 'react-native';
import Homebg from '../../../assets/images/home_start.png';
import NextButton from '../../../Buttons/nextButton';

import GobackButton from '../../../components/gobackButton';
import {useNavigation} from '@react-navigation/native';

import {useState} from 'react';

import {imgPath} from './termImgPath';

interface TermButtonProps {
  destination: any;
  icon: any; //type 지정 다시 생각할 것
  termTitle: String;
  test: () => void;
}
//props: TermButtonProps

const TermButton = (props: TermButtonProps) => {
  const {destination, icon, termTitle, test} = props;
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate(destination);

  return (
    <View style={styles.termButtonContainer}>
      <TouchableOpacity style={styles.termButton} onPress={test}>
        <Image style={styles.icon} source={icon} />
      </TouchableOpacity>
      <Text style={styles.termTitle}>{termTitle}</Text>
    </View>
  );
};

export default TermButton;

const styles = StyleSheet.create({
  termButton: {
    position: 'relative',
    width: 64,
    height: 64,
    borderColor: '#F47100',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termButtonContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 45,
    height: 45,
  },
  termTitle: {
    fontSize: 12,
    fontWeight: '400',
    width: 50,
    alignItems: 'center',
  },
});
