import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'

const ChatRow = ({ matchDetails }) => {
    const navigation = useNavigation()
    const { user } = useAuth()

    return (
        <TouchableOpacity>
            <Image />
        </TouchableOpacity>
    )
}

export default ChatRow

const styles = StyleSheet.create({})