import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {
  Profile,
  ProfileDetails
} from '../../screens/'

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export default StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  ProfileDetails: {
    screen: ProfileDetails,
    navigationOptions: {
      title: 'Profile Details',
      headerStyle
    }
  }
}, { initialRouteName: 'Profile' })