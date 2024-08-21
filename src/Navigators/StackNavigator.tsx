import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/HomeScreen';
import About from '../Screens/AboutScreen/AboutScreen';
import Contact from '../Screens/ContactScreen/ContactScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={Contact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
