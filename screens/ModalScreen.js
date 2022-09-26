import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { images } from '../constants'
import useAuth from '../hooks/useAuth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigation } from '@react-navigation/native'
// import * as ImagePicker from 'expo-image-picker';

const ModalScreen = () => {
    const navigation = useNavigation()
    const { user } = useAuth()
    const [image, setImage] = useState(null)
    const [job, setJob] = useState(null)
    const [age, setAge] = useState(null)

    // const pickImage = async () => {
    //     // No permissions request is necessary for launching the image library
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setImage(result.uri);
    //     }
    // };

    const incompleteForm = !image || !job || !age

    const updateUserProfile = () => {
        setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            displayName: user.displayName,
            photoURL: image,
            job: job,
            age: age,
            timestamp: serverTimestamp()
        })
        .then(() => navigation.goBack())
        .catch((error) => alert(error.message))

    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 4 }}>
            <Image 
                style={{ width: '100%', height: 80 }}
                resizeMode='contain'
                source={images.tinder_logo_2}
            />

            <Text style={styles.welcome}>Welcome {user.displayName}</Text>
        
            <Text style={styles.stepTxt}>Step 1: The Profile Pic</Text>
            <TextInput 
                value={image}
                onChangeText={text => setImage(text)}
                style={styles.inputTxt}
                placeholder='Enter a Profile Pic URL'
            />
            {/* <Button title='Gallery' onPress={pickImage}/>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
            

            <Text style={styles.stepTxt}>Step 2: The Job</Text>
            <TextInput 
                value={job}
                onChangeText={text => setJob(text)}
                style={styles.inputTxt}
                placeholder='Enter your occupation'
            />

            <Text style={styles.stepTxt}>Step 3: The Age</Text>
            <TextInput 
                value={age}
                onChangeText={text => setAge(text)}
                style={styles.inputTxt}
                placeholder='Enter your age'
                keyboardType='numeric'
                maxLength={2}
            />

            <TouchableOpacity 
                onPress={updateUserProfile}
                disabled={incompleteForm}
                style={styles.updateBtn(incompleteForm)}
            >
                <Text style={styles.btnTxt}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ModalScreen

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        lineHeight: 28,
        color: 'rgb(107, 114, 128)',
        fontWeight: '700',
        textAlign: 'center',
        padding: 8
    },
    stepTxt: {
        textAlign: 'center',
        padding: 16,
        fontWeight: '700',
        color: 'rgb(248, 113, 113)'
    },
    inputTxt: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 28,
        paddingBottom: 8
    },
    updateBtn: incompleteForm => ({
        width: 256,
        padding: 12,
        borderRadius: 12,
        position: 'absolute',
        bottom: 40,
        backgroundColor: incompleteForm ? 'rgb(156, 163, 175)' : 'rgb(248, 113, 113)'
    }),
    btnTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        lineHeight: 28,
    }
})