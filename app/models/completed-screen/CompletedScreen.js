import React from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import CompletedScreenView from '../../views/completed-screen/CompletedScreenView'

const CompletedScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const handleBtnPress = () => {
    navigation.navigate('AddTaskScreen');
  }

  return (
    <CompletedScreenView
      isFocused={isFocused}
      handleBtnPress={handleBtnPress}
    />
  )
}

export default CompletedScreen