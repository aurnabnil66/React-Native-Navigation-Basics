import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomtabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;

          if (route.name === 'MainStackNavigator') {
            iconName = 'home';
          } else if (route.name === 'ContactStackNavigator') {
            iconName = 'contacts';
          } else {
            iconName = 'questioncircleo';
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: 'lightblue'},
        tabBarLabelStyle: {fontSize: 12},
        tabBarShowLabel: true,
        headerShown: false,
      })}>
      <Tab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="ContactStackNavigator"
        component={ContactStackNavigator}
        options={{title: 'Contacts'}}
      />
    </Tab.Navigator>
  );
};

export {BottomtabNavigator};
