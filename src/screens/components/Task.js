import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
       
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#504D56',
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
    color: '#fff',
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

export default Task;