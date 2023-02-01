import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, HStack} from '@react-native-material/core';
import PropTypes from 'prop-types';
import GobackButton from '../Buttons/gobackButton';

type props = {
  level: number;
};
const MyUpBar = ({level}: props, {navigation}) => {
  let arr: any = [];
  //i 키값 부여로 인한 오류
  //encountered two children with the same...
  for (let i = 1; i <= 7; i++) {
    i <= level
      ? arr.push(<Box key="{i}" w="12%" h={2} style={styles.boxlineDone} />)
      : arr.push(<Box key="{i}" w="12%" h={2} style={styles.boxlineYet} />);
  }
  return (
    <>
      <Box w="100%" h="18%" style={{backgroundColor: '#FFAF49'}}>
        <HStack style={styles.boxline} fill center spacing={8}>
          {arr}
        </HStack>
      </Box>
      <GobackButton onPress={() => navigation.pop()} />
    </>
  );
};

MyUpBar.defaultProps = {
  level: '0',
};

MyUpBar.propTypes = {
  level: PropTypes.string,
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
    marginTop: '20%',
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

export default MyUpBar;
