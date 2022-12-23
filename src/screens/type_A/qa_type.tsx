import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';

const QA_TYPE = ({ navigation, route }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>여유로운 똑똑이 유형</Text>
          <Button
              title=" 컨텐츠 추천 받기 "
              color="#F47100"
              onPress={() => navigation.navigate('QA_TYPE')}
          />          
          <Button
              title=" 나중에 할래요 "
              color="#F47100"
              onPress={() => navigation.navigate('QA_TYPE')}
          />  
          <Button
              title=" home으로 돌아가기 "
              color="#F47100"
              onPress={() => navigation.navigate('Home')}
          />                                                          
      </View>
  );
};

export default QA_TYPE;