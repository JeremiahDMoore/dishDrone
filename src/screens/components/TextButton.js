import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TextButtton = () => {

  return (
    <View style={styles.button}>
        <TouchableOpacity style={styles.button}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "#fff",
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: 'red',
        textShadowColor: '#020202',
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 2
      },
    
      button: {
        backgroundColor: '#dedede',
        padding: 10,
        borderRadius: 10,
      },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 3
  },
  itemLeft: {    
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#ec1f47',
    opacity: 0.4,
    borderRadius: 2,
    marginRight: 15,
  },
  itemText: {
    fontWeight: "bold",
    maxWidth: '90%',
  },
  circular: {
    width: 12,
    height: 12,
    backgroundColor: '#ec1f47',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default TextButtton;