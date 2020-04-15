import React from "react";
import {  Button } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
const Result = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Win!!!!!</Text>
      <Button
        mode="contained"
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        Restart
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    padding: 15,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontSize: 20,
    textAlign: "center",
  },
});

export default Result;
