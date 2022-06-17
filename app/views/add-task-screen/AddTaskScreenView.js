import React from 'react'
import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'

import GlobalStyles from '../../styles/GlobalStyles';
import { AppColor } from '../../utils/StyleConstants';
import AddTaskScreenStyle from '../../styles/add-task-screen/AddTaskScreenStyle';

import CustomInput from '../../components/CustomInput';
import DatePicker from '../../components/DatePicker';
import CustomButton from '../../components/CustomButton';

const AddTaskScreenView = (props) => {
  const { task, date, handleTask, handleDate, currentAddTask, onCancel } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar />
      {/* <Text>AddTaskScreenView</Text> */}
      <ScrollView >
        <Text style={AddTaskScreenStyle.heading}>Add a Task</Text>
        <CustomInput style={AddTaskScreenStyle.textInput} placeholder='ex. Cleaning room' onChangeText={handleTask}/>
        <DatePicker handleDate={handleDate} />
        <View style={AddTaskScreenStyle.row}>
          <CustomButton style={AddTaskScreenStyle.button} title='Confirm' color={AppColor.primary} onPress={currentAddTask} />
          <CustomButton style={AddTaskScreenStyle.button} title='Cancel' color={AppColor.primary} onPress={onCancel}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddTaskScreenView