import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import PendingScreen from '../models/pending-screen/PendingScreen';
import CompletedScreen from '../models/completed-screen/CompletedScreen';
import OverdueScreen from '../models/overdue-screen/OverdueScreen';
import AddTaskScreen from '../models/add-task-screen/AddTaskScreen';

// const SubStackNavigation = () => {
//   return (
//     <View>
//       <Text>SubStackNavigation</Text>
//     </View>
//   )
// }

// export default SubStackNavigation

// const styles = StyleSheet.create({})

const PendingStack = createStackNavigator();
const CompletedStack = createStackNavigator();
const OverdueStack = createStackNavigator();

export function PendingStackFunction() {
    return (
        <PendingStack.Navigator>
            <PendingStack.Screen name="PendingScreen" component={ PendingScreen }/>
            <PendingStack.Screen name="AddTaskScreen" component={ AddTaskScreen }/>
        </PendingStack.Navigator>
    )        
}
export function CompletedStackFunction() {
    return (
        <CompletedStack.Navigator>
            <CompletedStack.Screen name="CompletedScreen" component={ CompletedScreen }/>
            <CompletedStack.Screen name="AddTaskScreen" component={ AddTaskScreen }/>
        </CompletedStack.Navigator>
    )        
}
export function OverdueStackFunction() {
    return (
        <OverdueStack.Navigator>
            <OverdueStack.Screen name="OverdueScreen" component={ OverdueScreen }/>
            <OverdueStack.Screen name="AddTaskScreen" component={ AddTaskScreen }/>
        </OverdueStack.Navigator>
    )        
}