import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image } from "react-native"
import MainPage from "../dashboard/MainPage"
import Signin from "../register/Signin"
import Signup from "../register/Signup"
import DashboardAdmin from "../dashboard/administration/DashboardAdmin"
import CreatePostCV from "../dashboard/CreatePostCV"
import createJobPost from "../dashboard/CreateJobPost"
import StudentDashboard from "../dashboard/StudentDashboard"
import CompanyDashboard from "../dashboard/CompanyDashboard"
import Dashboard from "../dashboard/Dashboard"
import MyProfile from "../dashboard/MyProfile"
import WelcomeScreen from "../WelcomeScreen"
import StudentDataPage from "../dashboard/administration/StudentsDataPage"
import CompaniesData from "../dashboard/administration/CompaniesData"
import MainRegistrationPage from "../register/MainRegistrationPage"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();





// ----------------------------------------------     Stack Navigation     --------------------------------------------------
function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MainRegistrationPage" component={MainRegistrationPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" component={Signup}
                    options={{ headerShown: false }}
                />
                    <Stack.Screen name="Signin" component={Signin}
                    options={{ headerShown: false }}
                />
                   <Stack.Screen name="dashboard" component={Dashboard}
                    options={{ headerShown: false }}
                />
                  <Stack.Screen name="createPostCV" component={CreatePostCV}
                    options={{ headerShown: false }}
                />
                  <Stack.Screen name="createJobPost" component={createJobPost}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="studentDashboard" component={StudentDashboard}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen name="companyDashboard" component={CompanyDashboard}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen name="dashboardAdmin" component={DashboardAdmin}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen name="companiesData" component={CompaniesData}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="studentData" component={StudentDataPage}
                options={{ headerShown: false }}
            />
            
                <Stack.Screen name="MainPage" component={MainPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MyTabs" component={MyTabs}
                    options={{ headerShown: false }}
                />
            
                <Stack.Screen name="MyProfile" component={MyProfile}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}





// ----------------------------------------------      Tab navigation      --------------------------------------------------
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#f0f0f0"
            inactiveColor="#ededed"
            barStyle={{ backgroundColor: '#252525', paddingBottom: 8 }}>

            <Tab.Screen name="Home" component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/home.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />

            <Tab.Screen name="MainPage" component={MainPage}
                options={{
                    tabBarLabel: 'explore',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/home.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />

            <Tab.Screen name="MyProfile" component={MyProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/profile.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    iconStyle: {
        color: "white",
        fontSize: 30,
    }
});

export default AppNavigation;