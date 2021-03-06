/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import UserProfile from '../Screens/User/UserProfile';

const Stack = createStackNavigator();
function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="User Profile"
            component={UserProfile}
            options={{headerShown:false}}
            ></Stack.Screen>
                     <Stack.Screen
            name="Login"
            component={Login}
            options={
                {headerShown:false}
            }
            ></Stack.Screen>
             <Stack.Screen
            name="Register"
            component={Register}
            options={
                {headerShown:false}
            }
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
export default function UserNavigator(){
    return <MyStack />
}
