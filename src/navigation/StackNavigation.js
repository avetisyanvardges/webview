import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import StartingScreen from "../screens/Starting";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Starting" component={StartingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
