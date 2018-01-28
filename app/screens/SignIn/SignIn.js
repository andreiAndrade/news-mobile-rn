import React from 'react'
import { Card } from 'react-native-elements'
import t from 'tcomb-form-native'
import { onSignIn } from '../../security'
import { MContainer, MButton, Email, MForm } from '../../components'

const signInForm = t.struct({
  email: Email,
  password: t.String
})
export default ({ navigation }) => (
  <MContainer>
    <Card>
      <MForm
        type={signInForm}
      />

      <MButton
        title='SIGN IN'
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'))
        }}
      />
    </Card>
  </MContainer>
)