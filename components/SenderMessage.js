import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SenderMessage = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={messageTxt}>{message.message}</Text>
        </View>
    )
}

export default SenderMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(147, 51, 234)',
        borderRadius: 8,
        borderTopRightRadius: 0,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginHorizontal: 12,
        marginVertical: 8,
        alignSelf: 'flex-start',
        marginLeft: "auto"
    },
    messageTxt: {
        color: 'white'
    }
})