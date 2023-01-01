import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Box, HStack} from '@react-native-material/core';
import MyUpBar_0 from './src/upbar/UpBar_0';
import MyUpBar_1 from './src/upbar/UpBar_1';
import MyUpBar_2 from './src/upbar/UpBar_2';

import Q_Home from './src/screens/default/home';
import Q_Default_1 from './src/screens/default/q_default_1';

import Q_Default_2and3 from './src/screens/default/q_default_2and3_layout';
import Q_Default_2_1 from './src/screens/default/q_default_2_1';
// <<<<<<< HEAD
import UserA from './src/screens/userA/q_a_1';
import Q_A_1 from './src/screens/userA/q_a_1';
import Q_A_2 from './src/screens/userA/q_a_2';
import Q_A_2_1 from './src/screens/userA/q_a_2_1';
import Q_A_3 from './src/screens/userA/q_a_3';
import Q_A_4 from './src/screens/userA/q_a_4';
import Q_A_4_1 from './src/screens/userA/q_a_4_1';
import Q_A_Type from './src/screens/userA/q_a_type';
import Q_Default_3 from './src/screens/default/q_default_3';
import BTEST from './src/screens/userA/BTEST';
import Q_Default_2 from './src/screens/default/q_default_2';

import WQ_1 from './src/screens/WQ/wq_1';
import WQ_2 from './src/screens/WQ/wq_2';
import WQ_3 from './src/screens/WQ/wq_3';
import WQ_4 from './src/screens/WQ/wq_4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Q_Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_Default_1"
          component={Q_Default_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_Default_2"
          component={Q_Default_2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Test"
          component={Q_Default_2and3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_Default_3"
          component={Q_Default_3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_Default_2_1"
          component={Q_Default_2_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_1"
          component={Q_A_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_2"
          component={Q_A_2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_2_1"
          component={Q_A_2_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_3"
          component={Q_A_3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_4"
          component={Q_A_4}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_4_1"
          component={Q_A_4_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Q_A_Type"
          component={Q_A_Type}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WQ_1"
          component={WQ_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WQ_2"
          component={WQ_2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WQ_3"
          component={WQ_3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WQ_4"
          component={WQ_4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//ggg
export default App;
