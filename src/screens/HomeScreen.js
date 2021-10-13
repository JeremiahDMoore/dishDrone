import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  
  return (
  <View>
    <Text style={styles.text}>DISH drone</Text>
    <Button
      onPress={()=> navigation.navigate('MonopoleChecklist')}
      title="Monopole/SST Checklist"
    />
    <Button 
      onPress={()=> navigation.navigate('GuyedChecklist')}
      title="Guyed Tower Checklist"
    />    
    <Button 
      onPress={()=> navigation.navigate('HotSpotChecklist')}
      title="HotSpot Checklist"
    />
    <Button 
      onPress={()=> navigation.navigate('Image')}
      title="Example Photos"
    />
    <Button 
      onPress={()=> navigation.navigate('Square')}
      title="SQUARE"
    />
    <Button 
      onPress={()=> navigation.navigate('OnBoarding')}
      title="OnBoarding Demo"
    />
    <Button 
      onPress={()=> navigation.navigate('Index')}
      title="FLIGHT LOG SCREEN"
    />
    <Button 
      onPress={()=> navigation.navigate('AppHome')}
      title="APP HOME"
    />
    </View>
    
    );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10
  }
});

export default HomeScreen;


