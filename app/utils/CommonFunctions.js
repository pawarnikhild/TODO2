import React, { useContext } from "react";
import { View, Text, Alert, ToastAndroid } from "react-native";

import TasksContext from "../context/TasksContext";

// console.log("Task", Tasks);
const showToast = () => {
  ToastAndroid.show("Task added successfully!", ToastAndroid.SHORT);
};

export const addTask = (task, date, Tasks) => {
  // const { Tasks, handleTasks } = useContext(TasksContext);
  let Id = 0;
  {
    if (task == "") {
      alert("Please write something");
    } else {
      Tasks.push({ id: Id, name: task, deadLine: date, status: '' });
      Id++;
      // ()=>showToast(); // for web
      showToast(); // for mobile      
      // return false;
    }
  }
  sortTask(Tasks);
};

export const sortTask = (Tasks) => {
  const dateString = JSON.stringify(new Date);
  let todaysDate = dateString.substring(1, dateString.indexOf('T'));
  for( let i = 0; i < Tasks.length; i++){
    let taskDateString = JSON.stringify(new Date(Tasks[i].deadLine));
    let taskDate = taskDateString.substring(1, taskDateString.indexOf('T'));
    if(taskDate >= todaysDate) {
      Tasks[i].status = 'Pending';
    }else {
      Tasks[i].status = 'Overdue';
    }
  }
  // console.log(Tasks);
}
