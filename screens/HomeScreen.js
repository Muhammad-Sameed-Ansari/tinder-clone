import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { images } from '../constants'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import Swiper from 'react-native-deck-swiper'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logOut } = useAuth()
    const swipeRef = useRef(null)

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
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: 'right',
                                    color: 'red'
                                }
                            }
                        },
                        right: {
                            title: "MATCH",
                            style: {
                                label: {
                                    color: 'green'
                                }
                            }
                        }
                    }}
                    onSwipedLeft={() => {
                        console.log("SWIPE PASS")
                    }}
                    onSwipedRight={() => {
                        console.log("SWIPE MATCH")
                    }}
                    backgroundColor={'#4FD0E9'}
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
                                style={[{
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
                                }, styles.cardShadow]}
                            >
                                <View>
                                    <Text 
                                        style={{ 
                                            fontSize: 20, 
                                            lineHeight: 28,
                                            fontWeight: '700'
                                        }}
                                    >{card.firstName} {card.lastName}</Text>
                                    <Text>{card.occupation}</Text>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 24, 
                                        lineHeight: 32,
                                        fontWeight: '700'
                                    }}
                                >{card.age}</Text>
                            </View>

                        </View>

                        
                    )}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}> 
                <TouchableOpacity 
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={[styles.passMatchBtns, { backgroundColor: 'rgb(254, 202, 202)' }]}    
                >
                    <Entypo name="cross" size={24} color='red' />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => swipeRef.current.swipeRight()}
                    style={[styles.passMatchBtns, { backgroundColor: 'rgb(187, 247, 208)'}]}
                >
                    <AntDesign name="heart" size={24} color='green' />
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    passMatchBtns: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        borderRadius: 99
    }
})