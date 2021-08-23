import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text,View,Dimensions,ScrollView,TouchableOpacity,Image} from 'react-native';
import data from './data.json'

const windowWidth = Dimensions.get('window').width ;
export default function App() {
    console.disableYellowBox = true;
    const tip = data.tip;
    let todayWeather = 27;
    let todayCondition = '흐림'

    return (
      <View>
        <ScrollView>
              <View style={styles.container}>
                <StatusBar style="auto"/>
                <View style={[styles.main, styles.b]}>
                    <Text style={styles.title}>나만의 꿀팁</Text>
                      <Text style={styles.weather}>오늘의 날씨: {todayWeather+'°C '+todayCondition}</Text>
                    <Image style={styles.mainImage}source={{uri: url}}></Image>
                </View>
                <ScrollView horizontal={true} indicatorStyle={'white'}>
                    <View style={[styles.slider, styles.b]}>
                        <TouchableOpacity style={[styles.sliderBox, styles.yellow]}>
                            <Text style={styles.sliderText}>미용</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.coral]}>
                            <Text style={styles.sliderText}>재테크</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.green]}>
                            <Text style={styles.sliderText}>할인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.purple]}>
                            <Text style={styles.sliderText}>뭐시기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox]}>
                            <Text style={styles.sliderText}>팁1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox]}>
                            <Text style={styles.sliderText}>팁2</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={[styles.cards, styles.b]}>
                {
                  tip.map((val, i) => {
                    return (
                    <TouchableOpacity style={[styles.b]}>
                        <View style={styles.card} key={i}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardImage} source={{uri: val.image}}></Image>
                            </View>
                            <View style={styles.desc}>
                              <Text style={styles.descTitle} numberOfLines={1}>{val.title}</Text>
                              <Text style={styles.descdesc} numberOfLines={3}>{val.desc}</Text>
                              <Text style={styles.descDate}>{val.date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
                  })
                }
                </View>
                </View>
            </ScrollView>
        </View>
    );
}

const ait = () => { alert('Hi'); }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
    },
    main: {
        width: '100%',
        marginTop: 60
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    weather : {
      textAlign: 'right'
    },
    mainImage: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginTop: 10,
    },
    slider: {
        height: 120,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    sliderBox: {
        width: 100,
        height: 50,
        backgroundColor: 'coral',
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    yellow: {
        backgroundColor: "#fdc453"
    },
    coral: {
        backgroundColor: '#fe8d6f'
    },
    green: {
        backgroundColor: '#fe8d6f'
    },
    purple: {
        backgroundColor: '#f886a8'
    },
    sliderText: {
        fontSize: 17,
        color: "#fff"
    },
    cards: {
        width: '100%'
    },
    card: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        marginBottom: 25,
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

    b: {
        // borderWidth: 1,
        // borderColor: '#000'
    }
});
