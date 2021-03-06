/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/Cart/Cart';
import Checkout from './CheckoutNavigator';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="Cart"
            component={Cart}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="Checkout"
            component={Checkout}
            options={{
                title: 'Checkout'
            }}
        />
    </Stack.Navigator>
    )
}
export default function CartNavigator() {
    return <MyStack />
}
