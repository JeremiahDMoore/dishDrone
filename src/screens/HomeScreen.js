import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";
import DateTool from "./components/DateTool";

import ImageScreen from "./ImageScreen";

const HomeScreen = ({ navigation }) => {
  
  return (
  
<ScrollView style={styles.text}>
    
    <ImageDetail      
      imageSource={require('../../assets/dish-drone-logo-small.png')}
                />

    <DateTool/>
   
    <Text> </Text>

    <Button
      color="#555"
      onPress={()=> navigation.navigate('MonopoleChecklist')}
      title="Monopole/SST PreCX"
    />
    <Text> </Text>
    <Button
      color="#555"
      onPress={()=> navigation.navigate('MonopolePost')}
      title="Monopole/SST PostCX"
    />
   <Text> </Text>
    <Button 
      color="#555"
      onPress={()=> navigation.navigate('GuyedChecklist')}
      title="Guyed Tower PreCX and PostCX"
    /> 
    <Text> </Text>   
    <Button 
      color="#555"
      onPress={()=> navigation.navigate('Image')}
      title="Tip of the Day"
    />    

    </ScrollView>
    
    );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#fff",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
    textShadowColor: '#020202',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2
  },

  button: {
    backgroundColor: '#dedede',
    padding: 10,
    borderRadius: 10,
  }
});

export default HomeScreen;


