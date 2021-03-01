import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';

export default function CreatePostCV(props) {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [loading, setLoading] = useState(false)




    // ----------------------------------------------  register user    --------------------------------------------------

    const signup = function () {
        try {
            let user = auth()?.currentUser


            firestore().collection("jobs").doc(user.uid).set({ company, title, salary, city, email, uid: user.uid })

            if (company.length > 0 && title.length > 0 && salary.length > 0 && city.length > 0 && email.length > 0) {
                alert("data saved sucess fully")
                props.navigation.navigate("MyTabs")
                setCompany("")
                setTitle("")
                setSalary("")
                setCity("")
                setEmail("")
            }
            else {
                alert("please fill full form")
            }


        }
        catch (e) {
            alert(e)
        }
    }


    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>

                    <View style={{ marginTop: 10 }}></View>
                    {job.map((data) => (
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
                {/* <Text>hwllow </Text> */}
            </View>
        </>
    )
}



const styles = StyleSheet.create({


    // container: {
    //     // marginTop: 30
    // },


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


    body: {
        marginTop: 5,
        marginLeft: 30,
    },


    text: {
        color: "#022e96",
        fontSize: 16,
        marginTop: 20,
        marginLeft: 5,
        textTransform: "uppercase",
    },


    input: {
        borderWidth: 1,
        borderColor: "#ababab",
        width: "90%",
        paddingLeft: 20,
        marginBottom: 8,
        borderRadius: 90,
        marginTop: 10,
        fontSize: 16
    },



    btn: {
        backgroundColor: "#022e96",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 90,
        width: "45%",
        alignItems: "center",
        marginTop: 25,
        marginRight: 30,
        marginBottom: 40,
    },


    btnText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
    },


    regText: {
        flexDirection: "row",
        marginRight: 30,
    },


    inputPicker: {
        width: 307,
        height: 40,
        borderWidth: 3,
        borderColor: "red",
    },


    pickerContainer: {
        paddingLeft: 4,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1,
        borderColor: "#ababab",
        width: "90%",
        paddingLeft: 20,
        marginBottom: 8,
        borderRadius: 90,
        marginTop: 10,
    },


})
