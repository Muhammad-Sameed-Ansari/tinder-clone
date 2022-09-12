import React, { createContext, useContext } from 'react'
import * as Google from 'expo-auth-session/providers/google'
// import * as Google from 'expo-google-app-auth'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession();
const AuthContext = createContext({})

const config = {
    androidClientId: '590079380266-h81qbqjp39eeerjrqvcnbncq7tvv8m5t.apps.googleusercontent.com',
    iosClientId: '590079380266-j9f7bgg4o1lrhbgvic11rp1urll0irjh.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location']
}

export const AuthProvider = ({ children }) => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '590079380266-h81qbqjp39eeerjrqvcnbncq7tvv8m5t.apps.googleusercontent.com',
        iosClientId: '590079380266-j9f7bgg4o1lrhbgvic11rp1urll0irjh.apps.googleusercontent.com',
        androidClientId: '590079380266-h81qbqjp39eeerjrqvcnbncq7tvv8m5t.apps.googleusercontent.com',
    });
    
    // const signInWithGoogle = () => {
    //     // await Google.logInAsync(config).then(async (logInResult) => {
    //     //     if (logInResult.type === 'success') {
    //     //         // login...
    //     //     }
    //     // })
    // }
    


    return (
        <AuthContext.Provider 
            value={{
                user: null,
                promptAsync
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}