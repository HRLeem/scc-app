import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View,Dimensions,ScrollView,TouchableOpacity,Image} from 'react-native';
import data from '../data.json'

import Card from '../components/Card'
import Loading from '../components/Loading'

// test
import axios from 'axios';
// test

const windowWidth = Dimensions.get('window').width ;
export default function MainPage() {
    console.disableYellowBox = true;

    const [state, setState] = useState([]);
    // 1 컴포넌트, n 스테이트 가능. 이름은 내마음
    // const [statename, setStatename] = useState(초기값);
    // 여기서 초기값은 [리스트, trueFalse, 딕셔너리, 숫자, 문자] 다 가능
    const [ready, setReady] = useState(true);
    const [cateState, setCateState] = useState([])

    useEffect(() => {
        setTimeout(()=> {
            let tip = data.tip;
            setState(tip);
            setCateState(tip);
            setReady(false);
        }, 1000)
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
        alert('h1')
    }


    const url = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
    const urlPizza = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'
    let todayWeather = 27;
    let todayCondition = '흐림'

    return ready ? <Loading/> : (
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
                    </View>
                </ScrollView>
                <View style={[styles.cards, styles.b]}>
                {
                  cateState.map((val, i) => {
                      return (
                        <Card content={val} key={i}/>
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
