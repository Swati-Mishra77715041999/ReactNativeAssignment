import 'react-native-gesture-handler';
import React from 'react';
import BudgetEntry from './components/BudgetEntry';
import BudgetList from './components/BudgetList';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName="BudgetEntry">
        <Tab.Screen
          name='BudgetEntry'
          component={BudgetEntry}
          options={{
            tabBarLabel: 'Add Budget',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            )
          }}
        />
          <Tab.Screen
          name='BudgetList'
          component={BudgetList}
          options={{
            tabBarLabel: 'Show Budget',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="eye" color={color} size={26} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;
