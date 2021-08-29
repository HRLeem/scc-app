import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function GoToMain({navigation}) {
    return (
        <View style={styles.info}>
            <Text style={styles.title}>앗 아직 찜 목록이 없어요!</Text>
            <Text style={styles.subTitle}>찜버튼을 누르시면 목록에서 모아서 보실 수 있어요 =)</Text>
            {/* <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>메인화면으로 돌아가기</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        height: '50%',
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        fontSize: 31,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    subTitle : {
        fontSize: 17,

    },
})