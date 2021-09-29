import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, story}) =>  {    
    return <View>
          <Text>{"\n"}</Text>
          <Image source={imageSource} />
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.textStyle}>{story}{"\n"}</Text>
          
        </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        margin: 12
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
        color: 'red',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
        
        
    }
});

export default ImageDetail;