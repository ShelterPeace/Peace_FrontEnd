import React, {useEffect, useRef, useState} from 'react';
import { Image, View, Text, StyleSheet, Animated } from 'react-native';

export default function Loading({ isLoadingAnimation }) {
    const [fadeAnim] = useState(new Animated.Value(1))  // Home 초기 상태
    const [fadeAnimLogo] = useState(new Animated.Value(0))  // Home 초기 상태

    useEffect(() => {
    Animated.timing(
        fadeAnimLogo,
        {
            toValue: 1, // 최종 opacity 값: 0 (완전 투명)
            duration: 500, // 전환 시간: 2초
            useNativeDriver: true,
        }
    ).start();
    }, []);

    useEffect(() => {
        if (isLoadingAnimation) { // 로딩이 끝나면 실행
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0, // 최종 opacity 값: 0 (완전 투명)
                    duration: 150, // 전환 시간: 2초
                    useNativeDriver: true,
                }
            ).start();
        }
    }, [fadeAnim, isLoadingAnimation]);

    return (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
            <Animated.Image style={[styles.logo, {opacity: fadeAnimLogo}]}
                   source={require('../assets/img/logo_black.png')}/>
            <Text style={styles.loading_text}>@bitfamily</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb931',
    },
    title: {
        fontSize: 70,
        fontWeight: '700',
    },
    logo:{
        width:135,
        height:130,
        borderRadius:10,
    },
    loading_text:{
        position:'absolute',
        bottom:60,
    }
})