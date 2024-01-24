import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screen/Home/Home';
import AboutUs from '../Screen/About/AboutUs';
import Briefinfo from './BottomNav/Briefinfo';
import Projects from './BottomNav/Projects';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Briefinfo">
        <Stack.Screen name="About" component={AboutUs} />
        <Stack.Screen
          name="Briefinfo"
          component={Briefinfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Projects"
          component={Projects}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
