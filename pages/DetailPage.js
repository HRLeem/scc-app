import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, Share, Alert} from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from '../config/firebaseConfig';
import Constants from 'expo-constants'

const windowWidth = Dimensions.get('window').width;
export default function DetailPage({navigation, route}) {

    const [state, setState] = useState({})


    useEffect(()=> {
        firebase_db.ref(`/tip/${route.params}`).once('value').then((snapshot) => {
            snapshot = snapshot.val()
            navigation.setOptions({
                title: snapshot.title,
                headerStyle: {
                    backgroundColor: '#000',
                    shadowColor: '#000',
                },
                headerTintColor: "#fff",
            })
            setState(snapshot)
        })
    },[])

    const zzim = () => {
        const user_id = Constants.installationId;
        firebase_db.ref(`/like/${user_id}/${state.idx}`).set(state, function(error) {
            console.log(error);
            Alert.alert('짬 완료!');
        })
    }

    const share = () => {
        Share.share({
            message:`${state.title} \n\n ${state.desc} \n\n ${state.image}`,
        });
    }

    const link = () => {
        Linking.openURL('https://naver.com')
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{uri:state.image}}></Image>
            </View>
            <View style={styles.descBox}>
                <Text style={styles.descTitle}>
                    {state.title}
                </Text>
                <Text style={styles.descDesc}>
                    {state.desc}
                </Text>
                <View style={styles.descBtn}>
                    <TouchableOpacity style={styles.btnZzim}>
                            <Text style={styles.btnText} onPress={()=>{zzim()}}>팁 찜하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnZzim, styles.share]}>
                            <Text style={styles.btnText} onPress={()=>{share()}}>공유하기!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnZzim}>
                            <Text style={styles.btnText} onPress={()=>{link()}}>네이버</Text>
                    </TouchableOpacity>
                </View>
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
        width: 100,
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
    },
    share: {
        borderColor: 'rgba(115, 248, 166, 100)'
    },
    descBtn: {
        width: '85%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
    }
    

    
})