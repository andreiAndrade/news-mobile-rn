import React from 'react'
import { View, ImageBackground, Modal, WebView, Text } from 'react-native'
import { split } from 'lodash'
import { MButton } from '../../components'
import { colors } from '../../assets/styles'

import AuthService from '../../services/AuthService'

export default class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  feedlyAuthHandler(page) {
    if (page && page.url && page.url.includes('?code=') && !page.url.includes('callback')) {
      console.log(page.url)
      this.handleUrl(page.url)
      this.setState({ modalVisible: false })
      AuthService.fetchDatas().then(result => {
        this.props.navigation.navigate('SignedIn')
      }).catch(error => {
        alert(error)
      })
    }
  }

  handleUrl(url) {
    const queryParams = split(split(url, '?')[1], '&')
    const codeParam = split(queryParams[0], '=')[1]
    AuthService.token(codeParam)
    console.log(codeParam)
  }

  render() {
    return (
      <ImageBackground style={{
        flex: 1,
        width: null,
        height: null,
        flexDirection: 'row',
        alignItems: 'flex-end'
      }} source={{ uri: 'https://wallpaperscraft.com/image/newspaper_coffee_cup_spoon_sunglasses_news_cup_holder_84893_1920x1080.jpg' }}>
        <View style={{ flex: 1, marginBottom: 50 }}>
          <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { alert('Modal has been closed.') }}
          >
            <WebView
              onNavigationStateChange={(page) => this.feedlyAuthHandler(page)}
              source={{ uri: 'https://cloud.feedly.com/v3/auth/auth?client_id=feedly&redirect_uri=https://cloud.feedly.com/feedly.html&response_type=code&migrate=false&scope=https://cloud.feedly.com/subscriptions' }}
              style={{ marginTop: 20 }}
            />
            <View style={{
              backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, height: 70
            }}
            >
              <Text style={{ marginTop: 40, alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>News - Sua rede social de notícias</Text>
            </View>
          </Modal>
          <MButton title='ENTRAR' backgroundColor={colors.primary}
            onPress={() => this.setState({ modalVisible: true })}
          />
        </View>
      </ImageBackground >
    )
  }

}