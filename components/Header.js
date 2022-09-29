import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Foundation } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, callEnabled }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.iconTitleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            
            {callEnabled && (
                <TouchableOpacity style={styles.phoneBtn}>
                    <Foundation name="telephone" size={20} color="red" />
                </TouchableOpacity>
            )}
        </View>

        
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backBtn: {
        padding: 8
    }, 
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700'
    },
    phoneBtn: {
        borderRadius: 999,
        marginRight: 16,
        padding: 12,
        backgroundColor: 'rgb(254, 202, 202)'
    }
})