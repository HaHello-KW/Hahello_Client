import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_7 from '../../upbar/UpBar_7';

const Q_A_4_1 = ({ navigation, route }) => {
  return (
    <>
    <MyUpBar_7/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>나는 생리일이</Text>
          <Button
              title=" 규칙적이야 "
              color="#F47100"
              onPress={() => navigation.navigate('QA_TYPE')}
          />          
          <Button
              title=" 불규칙적이야 "
              color="#F47100"
              onPress={() => navigation.navigate('QA_TYPE')}
          />                                                          
      </View>
      </>
  );
};

export default Q_A_4_1;