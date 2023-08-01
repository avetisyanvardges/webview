import React from 'react';
import { View, Text, TextInput, ImageBackground } from "react-native";
import { Styles } from "./style";
import GradientButton from "../../components/Button/GradientButton";

const StartingScreen = () => {
  const handleStartGame = () => {
    console.log('Start Game');
  };

  const styles = Styles();
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WebView</Text>
      <View style={styles.nameForm}>
        <Text style={styles.label}>Enter Your Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor={"white"}
        />
        <GradientButton title="Start Game" onPress={handleStartGame} />
      </View>
    </View>
    </ImageBackground>
  );
};

export default StartingScreen;
