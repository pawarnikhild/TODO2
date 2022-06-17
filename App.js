import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import MainStackNavigation from './app/routes/MainStackNavigation';
// -------------------------------------------------------------------
import SplashScreen from './app/models/splash-screen/SplashScreen';
import SplashScreenView from './app/views/splash-screen/SplashScreenView';
import MainTabNavigation from './app/routes/MainTabNavigation';
import AddTaskScreen from './app/models/add-task-screen/AddTaskScreen';
import DatePicker from './app/components/DatePicker';
import StateExperiment from './app/experiments/StateExperiment';
import CallAndTest from './app/experiments/CallAndTest';

export default function App() {
  return (
    // <MainStackNavigation />
    
    // <SplashScreen />
    // <SplashScreenView />
    // <MainTabNavigation />
    // <AddTaskScreen />
    // <DatePicker/>
    // <StateExperiment />
    <CallAndTest />
  );
}