import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

import ColorContext from '../context/ColorContext';
// import TasksContext from '../context/TasksContext';
import TasksContext from '../context/TasksContext';
import PendingScreen from '../models/pending-screen/PendingScreen';
import CompleteScreen from '../models/completed-screen/CompletedScreen';
import SplashScreen from '../models/splash-screen/SplashScreen';
import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  const [ Tasks, setTasks ] = useState([]);

  const handleTasks =  (param) => {
    setTasks(param);
  }
  const [ colorMode, setColorMode ] = useState('NoColor');
  const handleColorMode = ( param ) => {
    setColorMode(param);
  }
  
  return (
    <ColorContext.Provider value={{colorMode, handleColorMode}}>
    <TasksContext.Provider value={{Tasks, handleTasks}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Splash' component={SplashScreen} />
          {/* <Stack.Screen name='Login' component={CompleteScreen} /> */}
          <Stack.Screen name='MainTab' component={MainTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </TasksContext.Provider>
    </ColorContext.Provider>
  )
}

export default MainStackNavigation