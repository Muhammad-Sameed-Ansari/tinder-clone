import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'

const ChatRow = ({ matchDetails }) => {
    const navigation = useNavigation()
    const { user } = useAuth()
    const [matchedUserInfo, setMatchedUserInfo] = useState(null)

    useEffect(() => {
        setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid))
    }, [matchDetails, user])

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Message', { matchDetails })}
            style={[styles.container, styles.cardShadow]}
        >
            <Image 
                style={styles.image}
                source={{ uri: matchedUserInfo?.photoURL }}
            />

            <View>
                <Text style={styles.senderName}>
                    {matchedUserInfo?.displayName}
                </Text>
                <Text>Say Hi!</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginHorizontal: 12,
        marginVertical: 4,
        borderRadius: 8
    }, 
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    image: {
        borderRadius: 999,
        height: 56,
        width: 56,
        marginRight: 16
    },
    senderName: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600'
    }
})