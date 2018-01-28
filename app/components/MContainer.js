import React from 'react'
import { View, ViewProperties, ScrollView } from 'react-native'
import { colors } from '../assets/styles'

const MView = (props) => {
    return props.scrollable ? (
        <View style={{ flex: 1, backgroundColor: colors.secondarylight }} {...props }>
            <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                {props.children}
            </ScrollView>
        </View >
    ) : (
        <View style={{ flex: 1, backgroundColor: colors.secondarylight, paddingVertical: 20 }} {...props }>
            {props.children}
        </View >
    )
}

MView.defaultProps = {
    scrollable: false
}

export default MView