import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './components/ContactList';
import AddNewContact from './components/AddNewContact';
import FavouriteContact from './components/FavouriteContact';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' component={ContactList} />
        <Stack.Screen name='AddNewContact' component={AddNewContact} />
        <Stack.Screen name='FavouriteContact' component={FavouriteContact}
           options={{
               headerShown :false   
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;