import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

const Q_A_1 = ({ navigation, route }) => {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>              
        <MyUpBar_4/>
          <Text>나는</Text>
          <Button
              title=" 결혼하고싶어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1_1')}
          />          
          <Button
              title=" 결혼 생각이 없어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2')}
          />          
          <Button
              title=" 아직 잘 모르겠어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2')}
          />          
      </View>   
      </>   
  );
};

export default Q_A_1;