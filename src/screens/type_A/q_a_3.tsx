import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_6 from '../../upbar/UpBar_6';

const Q_A_3 = ({ navigation, route }) => {
  return (
    <>
    <MyUpBar_6/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>          
          <Text>나는 난자 냉동을</Text>
          <Button
              title=" 이미 해서 보관중이야 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_4')}
          />          
          <Button
              title=" 하지 않았지만, 관심 있어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_4')}
          />                          
          <Button
              title=" 하지 않았고,별로 관심 없어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_4')}
          />                          
          <Button
              title=" 잘 모르고 있어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_4')}
          />                          
      </View>
      </>
  );
};

export default Q_A_3;