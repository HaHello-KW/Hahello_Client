import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// interface Img {
//   img: any;
// }

// export default class UserImg extends Component<Img, any> {
//   constructor(props: any) {
//     super(props);
//   }

//   render() {
//     return <Image source={this.props.img} style={styles.image} />;
//   }
// }

type props = {
  imgsrc: string;
};

function UserImg({imgsrc}: props) {
  return <Image source={{uri: imgsrc}} style={styles.image} />;
}

export default UserImg;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: '36%',
    top: '13%',
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
