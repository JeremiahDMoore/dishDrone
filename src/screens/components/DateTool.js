import React from 'react';
import moment from "moment";
import { Text, StyleSheet } from 'react-native';


class DateTool extends React.Component {
  state={
    time_create: moment().format('LTS'),
    abb_create: moment().format('dddd, L'),
    date_create: moment().format('dddd, MMMM Do YYYY')
  }
  render(){
    return (
      <Text style={styles.text}>
        {this.state.abb_create}
        {'\n'}  
        
      </Text>
    );
  }
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: "#fff",
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: 'black',
      
    },
  
    button: {
      backgroundColor: '#dedede',
      padding: 10,
      borderRadius: 10,
    }
  });

export default DateTool;