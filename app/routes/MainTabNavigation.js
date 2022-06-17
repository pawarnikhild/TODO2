import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppColor, FontFamily, FontSize } from "../utils/StyleConstants";
import { Icon } from "react-native-elements";

import { PendingStackFunction, CompletedStackFunction, OverdueStackFunction } from './SubStackNavigation'
import PendingScreen from "../models/pending-screen/PendingScreen";
import CompletedScreen from "../models/completed-screen/CompletedScreen";
import OverdueScreen from "../models/overdue-screen/OverdueScreen";

const MainTabNavigation = () => {
  // const Tab = createBottomTabNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
    {/* <NavigationContainer> */}
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIconStyle: styles.tabBarIcon,
          tabBarLabelStyle: styles.tabBarLabel,
          // tabBarActiveTintColor: AppColor.primary,
          // tabBarInactiveTintColor: AppColor.textDisabled,
          tabBarIndicatorStyle: { color: 'red'},
          // tabBarIndicatorStyle​: styles.tabBarIndicator,
        }}
      >
        <Tab.Screen
          name="Pending"
          component={PendingStackFunction}
          options={{
            title: "Pending",
            // tabBarIcon: () => { <Icon name="clock" type="material-community" /> },
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name={focused ? "clock-time-eight" : "clock-time-four-outline"} type="material-community" color="#f5d856" size={36} />
            ),
            // unmountOnBlur: true,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen 
          name="Completed" 
          component={CompletedStackFunction}
          options={{
            title: "Completed",
            // tabBarIcon: () => { <Icon name="clock" type="material-community" /> },
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name={focused ? "check-circle" : "check-circle-outline"} type="material-community" color="green" size={36} />
            ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen 
          name="Overdue"
          component={OverdueStackFunction}
          options={{
            title: "Overdue",
            // tabBarIcon: () => { <Icon name="clock" type="material-community" /> },
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name={focused ? "clock-alert" : "clock-alert-outline"} type="material-community" color="red" size={36} />
            ),
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    {/* </NavigationContainer> */}
    </>
  );
};

export default MainTabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    // height: 52,
    // backgroundColor: 'red'
    
  },
  tabBarIcon: {
    // marginTop: -10,
    marginVertical: -4,
    height: 36,
    width: 36,
  },
  tabBarLabel: {
    fontSize: FontSize.Default,
    // marginVertical: -4,
    // marginTop: -3
  },
  tabBarIndicator: {
    // backgroundColor: 'red'
  },
});
