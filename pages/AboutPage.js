import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function AboutPage() {
    const url = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다
                </Text>
            </View>
            <View style={styles.containerBox}>
                <View style={styles.innerBox}>
                    <View style={styles.innerImageBox}>
                        <Image style={styles.innerImage} source={{uri:url}}></Image>
                    </View>
                    <View style={styles.innerTitleBox}>
                        <Text style={styles.innerTitle}>
                            많은 내용을 간결하게 담아내려 노력했습니다!
                        </Text>
                    </View>
                    <View style={styles.innerSubTitleBox}>
                        <Text style={styles.innerSubTitle}>
                            꼭 완주하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.innerButton}>
                            <Text style={styles.innerButtonText}>
                                여러분의 인스타계정
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:"rgb(0, 0, 100)"
    },
    titleBox: {
        flex:1,
        width: '90%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 33,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
    containerBox: {
        flex: 3,
        width:'90%',
    },
    innerBox: {
        height: '85%',
        borderRadius: 20,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    innerImageBox: {
        width: '100%',
        height: 280,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    innerImage: {
        width: 180,
        height: 180,
        borderRadius: 20,
    },
    innerTitleBox: {
        width: '80%',
        marginBottom: 20
    },
    innerTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',

    },
    innerSubTitleBox: {
        width: '80%'
    },
    innerSubTitle:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    innerButton: {
        width: 180,
        height: 60,
        borderRadius: 15,
        backgroundColor: 'coral',
        justifyContent: 'center',
        alignItems:'center'
    },
    innerButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',

    }

})