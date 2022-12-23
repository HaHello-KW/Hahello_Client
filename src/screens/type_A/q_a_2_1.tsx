import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

const Q_A_2_1 = ({ navigation, route }) => {
  return (
    <>
    <MyUpBar_5/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>나는 ?살에 첫째 아이를 갖고 싶어</Text>
          <Button
              title=" 다음 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2_2')}
          />                                    
      </View>
      </>
  );
};

export default Q_A_2_1;