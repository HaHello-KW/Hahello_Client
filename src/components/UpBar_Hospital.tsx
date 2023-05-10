import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, HStack} from '@react-native-material/core';
import {ImageBackground} from 'react-native';
import { Text } from 'react-native-paper';

const UpBar_Hospital = ({text}) => {
  return (
    <Box w="100%" h="8%" style={{backgroundColor: '#FFFFFF'}}>
      <Text style={{
        left: 105,
        top: 25,
        width: 190,
        height: 24,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
      }}>
      {text}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 16,
    color: '#000000',
    height: 50,
    width: 300,
    //borderColor: '#000000',
    //borderWidth: 1,
    //borderRadius: 12,
    padding: 10,
  },
  boxline: {
    marginTop: '15%',
    marginBottom: '10%',
    marginRight: '3%',
    marginLeft: '3%',
  },
  boxlineDone: {
    backgroundColor: '#F47100',
  },
  boxlineYet: {
    backgroundColor: '#FFFFFF',
  },
  buttonSelection: {
    backgroundColor: '#F2F2F2',
    width: 300,
    height: 40,
  },
  buttonNext: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#F47100',
    width: 300,
    height: 40,
  },
});

export default UpBar_Hospital;
