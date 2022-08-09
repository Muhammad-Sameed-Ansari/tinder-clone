import React, { createContext, useContext } from 'react'
// import * as Google from 'expo-auth-session/providers/google'
import * as Google from 'expo-google-app-auth'

const AuthContext = createContext({})

const config = {
    androidClientId: '590079380266-h81qbqjp39eeerjrqvcnbncq7tvv8m5t.apps.googleusercontent.com',
    iosClientId: '590079380266-j9f7bgg4o1lrhbgvic11rp1urll0irjh.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location']
}

export const AuthProvider = ({ children }) => {
    
    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === 'success') {
                // login...
            }
        })
    }
    


    return (
        <AuthContext.Provider 
            value={{
                user: null,
                signInWithGoogle
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth