import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const { promptAsync } = useAuth()

    return (
        <View>
            <Text>I am the LoginScreen</Text>
            <Button title='Login' onPress={promptAsync}/>
        </View>
    )
}

export default LoginScreen