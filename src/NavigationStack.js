import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    LoginScreen: {screen: LoginScreen},
    RegisterScreen:{screen:RegisterScreen},
    HomeScreen: {screen:HomeScreen}
});
const NavigationStack = createAppContainer(MainNavigator);

export default NavigationStack;