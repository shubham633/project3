import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { UserSchema } from '../database/UserSchema';
const Realm = require('realm');

const UserSignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => {
    try {
      if (name == '' || email == '' || password == '')
        alert('Please fill the details')
      else {

        Realm.open({ schema: [UserSchema] })
          .then(realm => {
            realm.write(() => {
              realm.create('User', {
                name: name,
                email: email,
                password: password,
              });
            });
          })
          .catch(error => {
            console.log(error);
          });
        Alert.alert('User Details Stores Sucessfully');

      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>User Signup</Text>

      <TouchableOpacity style={styles.btnSignin} onPress={() =>
        navigation.navigate('UserSignIn')}>
        <Text  style={styles.btnTextSignin}>Signin</Text>
      </TouchableOpacity>

      <TextInput placeholder='name' style={styles.textField}
      placeholderTextColor = 'gray'
        onChangeText={name => setName(name)} />

      <TextInput placeholder='email' style={styles.textField}
      placeholderTextColor = 'gray'
        onChangeText={email => setEmail(email)} />

      <TextInput placeholder='password' style={styles.textField}
      placeholderTextColor = 'gray'
        onChangeText={password => setPassword(password)} />

      <TouchableOpacity style={styles.btnSignup} onPress={createAccount}>
        <Text  style={styles.btnTextSignup}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSignup} onPress={() =>
        navigation.navigate('AdminSignUp')}>
        <Text style={styles.btnTextSignup}>Press for AdminSignup</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
   screenText:{
    color:'white',
    fontSize:30,
    marginBottom:25,
    fontWeight: 'bold',
    marginRight:'50%',
  },
   btnSignin:{
    marginBottom:10,
    backgroundColor:'red',
    borderRadius:5,
    height:30,
    width:'25%',
    marginLeft:200,
    alignItems: 'center',
  },
  btnTextSignin:{
    color:'white',
    fontWeight: 'bold',
    fontSize:20,
  },
   textField:{
    backgroundColor:'#2c2c2c',
    width:'90%',
    height:50,
    borderRadius:10,
    marginBottom:20,
    paddingLeft:10,
    color:'white',
    fontSize:20,
  },
  btnSignup:{
    backgroundColor:'red',
    width:'90%',
    marginTop:20,
    borderRadius:5,
    height:50,
    alignItems: 'center',
  },
   btnTextSignup:{
    color:'white',
    marginTop:15,
    fontWeight: 'bold',
    fontSize:15,
  },
});

export default UserSignUp;