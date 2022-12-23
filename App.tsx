import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text,Pressable,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Box,HStack } from "@react-native-material/core";
import MyUpBar_0 from './src/upbar/UpBar_0';
import MyUpBar_1 from './src/upbar/UpBar_1';
import MyUpBar_2 from './src/upbar/UpBar_2';

import Q_Home from './src/screens/default/home';
import Q_Default_1 from './src/screens/default/q_default_1';
import Q_Default_2 from './src/screens/default/q_default_2';
import Q_Default_3 from './src/screens/default/q_default_3';

import Q_A_1 from './src/screens/type_A/q_a_1'
import Q_A_1_1 from './src/screens/type_A/q_a_1_1'
import Q_A_2 from './src/screens/type_A/q_a_2'
import Q_A_2_1 from './src/screens/type_A/q_a_2_1'
import Q_A_2_2 from './src/screens/type_A/q_a_2_2'
import Q_A_2_3 from './src/screens/type_A/q_a_2_3'
import Q_A_3 from './src/screens/type_A/q_a_3'
import Q_A_4 from './src/screens/type_A/q_a_4'
import Q_A_4_1 from './src/screens/type_A/q_a_4_1'
import QA_TYPE from './src/screens/type_A/qa_type';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Q_Home} />
              <Stack.Screen name="Q_Default_1" component={Q_Default_1} />
              <Stack.Screen name="Q_Default_2" component={Q_Default_2} />
              <Stack.Screen name="Q_Default_3" component={Q_Default_3} />
              <Stack.Screen name="Q_A_1" component={Q_A_1} />
              <Stack.Screen name="Q_A_1_1" component={Q_A_1_1} />
              <Stack.Screen name="Q_A_2" component={Q_A_2} />
              <Stack.Screen name="Q_A_2_1" component={Q_A_2_1} />
              <Stack.Screen name="Q_A_2_2" component={Q_A_2_2} />
              <Stack.Screen name="Q_A_2_3" component={Q_A_2_3} />
              <Stack.Screen name="Q_A_3" component={Q_A_3} />

              <Stack.Screen name="Q_A_4" component={Q_A_4} />
              <Stack.Screen name="Q_A_4_1" component={Q_A_4_1} />
              <Stack.Screen name="QA_TYPE" component={QA_TYPE} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;