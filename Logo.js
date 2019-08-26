import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar
  } from 'react-native';

   export default class Login extends Components<{}> {
   	render(){
    	return(
    		<View style={styles.container}>
             <Image  style={{width: 40, height:70}}
            source={require('../pictures/logo.png')}/>  
            <Text style={styles.logoText}>welsome to my app</Text>  
           </View>
    		)  
        }
    	
}

const styles = StyleSheet.create({
	container : {
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignIteams: 'center'
	},
	logoText : {
		fontSize:
	},
	logoText : {
		marginVertical: 15,
		fontSize: 18;
		color:'rgba(255, 255, 255, 0.7)'
	}
	})

