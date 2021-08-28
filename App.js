import React from 'react';
import { StatusBar } from 'expo-status-bar'

// 네비게이션 도구
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'

export default function App() {
    
    console.disableYellowbox = true;

    return (
        <NavigationContainer>
            <StatusBar style="black" />
            <StackNavigator/>
        </NavigationContainer>
    )
}
