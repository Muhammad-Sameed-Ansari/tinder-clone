import { View, Text, StyleSheet } from 'react-native'
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
                    source={images.its_a_match}
                />
            </View>
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
    }
})