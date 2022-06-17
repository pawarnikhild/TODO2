import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import GlobalStyles from '../styles/GlobalStyles';
import TaskCard from '../components/TaskCard';

const CallAndTest = () => {
  return (
    <View style={GlobalStyles.appContainer}>
      <Text style={styles.title}>CallAndTest</Text>
      <TaskCard />
    </View>
  )
}

export default CallAndTest

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: 'center'
      },

})