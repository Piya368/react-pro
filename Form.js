import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
  } from 'react-native';

   export default class Login extends Components<{}> {
   	render(){
    	return(
    		<View style={styles.container}> 
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor = "#ffffff"
               /> 
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
               /> 
               <TouchableOpacity>
               <Text style={styles.buttonText)> Login </Text>
               </TouchableOpacity>
           </View>
    		)  
    }
    	
}

const styles = StyleSheet.create({
	container : {
		flexGrow: 1,
		justifyContent: 'center',
		alignIteams: 'center'
	  },

    inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12
    }
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff'
    }	
	})

