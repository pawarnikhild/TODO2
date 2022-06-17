import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import TasksContext from '../../context/TasksContext';
import { sortTask } from '../../utils/CommonFunctions';

import PendingScreenView from '../../views/pending-screen/PendingScreenView'

// const PendingScreen = ({ navigation }) => { // Either we can use this ++++
const PendingScreen = ( props ) => {
  const { navigation } = props; // Or these two lines ****
  const { Tasks, handleTasks } = useContext(TasksContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      sortTask(Tasks);
    }
  });
  const handleBtnPress = () => {
    // navigation.navigate('AddTaskScreen'); // Either we can use this ++++
    props.navigation.navigate('AddTaskScreen'); // Or these two lines ****
  }
  // console.log('Tasks in pendingScreen', Tasks)
  return (
    <PendingScreenView
    Tasks={Tasks}
    handleBtnPress={handleBtnPress}  
    />
  )
}

export default PendingScreen