
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button,
    Image
} from 'react-native';
import Card from '../../components-data/card/Card'
import firestore from '@react-native-firebase/firestore';
import Header from './Header'
import StudentDashboard from "./StudentDashboard";
import CompanyDashboard from "./CompanyDashboard"
import auth from '@react-native-firebase/auth'

export default Dashboard = ({ navigation }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchUsersData();
    }, []);



    //-----------------------------------------------    fetch Users     ------------------------------------------------
    const fetchUsersData = async () => {
        const db = firestore();
        let myUID = auth()?.currentUser?.uid
        const data = await db.collection("user").doc(myUID).get()
        setCards(data.data());
        console.log(data.data().wantTo)
    }
    return (
        <>
            {/* <Header/> */}
            <View>
                {cards.wantTo == "Student" ?
                    <StudentDashboard navigation={navigation} />
                    :
                    <CompanyDashboard navigation={navigation} />
                }
            </View>
        </>
    )
}

