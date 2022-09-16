import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut
} from '@firebase/auth'
import { auth } from '../firebase'
import { async } from '@firebase/util'

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: "1043035196161-i96qatqd7gtn1jj342utafv1r7gr0ogg.apps.googleusercontent.com",
        clientId: "1043035196161-i96qatqd7gtn1jj342utafv1r7gr0ogg.apps.googleusercontent.com",
        iosClientId: "1043035196161-7riq54rjf7vsjs28igqbnuik96j2go84.apps.googleusercontent.com",
        androidClientId: "1043035196161-lgf7hu1r6ft0ip48sa611nu3n2vdl6so.apps.googleusercontent.com"
    })    

    const signInWithGoogle = () => {
        setLoading(true)

        promptAsync()
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }

    const logOut = () => {
        setLoading(true)

        signOut(auth)
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }

            setLoadingInitial(false)
        })

        return unsub
    }, [])

    useEffect(() => {
        if (response?.type == 'success') {
            const { id_token } = response.params;

            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
        }
    }, [response])
    
    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        signInWithGoogle,
        logOut
    }), [user, loading, error])

    return (
        <AuthContext.Provider 
            value={memoedValue}
        >
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}