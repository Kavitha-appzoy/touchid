import React, { Component } from 'react';
import {
  AlertIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {encryptPassword,decryptPassword} from './PasswordOperation'

class WelcomeScreen extends Component {
  componentDidMount(){
   let encrypted =  encryptPassword("Kavitha")
   let userPassword = decryptPassword(encrypted)
    console.log("the userPassword is ",userPassword)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
            color: '#566',
            fontWeight: '600'
          }}>
            {`WELCOME SCREEN`}
          </Text>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Register`}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Login`}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }


 } 





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btn: {
    borderRadius: 3,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7'
  }
});

export default WelcomeScreen;