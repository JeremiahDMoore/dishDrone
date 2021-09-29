import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const CounterScreen = () => {
   const [counter, setCounter] = useState(0);
    
    return (
        
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);                
            }} />
           
            <Text>Current Count: {counter}</Text>
            <ImageDetail 
                title="Ken" 
                imageSource={require('../../assets/dhalsim.jpeg')} 
                        />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;