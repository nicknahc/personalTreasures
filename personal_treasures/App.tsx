// src/App.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/theme';
import Navbar from './src/components/common/Navbar';
import HomeScreen from './src/components/screens/HomeScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };
const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navbar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Hide the default header for the HomeScreen
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // Hide the default header for the LoginScreen
          />
          { <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }} // Hide the default header for the LoginScreen
          /> }
          {/* Add other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
