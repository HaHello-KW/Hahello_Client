import {useLinkProps, useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import PropTypes, {number} from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

//encountered two children with the same key 오류 해결 필요
//
//selection button으로부터 받은 값이 true -> 눌렷다는 뜻 -> disable = false
//selection button으로부터 받은 값이 false -> 안눌렸다는 뜻 -> disable = true

// interface Next {
//   disabled: boolean;
//   onPress: () => null;
//   // disabled: false;
// }

// export default class NextButton extends Component<Next, any> {
//   constructor(props: any) {
//     super(props);
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         style={styles.button}
//         disabled={this.props.disabled}
//         onPress={this.props.onPress}>
//         <Text style={styles.title}>다음</Text>
//       </TouchableOpacity>
//     );
//   }
// }

type props = {
  destination: string;
  disabled: boolean;
  //disable = true -> disabled!!, disabled=false -> enabled!!
  // onPress: () => void;
};

function NextButton({destination, disabled}: props) {
  const navigation = useNavigation();
  // const [disable, setDisable] = useState(true);

  return (
    <TouchableOpacity
      style={disabled ? styles.disable : styles.enable}
      disabled={disabled}
      onPress={() => navigation.navigate(destination as never)}>
      <Text style={styles.title}>다음</Text>
    </TouchableOpacity>
  );
}

NextButton.defaultProps = {
  destination: '',
};

NextButton.propTypes = {
  destination: PropTypes.string,
};

const styles = StyleSheet.create({
  enable: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  disable: {
    justifyContent: 'center',
    backgroundColor: '#C1C1C1',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});

export default NextButton;
