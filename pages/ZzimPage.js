import {StatusBar} from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {firebase_db} from '../config/firebaseConfig'
import Constants from 'expo-constants'

import Card from '../components/Card'
import GoToMain from '../components/GoToMain'
export default function ZzimPage({navigation, route}) {

    const [ state, setState ] = useState([])
    const [ isZzim, setIsZzim] = useState(true);
    const [ userId, setUserId] = useState('');

    useEffect(()=> {
        navigation.setOptions({
            title:'꿀팁 찜 !',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000',
        })
        const user_id = Constants.installationId;
        setUserId(user_id);
        firebase_db.ref(`/like/${user_id}`).once('value').then((snapshot) => {
            let zzimList = Object.values(snapshot.val())
            if (zzimList) {
                setIsZzim(false);
                setState(zzimList);
            }
        })
    }, [])
    const removeZzim = async (idx) => {
        console.log(`id ==> ${userId}`)
        await firebase_db.ref(`/like/${userId}/${idx}`).remove();
        await firebase_db.ref(`/like/${userId}`).once('value').then((snapshot) => {
            let zzimList = Object.values(snapshot.val());
            setState(zzimList);
        })
        alert('찜이 삭제되었습니다!')
    }

    return isZzim? (<GoToMain/>) :(
        <ScrollView>
            <View style={styles.container}>
                {
                    isZzim ? <GoToMain/> : ( 
                        state.map((val,i) => {
                        return (
                            <View key={i}>
                                <Card content={val}  navigation={navigation} isZzim={true}/>
                                <View style={styles.btnBox}>
                                    <TouchableOpacity  style={[styles.btn, styles.btnDetail]} onPress={()=>{navigation.navigate('DetailPage', content.idx)}}>
                                        <Text style={styles.btnText}>자세히 보기</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={[styles.btn, styles.btnremove]} onPress={()=> {removeZzim(val.idx)}}>
                                        <Text style={styles.btnText} >찜 삭제하기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }) 
                    )
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
    btnBox: {
      height: 40,
      paddingBottom: 30,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems:"center",
    },
    btn: {
      width: 90,
      height: 40,
      borderRadius: 12,
      marginRight: 15,
      justifyContent:"center",
      alignItems:"center"
    },
    btnDetail: {
      backgroundColor: '#fe8d6f'
    },
    btnremove: {
      backgroundColor: '#777',
    },
    btnText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: 'bold',
    }
})