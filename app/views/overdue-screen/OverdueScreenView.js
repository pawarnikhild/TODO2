import React from 'react'
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button } from 'react-native'
import TaskCard from '../../components/TaskCard';

import GlobalStyles from '../../styles/GlobalStyles';
import OverdueScreenStyle from '../../styles/overdue-screen/OverdueScreenStyle';

const OverdueScreenView = (props) => {
  const { overdueTasks, handleBtnPress } = props;

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar />
      {/* <Text style={PendingScreenStyle.heading}>PendingScreenView</Text> */}
      <ScrollView
        contentContainerStyle={GlobalStyles.scrollViewContentContainerAlt}
      >
        <View>
        {
          overdueTasks == undefined || overdueTasks.length < 0 ? (
            <Text>No Overdue Tasks! Keep it up!</Text>
          ) : (
            overdueTasks.map((item, index) => (
              <TaskCard
                key={index}
                name={item.name}
                deadLine={item.deadLine}
                style={OverdueScreenStyle.TaskCard}
              />
            ))
          ) 
        }

        </View>
        <Button
          title="Add a Task"
          onPress={() => handleBtnPress() }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default OverdueScreenView