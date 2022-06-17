import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, Button,  } from 'react-native'

const StateExperiment = () => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(0);
    const [array, setArray] = useState([]);

    const stateHnadler = () => {
        setState(1);
        // console.log('state in stateHandler', state)
    }
    const state1Handler = (state) => {
      console.log('state in state1Handler', state)
      setState1(1 + state);
      // console.log('state1 in stateHandler', state)
    }
    function changeStateBadWay() {
      // state1 = 10;
      // setArray(['nikhil', 1]);
      array.push(7);
    }
    function combined() {
      stateHnadler();
      state1Handler(state);
      changeStateBadWay();
    }

    console.log('state outside stateHandler', state);
    console.log('state1 outside stateHandler', state1);
    console.log('array ',array);
  return (
    <View>
      <StatusBar />
      <Text style={styles.heading}>State Experiments</Text>
      {/* {console.log('state before function call', state)} */}
      <Button title="Change state" onPress={combined}/>
      {/* {console.log('state after function call', state)} */}
    </View>
  )
}

export default StateExperiment;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
});