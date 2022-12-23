import React from "react";
import {StyleSheet} from 'react-native';
import { Box,HStack } from "@react-native-material/core";

const MyUpBar_1 = () =>{
  return(
    <Box w="100%" h={165} style={{backgroundColor: '#FFAF49'}}>
        <HStack style={styles.boxline} fill center spacing={8}>
            <Box w="12%" h={2} style={styles.boxlineDone} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
            <Box w="12%" h={2} style={styles.boxlineYet} />
        </HStack>
    </Box>
  )
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
      padding: 10
  },
  boxline: {
      marginTop: 80,
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
})

export default MyUpBar_1;