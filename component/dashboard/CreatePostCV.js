import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';

export default function CreatePostCV(props) {

    const [username, setUsername] = useState("");
    const [education, setEducation] = useState("");
    const [profession, setprofession] = useState("");
    const [institute, setInstitute] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [loading, setLoading] = useState(false)




    // ----------------------------------------------  register user    --------------------------------------------------

    const signup = function () {
        try {
            let user = auth()?.currentUser


            firestore().collection("cvs").doc(user.uid).set({ username, education, profession, institute, gender, city, contact, uid: user.uid })

            if (username.length > 0 && education.length > 0 && profession.length > 0 && institute.length > 0 && gender.length > 0 && city.length > 0) {
                alert("signed up succcessfully")
                props.navigation.navigate("Signin")
                setUsername("")
                setEducation("")
                setprofession("")
                setInstitute("")
                setGender("")
                setCity("")
                setContact("")
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
                <ScrollView>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Create your CV</Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.text}>Full name</Text>
                        <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#212121" onChangeText={(e) => setUsername(e)} value={username} />

                        <Text style={styles.text}>Education Level</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={education}
                                style={styles.inputPicker}
                                value={education}
                                onValueChange={(itemValue, itemIndex) => setEducation(itemValue)}
                                onTouchStart={() => setLoading(true)}
                            >
                                <Picker.Item disabled={true} label="Select your education level" value={education} />
                                <Picker.Item label="Metric" value="Metric" />
                                <Picker.Item label="Intermediate" value="Intermediate" />
                                <Picker.Item label="Bachlors" value="Bachlors" />
                                <Picker.Item label="Ph.d" value="Ph.d" />
                            </Picker>
                        </View>


                        <Text style={styles.text}>Profession</Text>
                        <TextInput style={styles.input} placeholder="What's your profession" placeholderTextColor="#212121" onChangeText={(e) => setprofession(e)} value={profession} />

                        <Text style={styles.text}>Institute Name</Text>
                        <TextInput style={styles.input} placeholder="Institute Name" placeholderTextColor="#212121" onChangeText={(e) => setInstitute(e)} value={institute} />

                        <Text style={styles.text}>City</Text>
                        <TextInput style={styles.input} placeholder="City Name" placeholderTextColor="#212121" onChangeText={(e) => setCity(e)} value={city} />

                        <Text style={styles.text}>Contact Number</Text>
                        <TextInput style={styles.input} placeholder="Enter your Phone Number" placeholderTextColor="#212121" onChangeText={(e) => setContact(e)} value={contact} />

                        <Text style={styles.text}>Select Gender</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={gender}
                                value={gender}
                                style={styles.inputPicker}
                                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            >
                                <Picker.Item enabled={false} label="Select your Gender" value="Select your Gender" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </View>



                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={signup}>
                                <Text style={styles.btnText}>Post</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
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
