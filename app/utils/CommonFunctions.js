import React, { useContext } from "react";
import { View, Text, Alert, ToastAndroid } from "react-native";

import TasksContext from "../context/TasksContext";

// console.log("Task", Tasks);
const showToast = () => {
  ToastAndroid.show("Task added successfully!", ToastAndroid.SHORT);
};

// Adding task to context Tasks
export const addTask = (task, date, Tasks) => {
  // const { Tasks } = useContext(TasksContext);
  let Id = Tasks.length;
  let Status = "";
  {
    if (task == "") {
      alert("Please write something");
    } else {
      // Calculating status
      const dateString = JSON.stringify(new Date());
      let todaysDate = dateString.substring(1, dateString.indexOf("T"));
      let taskDateString = JSON.stringify(new Date(date));
      let taskDate = taskDateString.substring(1, taskDateString.indexOf("T"));
      if (taskDate >= todaysDate) {
        Status = "pending";
      } else {
        Status = "overdue";
      }
      Tasks.push({ id: Id, name: task, deadLine: date, status: Status });
      // ()=>showToast(); // for web
      showToast(); // for mobile
      // return false;
    }
  }
};


// This function should be called on three screens P, C, O in useEffect and take Tasks,
// Status as parameter
export const sortTask = (Tasks, screen) => {
  console.log("screen in sortTask",screen)
  console.log("Tasks in sortTask", Tasks)
  let localTask = [];
  for (let i = 0; i < Tasks.length; i++) {
    switch (screen) {
      case "pending":
        localTask = Tasks.filter((obj) => obj.status == "pending");
        console.log('Switch pending')
        break;
      case "overdue":
        localTask = Tasks.filter((obj) => obj.status == "overdue");
        console.log('Switch overdue')
        break;
      case "complete":
        localTask = Tasks.filter((obj) => obj.status == "complete");
        console.log('Switch complete')
        break;
      default:
        console.log("Error in switch statement CommonFunctions!");
        break;
    }
    return localTask;
  }
  // console.log(Tasks);
  console.log('localTask', localTask)
};
