import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default CustomCardContainer = props => {
  return (
    <View style={{...styles.CustomCardContainer, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  CustomCardContainer: {
    // width: '100%'
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    // shadowColor: 'black',
    // shadowOffset: { width: 20, height: 20 },
    // shadowRadius: 0,
    // shadowOpacity: 0,
    // backgroundColor: 'white',
    elevation: 5,
  },
});
