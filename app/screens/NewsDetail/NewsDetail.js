import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon, Avatar } from 'react-native-elements'
import { Provider } from 'mobx-react'
import user from '../../models/User'

import { MContainer } from '../../components'

const news = {
  key: 1,
  title: 'Nathan Anderson',
  description: 'The idea with React Native Elements is more about component structure than actual design.',
  url: 'https://unsplash.com/photos/C9t94JC4_L8'
}

const comments = [
  // {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  // {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  // {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  // {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'},
  // {comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed orci augue. Integer placerat neque sollicitudin nibh auctor sodales. Sed.'}
]

export default class NewsDetail extends React.Component {
  render() {
    return (
      <MContainer scrollable>
        <Card
          title={this.props.navigation.state.params.title}
          image={{ uri: this.props.navigation.state.params.visual.url }}>
          <Text style={{ marginBottom: 20 }}>
            {this.props.navigation.state.params.summary}
          </Text>
          <View style={{ flexDirection: 'row', marginRight: 10, justifyContent: 'space-between' }}>
            <Text>Ler notícia completa</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => alert('bookmark')}>
                <Icon type='material-comunity' name='thumb-up' size={25} style={{marginRight: 20}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('bookmark')}>
                <Icon type='ionicon' name='ios-bookmark-outline' size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 15 }}>Comentários</Text>
          <Provider mainStore={user}>
            <View style={{ borderTopWidth: 0.5, paddingTop: 10, marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Avatar
                    small
                    rounded
                    source={{ uri: user.picture }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text>{user.name}</Text>
                    <Text>ás 18:33</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon type='material-community' name='thumb-up-outline' size={20} style={{ marginRight: 20 }} />
                  <Icon type='material-community' name='thumb-down-outline' size={20} />
                </View>
              </View>
              <Text>Cara, este livro é excelente.</Text>
            </View>
          </Provider>
        </Card>
      </MContainer>
    )
  }
}