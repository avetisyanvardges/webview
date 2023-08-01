import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { Styles } from "./style";

const GradientButton = ({ title, onPress }) => {
  const styles = Styles();
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[ '#110b61', '#6b0b65']} // Replace these colors with your desired gradient
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default GradientButton;
