import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

const Q_A_2 = ({ navigation, route }) => {
  return (
      <>
      <MyUpBar_5/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>나는 아이를</Text>
          <Button
              title=" 갖고싶어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2_1')}
          />          
          <Button
              title=" 갖고 싶은 생각이 없어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_2_1')}
          />                          
      </View>
      </>
  );
};

export default Q_A_2;