import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar
  } from 'react-native';

  import Logo from '../components/Logo';
  import Form from '../components/Form';

  export default class Login extends Components<{}> {
    render(){
    	return(
             <View style={styles.container}> 
               <Logo/>
               <Form/>
               <View style={styles.signupTextCount}>
                  <Text style={styles.signupText}>Dont have account yet? </Text>
                  <Text style={style.signupButton}> Signup </Text>
               </View>
             </View>
    		)
    }

  }

  const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical:16,
    flexDirection:'row'
  },
  signupText: {
     color:'rgba(255,255,255,0.7)',
     fontSize:16,
 },
  signupButton{
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'

}
});