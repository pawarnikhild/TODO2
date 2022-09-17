import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
} from "react-native";

import GlobalStyles from "../../styles/GlobalStyles";
import PendingScreenStyle from "../../styles/pending-screen/PendingScreenStyle";
import CustomCardContainer from "../../components/CustomCardContainer";
import TaskCard from "../../components/TaskCard";

const PendingScreenView = (props) => {
  const { pendingTask, handleBtnPress, currentRemoveTask } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar />
      {/* <Text style={PendingScreenStyle.heading}>PendingScreenView</Text> */}
      <ScrollView
        contentContainerStyle={GlobalStyles.scrollViewContentContainerAlt}
      >
        <View>
          {pendingTask == undefined || pendingTask.length < 0 ? (
            <Text>No Pending Tasks! Keep it up!</Text>
          ) : (
            pendingTask.map((item, index) => (
              <TaskCard
                key={index}
                name={item.name}
                deadLine={item.deadLine}
                style={PendingScreenStyle.TaskCard}
                onCross={() => currentRemoveTask(item.id)}
                // onCheck={}
              />
            ))
          )}

          {/* <FlatList /> */}
        </View>
        <Button title="Add a Task" onPress={() => handleBtnPress()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PendingScreenView;
