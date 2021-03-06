import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export default function CompanyDashboard(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchUsersData();
    }, []);



    //-----------------------------------------------    fetch Users     ------------------------------------------------
    const fetchUsersData = async () => {
        const db = firestore();
        const getData = await db.collection("cvs").get();
        const showAds = [];
        getData.forEach((doc) => {
            showAds.push({ ...doc.data(), userrID: doc.id });
        });
        setCards(showAds);
        // console.log(cards.data().uid)
    };


    // const deleteCollection = (id) => {
    //     firestore().collection("cvs").doc(id).delete().then(() => {
    //         console.log("Document successfully deleted!");
    //     }).catch((error) => {
    //         console.error("Error removing document: ", error);
    //     });
    //     // console.log("iddd", id)
    // }

    return (
        <>
            <View style={styles.container}>


                <View style={styles.header}>
                    <Text style={styles.headerText}>Students Data Page</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    <View style={{ marginTop: 30 }}></View>
                    {cards.map((data) => (
                        <View style={styles.card5}>
                            <Text style={{ fontSize: 17, color: "#022e96", fontWeight: "bold", textAlign: 'center', margin: 5, marginTop: 5 }}>{data.username}</Text>
                            <View style={styles.textrow1}>
                                <Text style={styles.title}>Education:</Text>
                                <Text style={styles.text}>{data.education}</Text>
                            </View>
                            <View style={styles.textrow1}>
                                <Text style={styles.title}>Qualified in</Text>
                                <Text style={styles.text}>{data.profession}</Text>
                            </View>
                            <View style={styles.textrow1}>
                                <Text style={styles.title}>City</Text>
                                <Text style={styles.text}>{data.city}</Text>
                            </View>
                            <View style={{ width: "94%", height: 1, backgroundColor: '#252525', marginLeft: 8, marginTop: 5 }}></View>
                            <TouchableOpacity activeOpacity={0.9}
                            //  onPress={deleteCollection(data.userrID)}
                             >
                                <Text style={{ fontSize: 14, color: "#e61c3a", textAlign: 'right', marginRight: 10, marginTop: 5 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                    {/* {/* <View style={{ marginTop: 200 }}></View> */}
                </ScrollView>


            </View>
        </>
    )
}





const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
    },
    container: {
        // flex: 1,
        width: '100%',
        height: "100%"
    },
    header: {
        backgroundColor: "#022e96",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 18,
        padding: 20,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 50
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
