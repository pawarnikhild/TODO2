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

// Removing task from context Tasks
export const removeTask = (id, Tasks, handleTasks) => {
  // let localTasks = Tasks;
  // console.log("localTasks before: ", localTasks);
  // console.log("Tasks before: ", Tasks)
  // var found = false;
  // for (var i = 0; i < Tasks.length; i++) {
  //   if (Tasks[i].id == id) {
  //     console.log("Id found");
  //     found = true;
  //     break;
  //   }
  // }
  // if (found == false) {
  //   console.log("Id not found");
  // } else {
  //   // Tasks.splice(i, 1);
  //   localTasks.splice(i, 1);
  //   console.log("localTasks after: ", localTasks);
  //   handleTasks(localTasks);
  // }
  // console.log("In removeTask after splicing Tasks", Tasks);
  // ------------------------------------------------------
  console.log("Tasks before: ", Tasks)
  const filteredTasks = Tasks.filter(i => i.id != id);
  if(filteredTasks) {
    // handleTasks(filteredTasks);
    manipulateTasksArray(filteredTasks, handleTasks)
    console.log("Task removed from Tasks")
  }
  console.log("Tasks after: ", Tasks)
};

// Changing ids of tasks after deltion of a task.
export const manipulateTasksArray = (filteredTasks, handleTasks) => {
  let localTasks = filteredTasks;
  for(let i = 0; i < localTasks.length; i++) {
    localTasks[i].id = i;
  }
  handleTasks(localTasks);
}

// This function should be called on three screens P, C, O in useEffect and take Tasks,
// Status as parameter
export const sortTask = (Tasks, screen) => {
  // console.log("screen in sortTask:", screen);
  // console.log("Tasks in sortTask", Tasks);
  let localTask = [];
  for (let i = 0; i < Tasks.length; i++) {
    switch (screen) {
      case "pending":
        localTask = Tasks.filter((obj) => obj.status == "pending");
        // console.log("Switch pending");
        break;
      case "overdue":
        localTask = Tasks.filter((obj) => obj.status == "overdue");
        // console.log("Switch overdue");
        break;
      case "complete":
        localTask = Tasks.filter((obj) => obj.status == "complete");
        // console.log("Switch complete");
        break;
      default:
        console.log("Error in switch statement CommonFunctions!");
        break;
    }
    return localTask;
  }
  // console.log(Tasks);
  // console.log("localTask", localTask);
};
