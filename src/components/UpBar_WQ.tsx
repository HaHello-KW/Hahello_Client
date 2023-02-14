import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, HStack} from '@react-native-material/core';
import {ImageBackground} from 'react-native';
import homebg from '../../assets/images/home_start.png';

const MyUpBar_wq = () => {
  return (
    <Box w="100%" h="18%" style={{backgroundColor: '#FFAF49'}}>
      <ImageBackground
        source={homebg}
        style={{
          width: '100%',
          height: '100%',
          //height: '43%',
          flex: 1,
        }}
      />
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

export default MyUpBar_wq;
