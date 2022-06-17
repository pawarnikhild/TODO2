import React from 'react'
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button } from 'react-native'

import GlobalStyles from '../../styles/GlobalStyles'
import PendingScreenStyle from '../../styles/pending-screen/PendingScreenStyle'
import CustomCardContainer from '../../components/CustomCardContainer';
import TaskCard from '../../components/TaskCard';

const PendingScreenView = (props) => {
  const { handleBtnPress, Tasks } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar />
      {/* <Text style={PendingScreenStyle.heading}>PendingScreenView</Text> */}
      <ScrollView
        contentContainerStyle={GlobalStyles.scrollViewContentContainerAlt}
      >
        <View>
          <Text>Text</Text>
          {Tasks.map((item, index) => (
            <TaskCard 
              
            
            />
            // <Text>{item.name}</Text>
          ))}
          <CustomCardContainer style={PendingScreenStyle.CustomCardContainer}>
            <Text>Nikhil Dipakkumar Pawar</Text>
          </CustomCardContainer>
        </View>
        <Button
          title="Add a Task"
          onPress={() => handleBtnPress() }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PendingScreenView