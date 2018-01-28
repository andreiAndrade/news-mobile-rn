import React from 'react'
import { Card, Avatar, FormInput, FormLabel } from 'react-native-elements'
import { MContainer } from '../../components'
import { Provider } from 'mobx-react'
import user from '../../models/User'

export default class ProfileDetails extends React.Component {
  render() {
    const getPhoto = () => {
      console.log(user)
      console.log(user.picture)
      return user.picture
    }
    return (
      <Provider mainStore={user} >
        <MContainer scrollable>
          <Card title={user.name}>
            <Avatar
              xlarge
              rounded
              source={{ uri: getPhoto() }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={{ alignSelf: 'center' }}
            />
            <FormLabel>Nome</FormLabel>
            <FormInput value={user.name}/>
            <FormLabel>Forma de acesso</FormLabel>
            <FormInput value={user.provider}/>
          </Card>
        </MContainer>
      </Provider>
    )
  }
}
