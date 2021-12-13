import React from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const tipOfTheDay = ["Check your weather everyday, and watch the wind forecast", 
"Log into the NOC online easier by creating a shortcut on your home screen", 
"If you can't access your laptop at a site, you can use your drone controller to review photos from the SD card", 
"Manage your batteries wisely and plan for the tallest towers first on your daily route", 
"Always drive the speed limit and obey all traffic laws", 
"Make sure you always double check your travel information: Hotels, Flights, Rental Cars (should be 4x4)", 
"Remember GOAL : 'Get Out And Look' when parking in tight spots", 
"Always make sure you have your Take Off and Landing Points carefully considered. Most drone crashes happen when landing",
"Take advantage of good internet by uploading as many sites as you can",
"Plan ahead for sites that are on private property in case there are access issues: get business hours and contact info from Nexus One and Google Maps",
"Keep a log of your uploads and always back-up to your external SSD after uploading",
"Pizza can be delicious but please eat it later"];

function ImageScreen() {
    return (
    
      <ScrollView style='padding: 5%'>
     
        <Text style={styles.text}>
          {tipOfTheDay[Math.floor(Math.random() * tipOfTheDay.length)]}
        </Text>
       
        <ImageDetail
          imageSource={require('../../assets/orbits-small.png')}
        />
       

    </ScrollView>);
  }

  const styles = StyleSheet.create({
    text: {
      backgroundColor: "#fff",
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      padding: '5%',
      color: 'black',
     
    },
  
    button: {
      backgroundColor: '#dedede',
      padding: 10,
      borderRadius: 10,
    }
  });

export default ImageScreen;

