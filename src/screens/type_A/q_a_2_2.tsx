import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

const Q_A_2_2 = ({ navigation, route }) => {
  return (
    <>
    <MyUpBar_5/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>나는</Text>
          <Button
              title=" 아이를 한명만 가지고 싶어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2_3')}
          />                
          <Button
              title=" 둘째도 가지고 싶어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2_3')}
          />                                    
      </View>
      </>
  );
};

export default Q_A_2_2;