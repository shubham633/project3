import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text,  TouchableOpacity} from 'react-native';

const AdminSignIn = ({navigation})=>
{
  const[useremail,setUserEmail]= useState('');
  const[userpassword,setUserPassword]= useState(''); 

return( 
    <View style={styles.container}>
      <Text style={styles.screenText}>Admin Signin</Text>

    <TouchableOpacity style={styles.btnSignup} 
    onPress={()=> navigation.navigate('AdminSignUp')}>
      <Text  style={styles.btnTextSignup}>Signup</Text>
    </TouchableOpacity>

    <TextInput placeholder='Email' style={styles.textField}
    placeholderTextColor = 'gray'
    onChangeText={useremail => setUserEmail(useremail)}/>

    <TextInput placeholder='Password' style={styles.textField}
    placeholderTextColor = 'gray'
    onChangeText={userpassword=> setUserPassword(userpassword) }/>

    <TouchableOpacity style={styles.btnSignin} 
     onPress={()=> navigation.navigate('DashBoard')}>
      <Text style={styles.btnTextSignin}>SignIn</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnSignin} 
    onPress={()=> navigation.navigate('UserSignIn')}>
      <Text style={styles.btnTextSignin}>Press for UserSignIn</Text>
    </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'black',
  },
   screenText:{
    color:'white',
    fontSize:30,
    marginBottom:40,
    fontWeight: 'bold',
    marginRight:'50%',
  },
   btnSignup:{
    marginBottom:20,
    backgroundColor:'red',
    borderRadius:5,
    height:30,
    width:'25%',
    marginLeft:200,
    alignItems: 'center',
  },
   btnTextSignup:{
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
   btnSignin:{
    backgroundColor:'red',
    width:'90%',
    marginTop:20,
    borderRadius:5,
    height:50,
    alignItems:'center',
  },
   btnTextSignin:{
    color:'white',
    marginTop:15,
    fontWeight: 'bold',
    fontSize:20,
  },
});

export default AdminSignIn;