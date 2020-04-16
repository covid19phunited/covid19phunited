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
import ForFrontlinersScreen from '../screens/ForFrontlinersScreen';

const Stack = createStackNavigator();

export default function ResourcesStackScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="For Frontliners" component={ForFrontlinersScreen} />
        <Stack.Screen name="Links" component={LinksScreen} />
        <Stack.Screen name="LGU Links" component={LGULinksScreen} />
      </Stack.Navigator>
  );
}