import React, {useReducer, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';
import {StylesContext} from '@material-ui/styles';
//import {Surveys} from '../../mocks/surveys';
import SelectionButton_H2 from '../../Buttons/2selectionButton_h';

const initialState = {
  id: 'default',
  status: 200,
  message: 'defaultPage 정상 반환',
  pages: [
    {
      level: 1,
      questionType: 'Picker_ThreeLine',
      questionID: 'Q-Default1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '태어났어',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'None',
    },
    {
      level: 2, //upbar에 표시할 단계
      questionType: 'Button_Selector', //해당 질문유형
      questionID: 'Q-Default2', //해당 질문코드
      questionTitle: '나는', //해당 질문제목
      count: 5, //선택지 개수
      contents: [
        //선택지 내용
        '난소 건강을 유지하고 싶어',
        '난자 냉동 계획이 있어',
        '난임 시술 계획이 있어',
        '현재 시술을 하고 있어 (난자 냉동, 난임 시술)',
        '갱년기 준비와 관리를 하고 싶어',
      ],
    },
    {
      level: 3, //upbar에 표시할 단계
      questionType: 'Button_Selector', //해당 질문유형
      questionID: 'Q-Default3', //해당 질문코드
      questionTitle: '나는', //해당 질문제목
      count: 5, //선택지 개수
      contents: [
        //선택지 내용
        '결혼을 안 했어',
        '결혼을 했어',
        '임신 준비 중이야',
        '자녀가 있어',
        '임신 중이야',
      ],
    },
  ],
};
function reducer(state: any, action: any) {
  return state;
}

const DefaultPage = ({navigation, route}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const server_status = state.status;
  const pages = state.pages;

  // const onChange = useCallback(e => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value,s
  //   });
  // }, []);

  return (
    // <View style={DefaultStyle.container0}>
    //   <View style={DefaultStyle.container /* 컨테이너 스타일 */}>
    //     /* reducer로 컴포넌트 데이터에 따라 변경 */
    //   </View>
    // </View>
    <>
      <MyUpBar level={pages.level} />
      <GobackButton onPress={() => navigation.pop()} />

      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>나는</Text>
      </View>
    </>
  );
};
export default DefaultPage;
