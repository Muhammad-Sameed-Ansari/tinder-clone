import { Button, FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import { useRoute } from '@react-navigation/native'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'
import SenderMessage from '../components/SenderMessage'
import ReceiverMessage from '../components/ReceiverMessage'

const MessageScreen = () => {
    const { user } = useAuth()
    const { params } = useRoute()
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const { matchDetails } = params

    const sendMessage = () => {}

    return (
        <SafeAreaView style={styles.container}>
            <Header title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName} callEnabled/> 
            
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={10}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <FlatList 
                        data={messages}
                        style={styles.flatList}
                        keyExtractor={item => item.id}
                        renderItem={({ item: message }) => 
                            message.userId === user.uid ? (
                                <SenderMessage key={message.id} message={message} />
                            ) : (
                                <ReceiverMessage key={message.id} message={message} />
                            )
                        }
                    />
                </TouchableWithoutFeedback>
            

                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Send Messsage..."
                        onChangeText={setInput}
                        onSubmitEditing={sendMessage}
                        value={input}
                    />
                    <Button onPress={sendMessage} title='Send' color='#FF5864'/>
                </View>
            </KeyboardAvoidingView>
            

            
        </SafeAreaView>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    keyboardAvoidingView: {
        flex: 1
    },
    flatList: {
        paddingLeft: 16
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(229, 231, 235)',
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: 'white'
    },  
    textInput: {
        height: 40,
        fontSize: 18,
        lineHeight: 28
    }
})