import {StatusBar} from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {firebase_db} from '../config/firebaseConfig'
import Constants from 'expo-constants'

import Card from '../components/Card'
import data from '../data.json'
export default function ZzimPage({navigation, route}) {

    const [ state, setState ] = useState([])

    useEffect(()=> {
        const user_id = Constants.installationId;
        console.log(user_id)
        firebase_db.ref(`/like/${user_id}}`).once('value').then((snapshot) => {
            console.log(snapshot);
            let tip = snapshot.val();
            console.log(tip);
        })
        navigation.setOptions({
            title:'꿀팁 찜 !',
            headerStyle: {
                backgroundColor: '#fff',
                
            },
            headerTintColor: '#000',
        })
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    data.tip.map((val,i) => {
                        return (
                            <Card content={val} key={i} navigation={navigation}/>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
})