import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


export default function Signup(props) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wantTo, setWantTo] = useState("");


    const signup = async function () {
        try {
            const user = await auth().createUserWithEmailAndPassword(email, password)
            firestore().collection("user").doc(user.user.uid).set({ email, fullName, wantTo })
            alert("signed up succcessfully")
            if (email.length > 0 && password.length > 0 && fullName.length > 0) {
                if (wantTo == "Student") {
                    props.navigation.navigate("createPostCV")
                }
                else if (wantTo == "Admin") {
                    props.navigation.navigate("dashboardAdmin")
                }
                else {
                    props.navigation.navigate("Signin")
                }
            }
            else {
                alert("please fill form")
            }
            setWantTo("")
            setFullName("")
            setEmail("")
        }
        catch (e) {
            alert(e)
        }
    }



    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>


                    <Image source={require('../../images/welcomeImage.png')} style={{ width: 120, height: 120, resizeMode: "contain", marginTop: -40, marginLeft: 6 }} />


                    <View style={styles.header}>
                        <Text style={styles.headerText}>Register</Text>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={wantTo}
                            style={styles.inputPicker}
                            value={wantTo}
                            onValueChange={(itemValue, itemIndex) => setWantTo(itemValue)}
                            onTouchStart={() => setLoading(true)}
                        >
                            <Picker.Item disabled={true} label="Select who are you" value="Select what you want to be" />
                            <Picker.Item label="Admin" value="Admin" />
                            <Picker.Item label="Student" value="Student" />
                            <Picker.Item label="Company owner" value="Company owner" />
                        </Picker>
                    </View>



                    <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#212121" onChangeText={(e) => setFullName(e)} value={fullName} />
                    <TextInput keyboardType="email-address" style={styles.input} placeholderTextColor="#212121" placeholder="Email" onChangeText={(e) => setEmail(e)} value={email} />
                    <TextInput secureTextEntry={true} style={styles.input} placeholderTextColor="#212121" placeholder="Password" onChangeText={(e) => setPassword(e)} value={password} />


                    <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={signup}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>


                    <View style={styles.regText}>
                        <Text style={styles.orText}>Already registered?</Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("Signin")}>
                            <Text style={styles.orText}> SignIn</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </>
    )
}




// ----------------------------------------------  stylesheet    --------------------------------------------------

const styles = StyleSheet.create({


    container: {
        marginTop: -60,
        flex: 1,
        justifyContent: "center",
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
        backgroundColor: "#022e96",
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



    text: {
        color: "#f3607b",
        fontSize: 16,
        marginTop: 20,
        marginLeft: 5,
        textTransform: "uppercase",
    },

    inputPicker: {
        width: 307,
        height: 40,
        borderWidth: 3,
        borderColor: "red",
    },


    pickerContainer: {
        paddingLeft: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
        paddingLeft: 20,
        marginBottom: 28,
        borderRadius: 90,
    },

})