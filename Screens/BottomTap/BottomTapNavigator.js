import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HealthScreen from '../Health/Health';
import EducationScreen from '../Education/Education';
import WelcomeScreen from '../Communication/Welcome';
import TrackingScreen from '../Tracking/Tracking';
// import HistoryScreen from '../Feeds/History';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = 'home';
          } else if (route.name === 'Tracking') {
            iconName = 'location-on';
          } else if (route.name === 'Health') {
            iconName = 'favorite';
          } else if (route.name === 'Education') {
            iconName = 'book';
          } 

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 15, // Increase label font size
        },
        tabBarIconStyle: {
          fontSize: 28, // Increase icon font size
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#FFE2E2',
          elevation: 70,
          shadowColor: 'white',
          shadowOpacity: 0.3,
          shadowRadius: 2,
          marginBottom: 30,
          borderRadius: 40,
        },
      })}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Health" component={HealthScreen} />
      <Tab.Screen name="Education" component={EducationScreen} />
      {/* <Tab.Screen name="History" component={HistoryScreen} /> Add the Feeds screen */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // Add your custom styles here
});

export default BottomTabNavigator;
