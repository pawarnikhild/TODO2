import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import SplashScreenView from '../../views/splash-screen/SplashScreenView';
const SplashScreen = ({ navigation }) => {
    useEffect(()=> {
        // setTimeout(()=> {
            navigation.replace('MainTab');            
        // }, 3000);
    }, []);
  return (
    <SplashScreenView />
  )
}

export default SplashScreen