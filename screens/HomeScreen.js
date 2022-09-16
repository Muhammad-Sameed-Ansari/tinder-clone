import { View, Text, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { images } from '../constants'
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logOut } = useAuth()

    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}
            >
                <TouchableOpacity onPress={logOut}>
                    <Image 
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 99
                        }}
                        source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        style={{
                            height: 56,
                            width: 56
                        }}
                        source={images.tinder_logo}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name='chatbubbles-sharp' size={30} color='#FF5864' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen