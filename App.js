import {NavigationContainer} from '@react-navigation/native';
import Footer from './uicomponents/Header_Footer_copy';
import Loading from './components/Loading';
import * as Font from 'expo-font';
import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, LogBox, SafeAreaView} from "react-native";

export default function App({style = {}}) {
    LogBox.ignoreLogs(['Sending']); //Sending 로그창 제외

    const [isLoadingAnimation, setIsLoadingAnimation] = useState(false); //로딩 화면 상태 변수
    const [isLoading, setIsLoading] = useState(true); //로딩 화면 상태 변수
    const [fontLoaded, setFontLoaded] = useState(false); //폰트 불러오기 상태 변수

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                mainFont: require('./assets/fonts/IBMPlexSansKR-SemiBold.ttf'), // 경로와 파일명 변경
            });

            setFontLoaded(true);
        }

        loadFonts();

        setTimeout(() => {
            setIsLoadingAnimation(true);

            setTimeout(() => {
                setIsLoading(false);
            }, 150);
        }, 2000);

    }, []);

    if (!fontLoaded || isLoading) {
        return <Loading isLoadingAnimation={isLoadingAnimation}/>; // 만약 폰트가 아직 로드되지 않았거나 초기 로딩 중이라면 Loading화면 출력
    }

    return (
        <Fragment>
            <NavigationContainer>
                <Footer/>
            </NavigationContainer>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container_bottom: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
});