import React from 'react' ;
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textTwoStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
       
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row'

    },
    textOneStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 2,
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    }

});

export default BoxScreen;