import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'




// ----------------------------------------------    My Profile     --------------------------------------------------
export default function MyProfile() {
    const [userProfile, setUserProfile] = useState([]);
    const [cvData, setCvData] = useState([]);

    useEffect(() => {
        fetchUserProfile()
        fetchCvData()
    }, [])



    // ----------------------------------------------    Fetch User Profile     --------------------------------------------------
    const fetchUserProfile = async () => {
        const db = firestore();
        let userID = auth()?.currentUser?.uid
        const data = await db.collection("user").doc(userID).get()
        setUserProfile(data.data());
    }

    const fetchCvData = async () => {
        const db1 = firestore();
        let userID1 = auth()?.currentUser?.uid
        const data1 = await db1.collection("cvs").doc(userID1).get()
        setCvData(data1.data());
    }



    return (
        <>
            <View style={styles.container}>

                {userProfile.wantTo == "Student" ?
                    <ScrollView>

                        <View style={styles.parent}>
                            <View style={styles.child}></View>
                        </View>

                        <View style={styles.cards}>
                            {cvData.gender == "Male" ?
                                <Image source={require('../../images/maleProfile.jpg')}
                                    style={styles.userImg} />
                                :
                                <Image source={require('../../images/femaleProfile.jpg')}
                                    style={styles.userImg} />
                            }
                            <Text style={{ fontSize: 25, color: "#212121", marginTop: 5, fontWeight: "bold" }}>{cvData.username}</Text>
                        </View>

                        <View style={styles.UserInformation}>
                            <View style={styles.line}></View>
                            <Text style={styles.heading}>Education</Text>
                            <Text style={styles.textInfo}>{cvData.education}</Text>
                            <View style={styles.line}></View>

                            <Text style={styles.heading}>Profession</Text>
                            <Text style={styles.textInfo}>{cvData.profession}</Text>
                            <View style={styles.line}></View>

                            <Text style={styles.heading}>Institute</Text>
                            <Text style={styles.textInfo}>{cvData.institute}</Text>
                            <View style={styles.line}></View>

                            <Text style={styles.heading}>Contact No</Text>
                            <Text style={styles.textInfo}>{cvData.contact}</Text>
                            <View style={styles.line}></View>

                            <Text style={styles.heading}>City</Text>
                            <Text style={styles.textInfo}>{cvData.city}</Text>
                            <View style={styles.line}></View>
                        </View>
                    </ScrollView>
                    :

                    <ScrollView>

                        <View style={styles.parent}>
                            <View style={styles.child}></View>
                        </View>

                        <View style={styles.cards}>
                            <Image source={require('../../images/maleProfile.jpg')}
                                style={styles.userImg} />
                            <Text style={{ fontSize: 25, color: "#212121", marginTop: 5, fontWeight: "bold" }}>{userProfile.fullName}</Text>
                        </View>

                        <View style={styles.UserInformation}>
                            <View style={styles.line}></View>
                            <Text style={styles.heading}>email</Text>
                            <Text style={styles.textInfo}>{userProfile.email}</Text>
                            <View style={styles.line}></View>

                        </View>
                    </ScrollView>
                }


            </View>
        </>
    )
}




// ----------------------------------------------    My Profile     --------------------------------------------------
const styles = StyleSheet.create({
    parent: {
        height: '30%',
        width: '100%',
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
    },
    child: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        paddingTop: 50,
        backgroundColor: '#f3607b',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        opacity: 0.8,
        height: 200,
        flex: 3,
    },
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: "black",
        opacity: 0.8,
        height: 200,
        flex: 3,
    },
    cards: {
        alignItems: "center",
        flex: 2,
    },
    userImg: {
        width: 150,
        height: 150,
        borderRadius: 90,
        marginTop: -95,
    },
    UserInformation: {
        flex: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
    },
    heading: {
        fontSize: 20,
        fontFamily: "sans-serif-condensed",
        marginTop: 10,
        color: "#212121"
    },
    textInfo: {
        color: "#575757"
    },
    line: {
        borderColor: "lightgrey",
        borderBottomWidth: 2,
        marginTop: 10,
    }
})