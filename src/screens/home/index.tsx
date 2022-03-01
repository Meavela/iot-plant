import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { View, StyleSheet, Image, Text } from 'react-native';
import Images from "../../constants/images";;

const HomeScreen = () => {    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.mainText}>Find the status of your plant here !</Text>
                <Image source={Images.plants} style={styles.mainImage}></Image>
                {SensorDisplay("humidity")}
                {SensorDisplay("temperature")}
            </View>
        </View>
        
    )
}

const SensorDisplay = (typeSensor) => {
    switch (typeSensor) {
        case "humidity":   
            var type = "%" 
            var value = parseInt('65')  
            if(value < 60){
                var state = Images.sadFace;
            }else{
                var state = Images.happyFace;
            }    
            break;
        case "temperature":
            var type = "°C" 
            var value = parseInt('15')   
            if(value > 21 || value < 18){
                var state = Images.sadFace;
            }else{
                var state = Images.happyFace;
            }        
            break;
        default:
            return "Unknown";
    }

    return (
        <View style={styles.contentSensor}>
            <Text style={styles.textSensor}>The {typeSensor} of your plant is : {value} {type}</Text>
            <Image source={state} style={styles.stateImage}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    
   stateImage:{
    width: 150,
    height: 100,
    marginRight: 'auto',
    marginLeft: 'auto'
   },
   contentSensor:{
       marginBottom: 50, 
   },
   mainImage:{
    width: '100%',
    height: 150,
    marginBottom: 20,
   },
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   
   },
   textSensor:{
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'roboto'
   },
   mainText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'roboto'
   },
   card:{
    backgroundColor: '#fff',
    opacity: .7,
    width: '90%',
    height: '70%',
    borderRadius: 10,
   }
});

export default HomeScreen
