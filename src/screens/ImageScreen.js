import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>  {
    return <ScrollView >
        <ImageDetail
          style={{
            width: '100%'
          }}
          title="Ken" 
          imageSource={require('../../assets/orbits.png')} 
          story="One angry motherfucker and Ryu's twin brother, separated from birth."
          />
        <ImageDetail 
          title="Ryu" 
          imageSource={require('../../assets/ryu.jpeg')}
          story="Not to be confused with Ryu Hayabusa, the world famous ninja."
          />
        <ImageDetail 
          title="Blanka" 
          imageSource={require('../../assets/blanka.jpeg')}
          story="A beast-like man from Brazil, who, after a horrible discoloration, longs for a happier life."
          />
        <ImageDetail 
          title="Dhalsim" 
          imageSource={require('../../assets/dhalsim.jpeg')}
          story="A wise Yogi from India, who seeks to help his village home."
          />
    </ScrollView>
};


export default ImageScreen;

