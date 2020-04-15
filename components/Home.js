import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button
                mode="contained"
                style={styles.btn}
                onPress={() =>
                    navigation.navigate('Game')
                }>
                Start game
            </Button>
        </View>
    )
};
const styles = StyleSheet.create({
    btn: {
        padding: 15,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default Home;