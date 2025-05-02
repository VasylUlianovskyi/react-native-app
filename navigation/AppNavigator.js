import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home/HomeScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import GenderSelectionScreen from '../screens/Profile/GenderSelectionScreen'
import UploadPhotoScreen from '../screens/Upload/UploadPhotoScreen'
import Gallery from '../components/Galery'
import CropScreen from '../components/CropScreen'

const Stack = createStackNavigator()

export default function AppNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen
          name='GenderSelectionScreen'
          component={GenderSelectionScreen}
        />
        <Stack.Screen name='UploadPhoto' component={UploadPhotoScreen} />
        <Stack.Screen name='Gallery' component={Gallery} />
        <Stack.Screen name='CropScreen' component={CropScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
