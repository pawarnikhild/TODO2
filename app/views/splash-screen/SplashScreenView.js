import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles'

import SplashScreenStyle from '../../styles/splash-screen/SplashScreenStyle'
const SplashScreenView = () => {
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
        <StatusBar />
        <View style={SplashScreenStyle.pageContainer}>
            <Text style={SplashScreenStyle.splashText}>Welcome</Text>
            <Text style={SplashScreenStyle.splashText}>To</Text>
            <Text style={SplashScreenStyle.splashText}>TODO2 !!!</Text>
        </View>
    </SafeAreaView>
  )
}

export default SplashScreenView