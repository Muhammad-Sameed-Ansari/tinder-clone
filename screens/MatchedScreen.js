import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const MatchedScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    const { loggedInProfile, userSwiped } = params;

    return (
        <View style={styles.container}>
            <Text>MatchedScreen</Text>
        </View>
    )
}

export default MatchedScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(239, 68, 68)',

    }
})