import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import {
  Notifications,
  Bookmark
} from '../../screens/'

import HomeNavigator from './HomeNavigator'
import ProfileNavigator from './ProfileNavigator'

export default TabNavigator(
    {
      Home: {
        screen: HomeNavigator,
        navigationOptions: {
          tabBarLabel: 'Início',
          tabBarIcon: ({ tintColor }) =>
          <Icon type='maturityComunityIcons' name='home' size={25} color={tintColor} />
        }
      },
      Bookmark: {
        screen: Bookmark,
        navigationOptions: {
          tabBarLabel: 'Salvos',
          tabBarIcon: ({ tintColor }) =>
          <Icon type='maturityComunityIcons' name='bookmark' size={25} color={tintColor} />
        }
      },
      Notifications: {
        screen: Notifications,
        navigationOptions: {
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ tintColor }) =>
            <Icon type='maturityComunityIcons' name='notifications' size={25} color={tintColor} />
        }
      },
      Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ tintColor }) =>
          <Icon type='maturityComunityIcons' name='person' size={25} color={tintColor} />
        }
      }
    },
    {
      lazy: true,
      tabBarOptions: {
        style: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
      }
    }
  )