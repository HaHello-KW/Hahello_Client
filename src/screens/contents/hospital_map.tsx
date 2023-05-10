import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import GobackButton from '../../components/gobackButton';
import {ImageBackground} from 'react-native';
  
import React, {useState,useEffect, Component} from 'react';
import UpBar_Hospital from '../../components/UpBar_Hospital';
import Map1 from '../../../assets/images/Map1.png';

import { SearchBar, Icon } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';


const HospitalMap = ({navigation, route}) => {
    //병원찾기 : search => 병원 이름
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    }

    //사용자 위치 : latitude => 위도, longitude => 경도 
    const [latitude, setLatitude] = useState("");
    const [longitude, setLogitude] = useState("");

    //위치 구하기
    const GetLocation = async () => {
        console.log('Getting location...');
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                setLatitude(latitude);
                setLogitude(longitude);

                console.log(latitude);
                console.log(longitude);
            },
            error => {
                console.log('Error getting location:', error);
            },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
        );
    };

    //위치 권한
    const CheckPermission = async () => {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted) {
                console.log('Permission already granted');
                GetLocation();
                return;
            }
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (result === PermissionsAndroid.RESULTS.granted) {
                console.log('Permission granted successfully');
                GetLocation();
                return;
            } else {
                console.log('Permission denied');
            }
        }catch(e){
            console.log(e);
        }
    };

    useEffect(()=>{
        CheckPermission();
    },[]);

    return(
        <>
        <UpBar_Hospital text = "병원찾기"/>
        <GobackButton onPress={() => navigation.pop()}></GobackButton>
        <ImageBackground source={Map1} style={styles.image}>
            <SearchBar
                placeholder="병원 이름 검색"
                onChangeText={updateSearch}
                value={search}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
                inputStyle={styles.searchBarInput}
            />
            
        </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        margin:10.
    },
    image: {
        width: '100%',
        height: '100%',
        //height: '43%',
        flex: 1,
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 0,
        margin: 0,
    },
    searchBarInputContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        height: 40,
    },
    searchBarInput: {
        fontSize: 16,
        height: 40,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: '100%',
        height: '100%',
      },
});

export default HospitalMap;