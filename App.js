import {NavigationContainer} from '@react-navigation/native';
import Footer from './uicomponents/Footer';
import Loading from './components/Loading';
import * as Font from 'expo-font';
import React, {useState, useEffect, Fragment} from 'react';
import {View, SafeAreaView, StyleSheet} from "react-native";

export default function App({style = {}}) {
    const [isLoadingAnimation, setIsLoadingAnimation] = useState(false); //로딩 화면 상태 변수
    const [isLoading, setIsLoading] = useState(true); //로딩 화면 상태 변수
    const [fontLoaded, setFontLoaded] = useState(false); //폰트 불러오기 상태 변수

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                YourFontName: require('./assets/fonts/IBMPlexSansKR-SemiBold.ttf'), // 경로와 파일명 변경
            });

            setFontLoaded(true);
        }

        loadFonts();

        setTimeout(() => {
            setIsLoadingAnimation(true);

            setTimeout(() => {
                setIsLoading(false);
            }, 250);
        }, 2000);

    }, []);


    if (!fontLoaded || isLoading) {
        return <Loading isLoadingAnimation={isLoadingAnimation}/>; // 만약 폰트가 아직 로드되지 않았거나 초기 로딩 중이라면 Loading화면 출력
    }

    return (
        <Fragment>
            <SafeAreaView style={styles.container_top}/>
            <SafeAreaView style={styles.container_bottom}>
                <NavigationContainer>
                    <Footer/>
                </NavigationContainer>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container_top: {
        flex: 0,
        backgroundColor: '#ffb931',
    },
    container_bottom: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
});