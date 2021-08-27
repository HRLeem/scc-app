import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import data from '../data.json'

const windowWidth = Dimensions.get('window').width;
export default function DetailPage() {
    const tip = data.tip;
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{uri:tip[9].image}}></Image>
            </View>
            <View style={styles.descBox}>
                <Text style={styles.descTitle}>
                    {tip[9].title}
                </Text>
                <Text style={styles.descDesc}>
                    {tip[9].desc}
                </Text>
                <TouchableOpacity>
                    <View style={styles.btnZzim}>
                        <Text style={styles.btnText}>팁 찜하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
        backgroundColor: '#000'
    },
    imgBox: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    descBox: {
        flex:1,
        alignItems:'center'
    },
    descTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
        marginBottom: 20,
    },
    descDesc: {
        color: '#fff',
        fontSize: 17,
        marginBottom: 30,
    },
    btnZzim: {
        width: 150,
        height: 50,
        borderColor: 'hotpink',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 17
    }
    

    
})