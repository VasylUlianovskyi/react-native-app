import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home/Home'
import LoginScreen from '../screens/Auth/LoginScreen'
import GenderSelectionScreen from '../screens/Profile/GenderSelectionScreen'
import UploadPhotoScreen from '../screens/Upload/UploadPhotoScreen'
import Gallery from '../components/Galery'
import CropScreen from '../components/CropScreen'
import ResultScreen from '../screens/Profile/ResultsScreen'
import HomeScreen from '../screens/Profile/HomeScreen'
import TaskScreen from '../screens/Profile/TaskScreen'
import EditProfile from '../screens/Profile/EditProfile'
import MyProfile from '../screens/Profile/MyProfile'
import MyConnections from '../components/MyConnections'
import MyGallery from '../screens/Profile/MyGallery'
import PhotoViewer from '../components/PhotoViewer'
import Settings from '../screens/Profile/Settings'

const Stack = createStackNavigator()

export default function AppNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen
          name='GenderSelectionScreen'
          component={GenderSelectionScreen}
        />
        <Stack.Screen name='UploadPhoto' component={UploadPhotoScreen} />
        <Stack.Screen name='Gallery' component={Gallery} />
        <Stack.Screen name='CropScreen' component={CropScreen} />
        <Stack.Screen name='ResultScreen' component={ResultScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='TaskScreen' component={TaskScreen} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='MyProfile' component={MyProfile} />
        <Stack.Screen name='MyConnections' component={MyConnections} />
        <Stack.Screen name='MyGallery' component={MyGallery} />
        <Stack.Screen name='PhotoViewer' component={PhotoViewer} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
