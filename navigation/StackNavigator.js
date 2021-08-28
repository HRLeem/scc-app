import React from 'react';
// 설치한 스택 네이게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack'

// 페이지로 만든 컴포넌트들을 불러옵니다
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ZzimPage from '../pages/ZzimPage';

// 스택 네비게이션 라이브러리가 제공해주는 여러 가능이 담겨있는 객체를 사용
// 그래서 이렇게 항상 상단에 선언하고 시작하는 것이 규칙
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (

        // 컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언
        // 위에서 선언한, const Stack = createStackNavigator(); Stack 변수에 둘어있는 태그를 꺼내 사용
        // Stack.Navigator 태그 내부엔, 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
        <Stack.Navigator
            screenOptions = {{
                headerStyle: {
                    backgroundColor: 'white',
                    borderBottomColor: 'white',
                    shadowColor: 'white',
                    height: 100,
                },
                headerTitleAlign: 'left',
                headerTintColor: '#000',
                headerBackTitleVisible: false,
            }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트를 """끼워 넣습니다.""" 이 자체로 이제 페이지 기능을 합니다. */}
            <Stack.Screen name="ZzimPage" component={ZzimPage}/>
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;