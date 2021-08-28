import StatusBar from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'

export default function Card({content, navigation}) {
    return (
        <TouchableOpacity style={[styles.b]} onPress={()=>{navigation.navigate('DetailPage', content.idx)}}>
                        <View style={styles.card} >
                            <View style={styles.cardImage}>
                                <Image style={styles.cardImage} source={{uri: content.image}}></Image>
                            </View>
                            <View style={styles.desc}>
                              <Text style={styles.descTitle} numberOfLines={1}>{content.title}</Text>
                              <Text style={styles.descdesc} numberOfLines={3}>{content.desc}</Text>
                              <Text style={styles.descDate}>{content.date}</Text>
                            </View>
                        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        marginBottom: 25,
        paddingBottom: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    cardImage: {
        flex: 1,
        borderRadius: 15,
        marginRight: 5,
    },
    desc: {
        flex: 2,
        flexDirection: 'column'
    },
    descTitle: {
      flex: 1,
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 10,
    },
    descdesc: {
      flex:3,
      fontSize: 16,
      width: '100%',
    },
    descDate: {
      flex: 1,
      fontSize: 10,
      color: 'gray'
    },
})