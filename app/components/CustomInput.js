import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AppColor, FontSize } from '../utils/StyleConstants'

const CustomInput = (props) => {
  return (
    // <View style={styles.inputContainer}>
      <TextInput 
        style={{...styles.textInput, ...props.style}}
        placeholder={props.placeholder}
        placeholderTextColor={AppColor.textDisabled}
        onChangeText={props.onChangeText}
      />
    // </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  inputContainer: {
    // borderColor: 'red',
    // height: 30,
    // backgroundColor: 'red'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: FontSize.Large,
    height: 40,

  },
})