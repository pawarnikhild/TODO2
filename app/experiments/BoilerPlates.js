import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoilerPlates = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoilerPlates</Text>
      <Text style={styles.subTitle}>BoilerPlates</Text>
      <Text style={styles.disabledText}>BoilerPlates are for reusing code and saving time</Text>
    </View>
  )
}

export default BoilerPlates

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
  },
  subTitle: {
    fontSize: 28,
  },
  disabledText: {
    fontSize: 16
  },
})