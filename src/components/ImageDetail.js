import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, story}) =>  {    
    return <View>
          <Text>{"\n"}</Text>
          <Image source={imageSource} style={{flex:1, alignSelf: 'center'}} resizeMode='contain'/>
        
          
        </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        margin: 12
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        padding: '3%',
        color: 'blue',
        textShadowColor: '#dedede',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3
        
        
    }
});

export default ImageDetail;