import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import {ImageBackground} from 'react-native';
  
import React, {useState,useEffect, Component} from 'react';

const Hostpital_list = () => {
    return(
        <View style = {styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: 390,
      height: 336,
      marginTop: 508,
      backgroundColor: '#FBFBFB',
      opacity: 0.9,
    },
});

export default Hostpital_list;