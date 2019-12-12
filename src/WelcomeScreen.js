import React, { Component } from 'react';
import {
  AlertIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
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
            {`SignIn`}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

//   clickHandler() {
    
//   }
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

export default WelcomeScreen;