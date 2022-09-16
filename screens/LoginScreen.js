import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

import { images } from '../constants'

const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth()

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1}}
                source={images.tinder_login}
            >
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 160,
                        width: 208,
                        marginHorizontal: '25%',
                        backgroundColor: 'white',
                        padding: 16,
                        borderRadius: 16
                    }}
                    onPress={signInWithGoogle}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '600'
                        }}
                    >Sign in & get swiping</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen