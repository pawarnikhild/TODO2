import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

// import CustomCardContainer from "./CustomCardContainer";

const TaskCard = (props) => {
  return (
    // <CustomCardContainer>
    //   <Text>TaskCard</Text>
    // </CustomCardContainer>
    <TouchableOpacity style={{...styles.TaskCard, ...props.style}} onPress={() => {}}>
        <CustomCardContainer>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Study hard</Text>
          <Text>17-06-2022</Text>
          {/* <Text style={styles.date}>17-06-2022</Text> */}
        </View>
        <View style={styles.row1}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.IB}>
              <Icon
                style={styles.Icons}
                name="check-circle"
                size={35}
                color="green"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.IB}>
              <Icon
                style={styles.Icons}
                name="times-circle"
                size={35}
                color="red"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </CustomCardContainer>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  TaskCard: {
    // padding: 10,
    // width: '100%',
    // borderWidth: 2,
    // borderColor: "skyblue",
    borderRadius: 10,
    marginTop: 10,
    // alignItems: 'flex-start',
    // backgroundColor: 'skyblue',
    // backgroundColor: 'grey',
  },
//   View: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
  title: {
    fontSize: 22,
  },
  date: {
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row1: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  Icons: {
    alignSelf: "center",
    // margin: 5,
    marginTop: 5,
    marginLeft: 10
    // color: "green"
  },
});
