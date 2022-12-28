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
import Q_Default_2 from './src/screens/default/q_default_2';
import Q_Default_2and3 from './src/screens/default/q_default_2and3';
import Q_Default_2_1 from './src/screens/default/q_default_2_1';
import UserA from './src/screens/userA/test';

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
          name="Q_Default_2_1"
          component={Q_Default_2_1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserA"
          component={UserA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
