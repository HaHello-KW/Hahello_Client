import React from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Touchable,
  SafeAreaView,
  TextBase,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

{
  /* <Text>aa{'\n'}</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text> */
}

const ProcedureInfo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <Text style={{fontSize: 16}}>시술정보</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProcedureInfo;
