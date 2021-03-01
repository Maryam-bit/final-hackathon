import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'


export default function Card(props) {
    return (
        <>
            <View>
                <View style={props.style}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 22.5, color: "#212121", marginTop: 3, fontWeight: "600" }}>{props.user}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 90,
        marginTop: 6,
    },


    card: {
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flexDirection: "row",
        margin: 30,
        marginTop: 2,
    },


    card1: {
        backgroundColor: "#EB7662",
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flexDirection: "row",

        margin: 30,
        marginTop: 2,
    },
   

    card2: {
        backgroundColor: "#8DC4BB",
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flexDirection: "row",

        margin: 30,
        marginTop: 2,
    },


    card3: {
        backgroundColor: "#F2982F",
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        flexDirection: "row",

        margin: 30,
        marginTop: 2,
    },


    textContainer: {
        marginLeft: 20,
        justifyContent: "center",
    },
    

    container: {
        marginTop: -60,
        justifyContent: "center",
        flex: 1,
    },


    header: {
        alignItems: "center",
        padding: 20,
    },


    headerText: {
        color: "#242424",
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 3,
    },


    body: {
        alignItems: "center",
        marginTop: 30
    },


    input: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
        paddingLeft: 20,
        marginBottom: 28,
        borderRadius: 90,
    },


    btn: {
        backgroundColor: "#f3607b",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 9,
        paddingBottom: 9,
        borderRadius: 90,
        width: "60%",
        alignItems: "center",
    },


    btnText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
    },


    orText: {
        marginTop: 15,
        color: "grey"
    },


    regText: {
        flexDirection: "row"
    },


})