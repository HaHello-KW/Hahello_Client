import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import MyUpBar_3 from '../../upbar/UpBar_3';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';

import PropTypes from 'prop-types';

// props.title: 질문 제목
// props.count: 선택지 개수
// props.content: 선택지 내용 -> count개수만큼 생성

const Button_Selector = ({title, count, content}) => {
  let countTarget = Number(count);

  const countF = () => {
    const buttonList = []; //빈 배열을 하나 만들고
    for (let i = 0; i < countTarget; i++) {
      //반복문 돌면서 배열에 SelectionButton을 push해줌
      buttonList.push(
        <SelectionButton
          key={i}
          text={content[i]}
          textColor={'#000000'}
          onPress={() => alert('selected 1')}
        />,
      );
    }

    return buttonList; //배열 반환
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
        <View style={styles.selectionContainer}>
          <ScrollView>{countF()}</ScrollView>
        </View>
      </View>
    </>
  );
};
Button_Selector.prototype = {
  title: PropTypes.string,
  count: PropTypes.number,
  content: PropTypes.string,
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  titleContainer: {
    flex: 2,
    //backgroundColor: 'blue',
  },
  selectionContainer: {
    flex: 7,
    //backgroundColor: 'green',
  },
  titleTxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    //backgroundColor: 'white',
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 34.75,
  },
});

export default Button_Selector;
