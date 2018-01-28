import React from 'react'
import { View, Text } from 'react-native'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'
import { colors } from '../assets/styles'

const focusedColor = colors.primary
const errorColor = colors.primaryHighlight

export default class MFormInput extends React.Component {
    _color = undefined
    _focused = false

    onFocus = () => {
        this._color = focusedColor
        this._focused = true

        this.forceUpdate()
    }

    onBlur = () => {
        this._color = this.props.hasError ? errorColor : undefined
        this._focused = false

        this.forceUpdate()
    }

    componentWillReceiveProps(props) {
        this._color = this._focused ? focusedColor : props.hasError ? errorColor : undefined
    }

    render() {
        const label = this.props.label ? <FormLabel labelStyle={this._color ? { color: this._color } : {}} >{this.props.label}</FormLabel> : null
        const help = this.props.help ? <Text style={this.props.helpBlockStyle}>{this.props.help}</Text> : null
        const error = this.props.hasError ? <FormValidationMessage labelStyle={{ color: this._color }}>{this.props.error}</FormValidationMessage> : null

        console.log(this)
        return (
            <View>
                {label}
                <FormInput
                    {...this.props}
                    containerStyle={this._color ? { borderBottomColor: this._color } : {}}
                    selectionColor={this._color || 'lightgray'}
                    inputStyle={this._color ? { color: this._color } : {}}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                />
                {help}
                {error}
            </View>
        )
    }
}