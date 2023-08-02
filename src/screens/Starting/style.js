import {StyleSheet} from "react-native";

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
      fontFamily: 'Montserrat-Regular',
      color: 'white',
      fontSize: 24,
      marginBottom: 20,
    },
    nameForm: {
      alignItems: 'center',
    },
    label: {
      fontFamily: 'Montserrat-Regular',
      color: 'white',
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      color:'white',
      padding: 8,
      paddingHorizontal: 12,
      fontSize: 16,
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 5,
      width: 250,
      marginBottom: 20,
      fontFamily: 'Montserrat-Regular',
    },
  })
}

export {Styles};
