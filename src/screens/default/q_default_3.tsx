import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import MyUpBar_3 from '../../upbar/UpBar_3';

const Q_Default_3 = ({ navigation, route }) => {
  return (
    <>
    <MyUpBar_3/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
              나는
          </Text>
          <Button
              title=" 결혼을 안 했어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1')}
          />
          <Button
              title=" 결혼을 했어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1')}
          />                
          <Button
              title=" 임신 준비 중이야 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1')}
          />              
          <Button
              title=" 자녀가 있어 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1')}
          />          
          <Button
              title=" 임신 중이야 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_A_1')}
          />          
      </View>
      </>
  );
};

export default Q_Default_3;