import React, { createContext, useContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut
} from '@firebase/auth'
import { auth } from '../firebase'

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: "1043035196161-i96qatqd7gtn1jj342utafv1r7gr0ogg.apps.googleusercontent.com",
        clientId: "1043035196161-i96qatqd7gtn1jj342utafv1r7gr0ogg.apps.googleusercontent.com",
        iosClientId: "1043035196161-7riq54rjf7vsjs28igqbnuik96j2go84.apps.googleusercontent.com",
        androidClientId: "1043035196161-lgf7hu1r6ft0ip48sa611nu3n2vdl6so.apps.googleusercontent.com"
    })    

    const signInWithGoogle = () => {
        promptAsync()
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    useEffect(() => {
        if (response?.type == 'success') {
            const { id_token } = response.params;

            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
        }
    }, [response])
    

    return (
        <AuthContext.Provider 
            value={{
                user,
                signInWithGoogle
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}