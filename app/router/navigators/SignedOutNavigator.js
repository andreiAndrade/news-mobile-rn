import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {
    SignIn,
    SignUp,
    FillPassword,
    Welcome
} from '../../screens/'

const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export default StackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up',
            headerStyle
        }
    },
    FillPassword: {
        screen: FillPassword,
        navigationOptions: {
            title: 'Fill Password',
            headerStyle
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In',
            headerStyle
        }
    }
}, { initialRouteName: 'Welcome' })