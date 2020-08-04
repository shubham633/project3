import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor:'red',
    width:'80%',
    marginTop:40,
    borderRadius:5,
    height:50,
    padding: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Mybutton;