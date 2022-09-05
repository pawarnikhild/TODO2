import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Dimension = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.title}>BoilerPlates</Text>
        <Text style={styles.subTitle}>BoilerPlates</Text>
        <Text style={styles.disabledText}>BoilerPlates are for reusing code and saving time and money</Text>
      </View>
    </View>
  )
}

export default Dimension

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,    
    backgroundColor: 'purple'
  },
  box: {
    flex: 1,
    backgroundColor: 'red'
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