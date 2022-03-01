import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './src/screens/home';
import Images from './src/constants/images';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      
        <HomeScreen></HomeScreen>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
