import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from '../BottomNav/AboutUs';
import Skills from '../BottomNav/Skills';
import Projects from '../BottomNav/Projects';
import Company from './Education';
import {NavigationContainer} from '@react-navigation/native';
import Briefinfo from './Briefinfo';

const Bottom = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator initialRouteName="Brief Info">
        <Bottom.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="Skills"
          component={Skills}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="Brief Info"
          component={Briefinfo}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="Project"
          component={Projects}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="Company"
          component={Company}
          options={{headerShown: false}}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
