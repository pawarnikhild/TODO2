import React from 'react'
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button } from 'react-native'

import GlobalStyles from '../../styles/GlobalStyles';

const OverdueScreenView = (props) => {
  const { handleBtnPress } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar />
      {/* <Text style={PendingScreenStyle.heading}>PendingScreenView</Text> */}
      <ScrollView
        contentContainerStyle={GlobalStyles.scrollViewContentContainerAlt}
      >
        <View><Text>Text</Text></View>
        <Button
          title="Add a Task"
          onPress={() => handleBtnPress() }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default OverdueScreenView