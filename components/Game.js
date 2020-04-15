import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, FlatList, Image } from "react-native";

function Item({ value, position }) {
  console.log(value);
  if (value === 'E' || (position === 0 && value === "S")) 
  return (
      <View style={styles.rectangle_egg}>
        <Image style={styles.egg} source={require('../assets/jajo.gif')} />
      </View>
    );
  else if (value === "S")
    return (
      <View style={styles.rectangle_green}>
        <Text>Start</Text>
      </View>
    );
  else if (value === "M")
    return (
      <View style={styles.rectangle_green}>
        <Text>Meta</Text>
      </View>
    );
  else if (value === 1)
    return <View style={styles.rectangle_green} />;
  else return <View style={styles.rectangle_red} />;
}

const Game = ({ navigation }) => {
  const [array, setArray] = useState([]);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    setPosition(0);
    let data = [
      "S",
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      "M",
    ];
    setArray(data);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={({ item }) => <Item value={item} position={position}/>}
        //Setting the number of column
        numColumns={4}
        keyExtractor={(item) => item.id}
      />
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
  rectangle_red: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 3,
  },
  rectangle_green: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 3,
  },
  rectangle_egg: {
    width: 100,
    height: 100,
    backgroundColor: "#9fed0e",
    margin: 3,
  },
  egg: {
    width: 100,
    height: 100,
    margin: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#666464",
  },
});

export default Game;
