import Reack from 'react';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';

const Q_Home = ({ navigation, route }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
              환영합니다, 하해호님!                
              <Text>
                  설문을 시작
              </Text>
          </Text>
          <Button
              title=" 시작하기 "
              color="#F47100"
              onPress={() => navigation.navigate('Q_Default_1')}
          />
          <Button
              title=" 나중에 할게요 "
              color="#F47100"
              onPress={() => alert('to the next')}
    />
      </View>
  );
};

export default Q_Home;