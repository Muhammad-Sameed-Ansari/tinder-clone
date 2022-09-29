import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { images } from '../constants'

const MatchedScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    const { loggedInProfile, userSwiped } = params;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.matchLogo}
                    source={images.its_a_match}
                />
            </View>

            <Text style={styles.likeTxt}>
                You and {userSwiped.displayName} have liked each other.
            </Text>

            <View style={styles.profileImagesContainer}>
                <Image 
                    style={styles.profileImages}
                    source={{ uri: loggedInProfile.photoURL }}
                />
                <Image 
                    style={styles.profileImages}
                    source={{ uri: userSwiped.photoURL }}
                />
            </View>

            <TouchableOpacity 
                onPress={() => {
                    navigation.goBack()
                    navigation.navigate('Chat')
                }} 
                style={styles.sendBtn}
            >
                <Text style={styles.sendTxt}>Send a Message</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MatchedScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(239, 68, 68)',
        paddingTop: 80,
        opacity: 0.89
    },
    imageContainer: {
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingTop: 80
    },
    matchLogo: {
        height: 60,
        width: '100%'
    },
    likeTxt: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },
    profileImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    profileImages: {
        height: 128,
        width: 128,
        borderRadius: 999
    },
    sendBtn: {
        backgroundColor: 'white',
        margin: 20,
        paddingHorizontal: 40,
        paddingVertical: 32,
        borderRadius: 999,
        marginTop: 80
    },
    sendTxt: {
        textAlign: 'center'
    }
})