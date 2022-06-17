import React, { useState, useContext } from 'react'

import TasksContext from '../../context/TasksContext';
import AddTaskScreenView from '../../views/add-task-screen/AddTaskScreenView';
import { addTask } from '../../utils/CommonFunctions';

const AddTaskScreen = ({ navigation }) => {
  const { Tasks, handleTasks } = useContext(TasksContext);
  // const { Tasks } = useContext(TasksContext);
  // console.log('Task', Tasks);
  const [ task, setTask ] = useState('');
  const [ date, setDate ] = useState();
  const handleTask = (param) => {
    setTask(param);
  }
  // console.log('date', date)
  const handleDate = (param) => {
    setDate(param);
  }
  const currentAddTask = () => {
    addTask(task, date, Tasks);
  }
  const onCancel = () => {
    navigation.goBack();
  }

  // console.log('Model task', task);
  // console.log('Model date', date);
  // console.log('Task', Tasks);

  return (
    <AddTaskScreenView
      // Tasks={Tasks}
      // task={task}
      // date={date}
      handleTask={handleTask}
      handleDate={handleDate}
      currentAddTask={currentAddTask}
      // addTask={addTask}
      onCancel={onCancel}
    />
  )
}

export default AddTaskScreen