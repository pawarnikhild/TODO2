import React, { useState, useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

import TasksContext from '../../context/TasksContext';
import { sortTask, removeTask } from '../../utils/CommonFunctions';

import PendingScreenView from '../../views/pending-screen/PendingScreenView'

// const PendingScreen = ({ navigation }) => { // Either we can use this ++++
const PendingScreen = ( props ) => {
  const { navigation } = props; // Or these two lines ****
  const isFocused = useIsFocused();
  const { Tasks, handleTasks } = useContext(TasksContext);
  const [pendingTask, setPendingTask] = useState([]);
  
  useEffect(() => {
    console.log('PedingScreen useEffect'); 
    // if(isFocused){
      // console.log("PendingScreen focused");
      // sortTask(Tasks, 'pending')
      let TempPendingTask = sortTask(Tasks, 'pending')
      setPendingTask(TempPendingTask);
      // setPendingTask(sortTask(Tasks, 'pending'));
    // }
  }, [Tasks.length]);

  const handleBtnPress = () => {
    // navigation.navigate('AddTaskScreen'); // Either we can use this ++++
    props.navigation.navigate('AddTaskScreen'); // Or these two lines ****
  }

  const currentRemoveTask = (id) => {
    removeTask(id, Tasks, handleTasks)
  }

  // console.log('Tasks in pendingScreen', Tasks)
  // console.log('pendingTask', pendingTask)

  return (
    <PendingScreenView
    // Tasks={Tasks}
    pendingTask={pendingTask}
    handleBtnPress={handleBtnPress}
    currentRemoveTask={currentRemoveTask}
    />
  )
}

export default PendingScreen