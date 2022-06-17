import React from 'react'
import { View, Text } from 'react-native'

import OverdueScreenView from '../../views/overdue-screen/OverdueScreenView'

const OverdueScreen = ({ navigation }) => {
  const handleBtnPress = () => {
    navigation.navigate('AddTaskScreen');
  }
  return (
    <OverdueScreenView
    handleBtnPress={handleBtnPress}
    />
  )
}

export default OverdueScreen