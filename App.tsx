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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Q_Home} />
              <Stack.Screen name="Q_Default_1" component={Q_Default_1} />
              <Stack.Screen name="Q_Default_2" component={Q_Default_2} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;