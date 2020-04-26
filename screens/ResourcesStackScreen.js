import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LinksScreen from '../screens/LinksScreen';
import LGULinksScreen from '../screens/LGULinksScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

import CityScreen from '../screens/CityScreen';
import CityContactScreen from '../screens/CityContactScreen';
import OnlineServicesScreen from '../screens/OnlineServicesScreen';
import ForFrontlinersScreen from '../screens/ForFrontlinersScreen';

const Stack = createStackNavigator();

export default function ResourcesStackScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Links" component={LinksScreen} />
        <Stack.Screen name="LGU Links" component={LGULinksScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="City Contact" component={CityContactScreen} />
        <Stack.Screen name="Online Services" component={OnlineServicesScreen} />
        <Stack.Screen name="For Frontliners" component={ForFrontlinersScreen} />
      </Stack.Navigator>
  );
}