import React from 'react'
import { Button } from 'react-native-elements'
import { colors } from '../assets/styles'

const MButton = (props) => (
    <Button raised backgroundColor={colors.primary} {...props} buttonStyle={[{ borderRadius: 20, marginTop: 20 }, props.buttonStyle]} />
)

export default MButton