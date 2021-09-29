import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Ryu', age: '28'},
        { name: 'Ken', age: '28'},
        { name: 'Guile', age: '27'},
        { name: 'Chun-Li', age: '25'},
        { name: 'Blanka', age: '25'},
        { name: 'E. Honda', age: '37'},
        { name: 'M.Bison', age: '35'},
        { name: 'Dhalsim', age: '99'},
        { name: 'Zangief', age: '46'},
        { name: 'Vega', age: '25'}

    ];
    return (
        <FlatList           
          keyExtractor={friend => friend.name}
          data={friends} 
          renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
          }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24

    }
});

export default ListScreen;