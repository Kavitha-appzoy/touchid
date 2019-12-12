import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const MainNavigator = createStackNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    LoginScreen: {screen: LoginScreen},
});
const NavigationStack = createAppContainer(MainNavigator);

export default NavigationStack;