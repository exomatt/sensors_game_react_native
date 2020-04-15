import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

function Item({ value, position }) {
  if (value === 'E' || (position === 0 && value === "S")) 
  return (
    <View style={styles.rectangle_egg}>
      <Text>Start</Text>
      <Image style={styles.egg} source={require("../assets/jajo.gif")} />
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
  const [array, setArray] = useState(["S",0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,"M"]);
  const [position, setPosition] = useState(0);
  const [data, setData] = useState({});

 useEffect(() => {
   _toggle();
 }, []);

 useEffect(() => {
   return () => {
     _unsubscribe();
   };
 }, []);

  useEffect(() => {
    move(data);
  }, [data]);

 const _toggle = () => {
   if (this._subscription) {
     _unsubscribe();
   } else {
     _subscribe();
   }
 };

 const _slow = () => {
   Accelerometer.setUpdateInterval(1000);
 };

 const _subscribe = () => {
    _slow();
   this._subscription = Accelerometer.addListener((accelerometerData) => {
    setData(accelerometerData);
   });
 };

 const _unsubscribe = () => {
   this._subscription && this._subscription.remove();
   this._subscription = null;
 };

 const move = (accelerometerData) => {
   let { x, y, z } = accelerometerData;
   newArray = array.slice();
   // left
   if (x > 0.60) {
     let newPosition = position - 1;
     if (newPosition >= 0) {
       if (newArray[newPosition] === 1) {
         newArray[newPosition] = "E";
         newArray[position] = 1;
         console.log(newArray);
         setPosition(newPosition);
         setArray(newArray);
       }
     }
   }
   // right
   else if (x < -0.60) {
     let newPosition = position + 1;
     if (newPosition <= 24) {
        if (newArray[newPosition] === 'M'){
            navigation.navigate("Result")
        }
       else if (newArray[newPosition] === 1) {
         newArray[newPosition] = "E";
         if (position === 0) {
           newArray[position] = "S";
         } else {
           newArray[position] = 1;
         }
         setPosition(newPosition);
         setArray(newArray);
       }
     }
   }
   // up
   else if (z > 0.60) {
     let newPosition = position - 4;
     if (newPosition >= 0) {
       if (newArray[newPosition] === 1) {
         newArray[newPosition] = "E";
         if (position === 0) {
           newArray[position] = "S";
         } else {
           newArray[position] = 1;
         }
         setPosition(newPosition);
         setArray(newArray);
       }
     }
   }
   // down
   else if (z < -0.60) {
     let newPosition = position + 4;
     if (newPosition <= 24) {
       if (newArray[newPosition] === 1) {
         newArray[newPosition] = "E";
         newArray[position] = 1;
         console.log(newPosition);
         console.log(newArray);
         setPosition(newPosition);
         setArray(newArray);
       }
     }
   }
 };
 let { x, y, z } = data;
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={({ item }) => <Item value={item} position={position} />}
        //Setting the number of column
        numColumns={4}
        keyExtractor={(item, index) => "" + index}
      />
      <View style={styles.sensor}>
        <Text style={styles.text}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
      </View>
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
