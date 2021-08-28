import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View,Dimensions,ScrollView,TouchableOpacity,Image, Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import {firebase_db} from '../config/firebaseConfig';

import Card from '../components/Card'
import Loading from '../components/Loading'
import { NavigationContainer } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width ;
export default function MainPage( {navigation, route} ) {
    console.disableYellowBox = true;

    const [state, setState] = useState([]);
    // 1 컴포넌트, n 스테이트 가능. 이름은 내마음
    // const [statename, setStatename] = useState(초기값);
    // 여기서 초기값은 [리스트, trueFalse, 딕셔너리, 숫자, 문자] 다 가능
    const [ready, setReady] = useState(true);
    const [cateState, setCateState] = useState([])
    const [weather, setWeather] = useState({
        temp: 0,
        condition: ''
    })

    useEffect(() => {
        // change title of header
        navigation.setOptions({
            title:'나만의 꿀팁'
        })
        // connect DB
        firebase_db.ref('/tip').once('value').then((snapshot) => {
            let tip = snapshot.val();
            console.log('firebase에서 데이터를 가져왔습니다.');
            setState(tip);
            setCateState(tip);
            getLocation();
            setReady(false);
        });
        // setTimeout(()=> {
        // }, 1000)
    }, [])

    const category = (cate) => {
        if (cate == '전체보기') {
            // 전체보기라면, 원래 데이터를 담고 있는 상태값으로 초기화
            // state는 초기값을 가지고 있는 상태이기 때문에
            setCateState(state);
        } else {
            setCateState(state.filter((val) => val.category == cate))
        }
    }
    const a1 = () => {
        firebase_db.ref('/tip/1').once('value').then((snapshot) => {
            console.log(snapshot);
        })
        alert('h1')
    }

    // ********* important **********
    const getLocation = async () => {
        // 수많은 로직중에 에러가 발생하면,
        // 해당 에러를 포착하여 로직을 '멈추고', 에러를 해걀하기 위한 catch 영역 로직이 실행
        try {
            // async, await 는 JS 함수의 실행순서를 고정하기 위해 사용.
            await Location.requestPermissionsAsync();
            const locationData = await Location.getCurrentPositionAsync();
            let latitude = locationData.coords.latitude;
            let longitude = locationData.coords.longitude;

            const API_KEY = 'bce322eab3bf5af0c8de62d724f1aa03'
            const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            const temp = result.data.main.temp;
            const condition = result.data.weather[0].main;
            setWeather({temp, condition})
        } catch (error) {
            console.log(error);
            Alert.alert('위치를 찾을 수 없습니다.', '앱을 재실행 해주세요.')
        }
    }


    const url = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
    const urlPizza = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'

    return ready ? <Loading/> : (
      <View>
        <ScrollView>
              <View style={styles.container}>
                <StatusBar style="auto"/>
                <View style={[styles.main, styles.b]}>
                    <View style={styles.infoBar}>
                      <Text style={styles.weather}>오늘의 날씨: {weather.temp+'°C '+weather.condition}</Text>
                      <TouchableOpacity style={styles.infoBtn} onPress={()=>{navigation.navigate('AboutPage')}}><Text style={styles.infoBtnText}>소개 페이지</Text></TouchableOpacity>
                    </View>
                    <Image style={styles.mainImage}source={{uri: url}}></Image>
                </View>
                <ScrollView horizontal={true} indicatorStyle={'white'}>
                    <View style={[styles.slider, styles.b]}>
                        <TouchableOpacity style={[styles.sliderBox, styles.deeppink]}onPress={()=>{a1()}}>
                            <Text style={styles.sliderText}>전체보기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.yellow]}onPress={()=>{category('생활')}}>
                            <Text style={styles.sliderText}>생활</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.coral]}onPress={()=>{category('재테크')}}>
                            <Text style={styles.sliderText}>재테크</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.green]}onPress={()=>{category('반려견')}}>
                            <Text style={styles.sliderText}>반려견</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.purple]}onPress={()=>{category('꿀팁 찜')}}>
                            <Text style={styles.sliderText}>꿀팁 찜</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sliderBox, styles.purple]}onPress={()=>{a1()}}>
                            <Text style={styles.sliderText}>TEST</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={[styles.cards, styles.b]}>
                {
                  cateState.map((val, i) => {
                      return (
                        <Card content={val} key={i} navigation={navigation}/>
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
        marginTop: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    weather : {
      textAlign: 'left',
      flex:9,
      height: 20
    },
    infoBar : {
        flexDirection: 'row',
        justifyContent:"space-around",
        alignItems: 'center'
    },
    infoBtn: {
        flex:2.5,
        width: '30%',
        height: 35,
        borderRadius: 13,
        backgroundColor: '#999',
        justifyContent:'center',
        alignItems:'center'
    },
    infoBtnText: {
        color: '#fff',
        fontWeight: 'bold'
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
        backgroundColor: '#9adbc5'
    },
    purple: {
        backgroundColor: '#f886a8'
    },
    deeppink: {
        backgroundColor: "deeppink"
    },
    sliderText: {
        fontSize: 17,
        color: "#fff"
    },
    cards: {
        width: '100%'
    },
    

    b: {
        // borderWidth: 1,
        // borderColor: '#000'
    }
});
