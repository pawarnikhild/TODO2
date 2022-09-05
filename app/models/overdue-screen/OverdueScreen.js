import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

import TasksContext from '../../context/TasksContext';
import { sortTask } from '../../utils/CommonFunctions';

import OverdueScreenView from '../../views/overdue-screen/OverdueScreenView';

const OverdueScreen = ({ navigation }) => {
  const { Tasks } = useContext(TasksContext);
  const isFocused = useIsFocused();

  const [overdueTasks, setOverdueTasks] = useState([])
  
  useEffect(() => {
    console.log('OverdueScreen useEffect');
    let tempOverdueTasks = sortTask(Tasks, 'overdue');
    setOverdueTasks(tempOverdueTasks);
  }, [Tasks.length]);
  
  const handleBtnPress = () => {
    navigation.navigate('AddTaskScreen');
  }

  console.log('Tasks in overdueScreen', Tasks)
  console.log('overdueTasks', overdueTasks)
  return (
    <OverdueScreenView
      overdueTasks={overdueTasks}
      handleBtnPress={handleBtnPress}
    />
  )
}

export default OverdueScreen