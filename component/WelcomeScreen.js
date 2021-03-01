import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

export default function WelcomeScreen(props) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Signup")
        }, 2000);
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Image source={require('../images/welcomeImage.png')}
                    style={{ width: 200, height: 200, resizeMode: "contain", marginTop: -80 }} />
                <Text style={styles.title}></Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    title: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1,
        marginTop: 10,
    },

})