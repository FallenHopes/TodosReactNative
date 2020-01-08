import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ListScreen from '../screens/ListScreen';
import AddScreen from '../screens/AddScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ListStack = createStackNavigator(
  {
    List: ListScreen,
  },
  config
);

ListStack.navigationOptions = {
  tabBarLabel: 'Список задач',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions:{
    activeTintColor: 'black'
  }
}

const AddStack = createStackNavigator(
  {
    Add: AddScreen,
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: 'Добавить новую',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
  tabBarOptions:{
    activeTintColor: 'black'
  }
}

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'О приложении',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  tabBarOptions:{
    activeTintColor: 'black'
  }
}

const tabNavigator = createBottomTabNavigator({
  ListStack,
  AddStack,
  SettingsStack,
})

export default tabNavigator;
