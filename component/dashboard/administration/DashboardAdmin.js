import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import firestore from '@react-native-firebase/firestore';

export default function DashboardAdmin(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Admin Page</Text>
                </View>

                <View style={{ marginTop: 70 }}></View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("studentData")}>

                    <View style={styles.card5}>
                        <Image source={require('../../../images/login-02.png')}
                            style={{ width: 100, height: 100, resizeMode: "contain" }} />

                        <Text style={{ fontSize: 17, color: "#022e96", fontWeight: "bold", textAlign: 'center', margin: 5, marginTop: 5 }}>Students Data</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("companiesData")}>

                    <View style={styles.card5}>
                        <Image source={require('../../../images/login-03.png')}
                            style={{ width: 100, height: 100, resizeMode: "contain" }} />

                        <Text style={{ fontSize: 17, color: "#022e96", fontWeight: "bold", textAlign: 'center', margin: 5, marginTop: 5 }}>Compaines Data</Text>
                    </View>
                </TouchableOpacity>




            </View>
        </>
    )
}





const styles = StyleSheet.create({

    container: {
        // flex: 1
        width: "100%",
        height: "100%"
    },
    header: {
        backgroundColor: "#022e96",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 20,
        padding: 20,
    },
    scrollContainer: {
        flex: 1,
        // marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 50,
        backgroundColor: "#022e96",
        width: 90,
        height: 90,
        borderRadius: 90,
        alignItems: "center",
        justifyContent: "center",
        elevation: 9,
    },
    addbuttonText: {
        color: "white",
        fontSize: 24
    },
    card5: {
        backgroundColor: "white",
        // 8DC4BB   F2982F   327389
        // height: 160,
        padding: 10,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        opacity: 0.7,
        // flexDirection: "row",

        margin: 30,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
        // flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textrow1: {
        flexDirection: "row",
        margin: 3,
        marginLeft: 9,
    },
    title: {
        fontSize: 15,
        fontFamily: "sans-serif-medium"
    },
    text: {
        color: "#252525",
        fontSize: 15,
        fontFamily: "sans-serif-medium",
        marginLeft: 10,
    }
});