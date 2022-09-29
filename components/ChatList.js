import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import ChatRow from './ChatRow'

const ChatList = () => {
    const [matches, setMatches] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const unsub = onSnapshot(
            query(
                collection(db, "matches"),
                where("usersMatched", "array-contains", user.uid)
            ),
            (snapshot) => {
                setMatches(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            }
        )

        return unsub
    }, [user])
    return matches.length > 0 ? (
        <FlatList 
            style={styles.flatList}
            data={matches}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ChatRow matchDetails={item} />}
        />
    ) : (
        <View style={styles.noMatchesContainer}>
            <Text style={styles.noMatchesTxt}>No matches at the moment 😥</Text>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    flatList: {
        height: '100%'
    },
    noMatchesContainer: {
        padding: 20,
    },
    noMatchesTxt: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28
    }
})