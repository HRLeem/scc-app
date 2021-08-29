import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// Components
import MainPage from '../pages/MainPage';
import ZzimPage from '../pages/ZzimPage'

const Tab = createBottomTabNavigator();

const TabMain = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}
const TabZzim = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Zzim!</Text>
        </View>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TabMain" component={TabMain}/>
            <Tab.Screen name="TabZzim" component={TabZzim}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;