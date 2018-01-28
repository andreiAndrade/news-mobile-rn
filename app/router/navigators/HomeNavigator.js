import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {
    Home,
    NewsDetail
} from '../../screens/'

const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export default StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    NewsDetail: {
      screen: NewsDetail,
      navigationOptions: {
        title: 'Resumo da Notícia',
        headerStyle
      }
    }
  }, {initialRouteName: 'Home'})