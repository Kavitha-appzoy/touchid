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
import TouchID from "react-native-touch-id";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
  });
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      biometryType: null
    };
    this.clickHandler=this.clickHandler.bind(this);
    
  }

  componentDidMount() {
    
    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ biometryType });
    })
  }

  render() {
   

    return (
      <View style={styles.container}>
         <TouchableHighlight
          style={styles.btn}
          onPress={()=>this.props.navigation.dispatch(resetAction)}
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
        <TouchableHighlight
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
        </TouchableHighlight>
      </View>
    );
  }

  clickHandler() {
    TouchID.isSupported()
      .then(authenticate=>{

        TouchID.authenticate()
                     .then(success => {
            
        
                     this.props.navigation.dispatch(resetAction); 
                       // this.props.navigation.navigate('HomeScreen'); 
     
                       })
                        .catch(error => {
                        console.log(error)
                        AlertIOS.alert(error.message);
           });

            })      .catch(error => {
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
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7'
  }
});

export default LoginScreen;