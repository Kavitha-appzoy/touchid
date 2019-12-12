import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  AlertIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from "@react-native-community/async-storage";
import TouchID from "react-native-touch-id";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
  });
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDeviceSupportTouchId: null,
      fingerPrintCheck: null
    
    };
    this.clickHandler=this.clickHandler.bind(this);
    this.submit=this.submit.bind(this);
  }

  componentDidMount() {
    console.log("component did mount fn called")
    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ isDeviceSupportTouchId:biometryType });
      AsyncStorage.getItem("user").then((value) => {
        console.log("asyn have values ",value)
        if(value != null){
          this.setState({ fingerPrintCheck:true });
        }
       
    }).done();
    })

  }
  
  
  render() {
   

    return (
      <View style={styles.container}>
        <Text style={{
            color: '#566',
            fontWeight: '600'
          }}>
            {`LOGIN SCREEN`}
          </Text>
         <TouchableHighlight
          style={styles.btn}
          onPress={this.submit}
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
        {(this.state.isDeviceSupportTouchId  && this.state.fingerPrintCheck) ? <TouchableHighlight
          style={styles.btn}
          onPress={this.clickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Use FingerPrint`}
          </Text>
        </TouchableHighlight> : null }
      </View>
    );
  }
  submit(){
    
      const resetAction = StackActions.reset({
       index: 0,
       actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
      });
     AsyncStorage.setItem('user', "true");
     this.props.navigation.dispatch(resetAction)
     
  }
  clickHandler() {
    TouchID.isSupported()
      .then(authenticate=>{

        TouchID.authenticate()
                .then(success => {
            
                      //Authentication Success
                     this.props.navigation.dispatch(resetAction); 
                       // this.props.navigation.navigate('HomeScreen'); 
     
                       })
                        .catch(error => {
                          //Authentication failed
                        console.log(error)
                        AlertIOS.alert(error.message);
           });

            })      .catch(error => {
                          // device not supported fingerPrint
                      AlertIOS.alert('TouchID not supported');
            });
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

export default LoginScreen;