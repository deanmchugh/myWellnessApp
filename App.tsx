import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/components/home/Home';
import TaskScreen from './src/components/tasks/Tasks';
import SleepScreen from './src/components/sleep/Sleep';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        /*
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';
            if (route.name === 'Home') {
              iconName = focused ? 'house-circle' : 'house-circle-outline';
            } else if (route.name === 'Sleep') {
              iconName = focused ? 'chat-sleep' : 'chat-sleep-outline';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'calendar-check' : 'calendar-check-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{activeTintColor: 'green', inactiveTintColor: 'gray'}}*/>
        <Tab.Screen name="Sleep" component={SleepScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
