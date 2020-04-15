import React, { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Accelerometer } from "expo-sensors";

const Result = ({ navigation }) => {
  return (
    <View>
    <Text>Win!!!!!</Text>
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
});

export default Result;
