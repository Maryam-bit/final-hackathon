import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



// ----------------------------------------------      Search      --------------------------------------------------
export default function Search({ navigation, searchVal }) {
    const [cards, setCards] = useState([]);
    const [MyProfile, setMyProfile] = useState([]);
    const [job, setJob] = useState([])

    useEffect(() => {
        fetchUsersData();
        fetchMyProfile();
        fetchJobData();
    }, []);



    const fetchJobData = async () => {
        const db = firestore();
        const getData = await db.collection("jobs").get();
        const showAds = [];
        getData.forEach((doc) => {
            showAds.push({ ...doc.data(), userrID: doc.id });
        });
        setJob(showAds);
    };


    //-----------------------------------------------    fetch Users     ------------------------------------------------
    const fetchUsersData = async () => {
        const db = firestore();
        const getData = await db.collection("cvs").get();
        const showAds = [];
        getData.forEach((doc) => {
            showAds.push({ ...doc.data(), userrID: doc.id });
        });
        setCards(showAds);
    };


    //-----------------------------------------------   fetch My profile   ------------------------------------------------
    const fetchMyProfile = async () => {
        const db = firestore();
        let myUID = auth()?.currentUser?.uid
        const data = await db.collection("user").doc(myUID).get()
        setMyProfile(data.data());
    }


    //-----------------------------------------------        Filter         ------------------------------------------------
    const filtercv = cards.filter(card => {
        return card.username.toLowerCase().includes(searchVal.toLowerCase())
    })


    const filterjob = job.filter(jobs => {
        return jobs.title.toLowerCase().includes(searchVal.toLowerCase())
    })

    return (
        <>
            <View>

                {MyProfile.wantTo != "Student" ?


                    <ScrollView style={styles.scrollContainer}>

                        <View style={{ marginTop: 10 }}></View>
                        {filterjob.map((data) => (
                            <View style={styles.card5}>
                                <Text style={{ fontSize: 17, color: "#022e96", fontWeight: "bold", textAlign: 'center', margin: 5, marginTop: 5 }}>{data.company}</Text>
                                <View style={styles.textrow1}>
                                    <Text style={styles.title}>Title</Text>
                                    <Text style={styles.text}>{data.title}</Text>
                                </View>
                                <View style={styles.textrow1}>
                                    <Text style={styles.title}>Salary</Text>
                                    <Text style={styles.text}>{data.salary}</Text>
                                </View>
                                <View style={styles.textrow1}>
                                    <Text style={styles.title}>City</Text>
                                    <Text style={styles.text}>{data.city}</Text>
                                </View>
                                <View style={styles.textrow1}>
                                    <Text style={styles.title}>Email</Text>
                                    <Text style={styles.text}>{data.email}</Text>
                                </View>
                                <View style={{ width: "94%", height: 1, backgroundColor: '#252525', marginLeft: 8, marginTop: 5 }}></View>
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Text style={{ fontSize: 14, color: "#00a634", textAlign: 'right', marginRight: 10, marginTop: 5 }}>Send CV</Text>
                                </TouchableOpacity>

                            </View>
                        ))}

                    </ScrollView>

                    :
                    <ScrollView>
                        <View style={{ marginTop: 30 }}></View>
                        {filtercv.map((data) => (
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
                                <Text style={{ fontSize: 14, color: "#022e96", textAlign: 'right', marginRight: 10, marginTop: 5 }}>Details</Text>

                            </View>
                        ))}
                        {/* <View style={{ marginTop: 200 }}></View> */}
                    </ScrollView>
                }
            </View>
        </>
    )
}




// ----------------------------------------------      Stylesheet      --------------------------------------------------

const styles = StyleSheet.create({
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 90,
        marginTop: 6,
    },

    card: {
        backgroundColor: "white",
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderColor: "#f3607b",
        borderLeftWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
        flexDirection: "row",

        margin: 30,
        marginTop: 2,
    },

    textContainer: {
        marginLeft: 20,
        justifyContent: "center",
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