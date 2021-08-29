import StatusBar from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity, Touchable} from 'react-native'

export default function Card({content, navigation}) {
 
    return (
      <View style={styles.borderTop}>
          <View style={[styles.b]}>
            <TouchableOpacity style={styles.card}  onPress={()=>{navigation.navigate('DetailPage', content.idx)}}>
              <View style={styles.cardImage}>
                <Image style={styles.cardImage} source={{uri: content.image}}></Image>
              </View>
              <TouchableOpacity style={styles.desc} onPress={()=>{navigation.navigate('DetailPage', content.idx)}}>
                <Text style={styles.descTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.descdesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.descDate}>{content.date}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        marginTop: 25,
        paddingBottom: 5,
    },
    borderTop: {

      borderTopColor: '#ddd',
      borderTopWidth: 1,
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