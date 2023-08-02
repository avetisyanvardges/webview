import React, { useState } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import { Styles } from "./style";
import GradientButton from "../../components/Button/GradientButton";
import { navigate } from "../../navigation/RootNavigation";

const StartingScreen = () => {
  const styles = Styles();

  const [name, setName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleStartGame = () => {
    if(name.trim().length === 0){
      setIsEmpty(true);
    }else{
    console.log('The game is running...');
    navigate('SlotGame', {name});
    }
  };


  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WebView</Text>
      <View style={styles.nameForm}>
        <Text style={styles.label}>Enter Your Name:</Text>
        {isEmpty ? <Text style={{color: 'red', fontFamily: 'Montserrat-Regular'}}>Please fill the field!</Text> : null}
        <TextInput
          style={isEmpty ? [styles.input, {borderColor: 'red'}] : styles.input}
          placeholder="Your Name"
          placeholderTextColor={!isEmpty ? "white" : 'red'}
          onChangeText={text => setName(text)}
          value={name}
        />
        <GradientButton title="Start Game" onPress={handleStartGame} />
      </View>
    </View>
    </ImageBackground>
  );
};

export default StartingScreen;
