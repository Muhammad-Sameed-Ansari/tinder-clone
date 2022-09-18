import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { images } from '../constants'
import { Ionicons } from '@expo/vector-icons'; 
import Swiper from 'react-native-deck-swiper'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logOut } = useAuth()

    const DUMMY_DATA = [
        {
            id: 1,
            firstName: "Elon",
            lastName: "Musk",
            occupation: "Software Developer",
            photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            age: 50
        },
        {
            id: 2,
            firstName: "Jeff",
            lastName: "Bezos",
            occupation: "Software Developer",
            photoURL: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3",
            age: 50
        },
        {
            id: 3,
            firstName: "Warren",
            lastName: "Buffet",
            occupation: "Software Developer",
            photoURL: "https://imageio.forbes.com/specials-images/imageserve/5babb7f1a7ea4342a948b79a/0x0.jpg?format=jpg&crop=2327,2329,x748,y1753,safe&height=416&width=416&fit=bounds",
            age: 50
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}
            >
                <TouchableOpacity onPress={logOut}>
                    <Image 
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 99
                        }}
                        source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        style={{
                            height: 56,
                            width: 56
                        }}
                        source={images.tinder_logo}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name='chatbubbles-sharp' size={30} color='#FF5864' />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginTop: -6 }}>
                <Swiper 
                    containerStyle={{ backgroundColor: 'transparent' }}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    renderCard={(card) => (
                        <View 
                            key={card.id} 
                            style={{ 
                                position: 'relative',
                                backgroundColor: 'white',
                                height: '75%',
                                borderRadius: 12 
                            }}
                        >
                            <Image 
                                style={{ position: 'absolute', top: 0, height: '100%', width: '100%', borderRadius: 12 }}
                                source={{ uri: card.photoURL }}
                            />

                            <View
                                style={{
                                    position:'absolute',
                                    flexDirection: 'row',
                                    bottom: 0,
                                    backgroundColor: 'white',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: 80,
                                    paddingHorizontal: 24,
                                    paddingVertical: 8,
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12
                                }}
                            >
                                <View>
                                    <Text>{card.firstName} {card.lastName}</Text>
                                    <Text>{card.occupation}</Text>
                                </View>
                                <Text>{card.age}</Text>
                            </View>

                        </View>

                        
                    )}
                />
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen