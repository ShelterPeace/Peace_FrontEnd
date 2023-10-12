import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function Loading({ isLoadingAnimation }) {
    const fadeAnim = useRef(new Animated.Value(1)).current; // 초기 opacity 값: 1

    useEffect(() => {
        if (isLoadingAnimation) { // 로딩이 끝나면 실행
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0, // 최종 opacity 값: 0 (완전 투명)
                    duration: 250, // 전환 시간: 2초
                    useNativeDriver: true,
                }
            ).start();
        }
    }, [fadeAnim, isLoadingAnimation]);

    return (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
            <Text style={styles.title}>대피스</Text>
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
})