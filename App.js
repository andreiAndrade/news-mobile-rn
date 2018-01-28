import React from 'react'
import { AppRegistry } from 'react-native'
import { createRootNavigator } from './app/router'
import { isSignedIn } from './app/security'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          checkedSignIn: false,
          signedIn: false
      }
    }

    componentWillMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(() => alert('An error occurred'))
    }

    render() {
        const checkedSignIn = this.state.checkedSignIn
        const signedIn = this.state.signedIn

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null
        }

        const Layout = createRootNavigator(signedIn)
        return <Layout />
    }
}

AppRegistry.registerComponent('News', () => App)