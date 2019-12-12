import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.logout=this.logout.bind(this);
  }
  render() {
    
    return (
      <View style={styles.container}>
      <Text style={{
            color: '#566',
            fontWeight: '600'
          }}>
            {`DASHBOARD`}
          </Text>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.logout}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Logout`}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  logout()
{
  AsyncStorage.removeItem('user');
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
  });  
   this.props.navigation.dispatch(resetAction)
}
 } 





const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7'
  }
});

export default HomeScreen;