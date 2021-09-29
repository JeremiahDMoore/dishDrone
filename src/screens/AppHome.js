import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const WeatherConsole = () => {
    const ForecastCard = ({ navigation }) => {
        return (
            <TouchableOpacity style={styles.weatherConsoleStyle}  onPress={() => navigation.navigate('ImageScreen')} >
                  <Text style={styles.textStyle}>Thu{"\n"}8/12</Text>     
              </TouchableOpacity>
        );
    };
    return (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#446592', 
        
        marginLeft: 28,
        marginRight: 28,
        marginTop: 14,
        marginBottom: 14,
        borderRadius: 16, 
        shadowColor: "#446592",
        shadowOffset: {
            width: 4,
            height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49 }} 
    >
      <Text style={{ fontSize: 68, color: '#E3FCF9', marginLeft: 20, marginTop: 10, marginBottom: 35}}>Go Fly.</Text>
        <ScrollView style={{ marginBottom: 16 }}>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </ScrollView>
    </View>
    );
};

const AppHome = ({ navigation }) =>  {
    return (
        <View style={{ backgroundColor: '#E3FCF9', bottom: 0, flexGrow: 3}}>
            <WeatherConsole style={{ flex: 1 }}/> 

         <View style={styles.viewStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('CheckAirspace')} >
              <Text style={styles.buttonText}>Check Airspace</Text>     
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('NewMission')} >
              <Text style={styles.buttonText}>New Mission /{"\n"}End Mission</Text>     
          </TouchableOpacity>
          </View>
          
         <View style={styles.viewStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('FlightLog')} >
              <Text style={styles.buttonText}>Flight Log</Text>     
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('Settings')} >
              <Text style={styles.buttonText}>Settings</Text>     
          </TouchableOpacity>
         </View>
         <Text style={{ textAlign: 'center', marginBottom: 14, color: '#446592'}}>Copyright 2021 Aces Up Media</Text>
        </View>
    );      
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        margin: 5,
        flexDirection: 'row',
        color: '#446592'
    },
    buttonStyle: {
        elevation: 8,
        width: 160,
        height: 80,        
        margin: 4,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#4A89AC',
        flex: 1,
        shadowColor: "#446592",
        shadowOffset: {
        width: 4,
        height: 6,
    },shadowOpacity: 0.37,
    shadowRadius: 7.49,     
    },
    weatherConsoleStyle: {
        elevation: 8,        
        height: 80,        
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#ACE5F6',
        flex: 1
           
    },
    buttonText: {
        color: '#E3FCF9',
        fontSize: 18
    },
    viewStyle: {
        marginLeft:20,
        marginRight: 20,
        alignItems: 'center',
        flexDirection: 'row'
    }, 
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 2,
        flex: 1
    }
});

export default AppHome;

