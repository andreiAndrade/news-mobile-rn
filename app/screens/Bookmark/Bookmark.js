import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'

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

export default () => (
  <MContainer scrollable>
    {news.map(({ key, title, description }) => (
      <TouchableOpacity key={key} onPress={() => alert('Press')}>
        <Card
          title={title}
          image={{ uri: 'https://i.pinimg.com/600x315/d4/09/17/d409174d62fc768e9e6690c0e1c4143f.jpg' }}>
          <Text style={{ marginBottom: 10 }}>
            {description}
          </Text>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginHorizontal: 10 }}>
            <TouchableOpacity onPress={() => alert('bookmark')}>
              <Icon type='ionicon' name='ios-bookmark' size={25} />
            </TouchableOpacity>
          </View>
        </Card>
      </TouchableOpacity>
    ))}
  </MContainer>
)