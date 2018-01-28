import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { Provider } from 'mobx-react'
import feed from '../../models/Feed'

import { MContainer } from '../../components'

const news = [
  {
    key: 1,
    title: 'Nathan Anderson',
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    url: 'https://unsplash.com/photos/C9t94JC4_L8'
  },
  {
    key: 2,
    title: 'Jamison McAndie',
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    url: 'https://unsplash.com/photos/waZEHLRP98s'
  },
  {
    key: 3,
    title: 'Alberto Restifo',
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    url: 'https://unsplash.com/photos/cFplR9ZGnAk'
  },
  {
    key: 4,
    title: 'John Towner',
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    url: 'https://unsplash.com/photos/89PFnHKg8HE'
  }
]

export default class Home extends Component {
  render() {
    console.log(feed)
    console.log(feed.items)
    console.log(feed.items.map(item => item.title))
    return (
      <Provider mainStore={feed}>
        <MContainer scrollable>
          {feed.items.map(({ id, title, summary, visual = news[0] }) => (
            <TouchableOpacity key={id} onPress={() => {
              this.props.navigation.navigate('NewsDetail', { id, title, summary, visual })
            }}>
              <Card
                title={title}
                titleStyle={{ margin: 8 }}
                image={{ uri: visual.url }}>
                {/* <Text style={{ marginBottom: 10 }}>
                  {summary || ''}
                </Text> */}
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginHorizontal: 10 }}>
                  <TouchableOpacity onPress={() => alert('bookmark')}>
                    <Icon type='ionicon' name='ios-bookmark' size={25} />
                  </TouchableOpacity>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </MContainer>
      </Provider>
    )
  }
}