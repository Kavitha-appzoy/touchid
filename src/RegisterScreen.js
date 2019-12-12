import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

class RegisterScreen extends Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          //onPress={() => this.props.navigation.dispatch(resetAction) }
          onPress={this.clickHandler}
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
      </View>
    );
  }
  clickHandler() {
     const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
     });
    AsyncStorage.setItem('user', "true");
    this.props.navigation.dispatch(resetAction)
    
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

export default RegisterScreen;