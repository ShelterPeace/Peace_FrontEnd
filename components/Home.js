import {View, StyleSheet, ScrollView, Animated, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import News from './Home_components/News';
import Shelter from './Home_components/Shelter';
import Aed from './Home_components/Aed';
import Fire from './Home_components/Fire';
import SafeAreaComponent from '../uicomponents/SafeAreaComponent';
import styles from '../styles/Home/HomeStyles';
import React, {useState, useEffect} from 'react';
import logo from '../assets/img/logo_black_only_text.png';

export default function HomeScreen({style = {}}) {
    const [fadeAnim] = useState(new Animated.Value(0))  // Home 초기 상태

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1, // 최종 상태: 완전 불투명
                duration: 150, // 전환 시간: 2초
                useNativeDriver: true,
            }
        ).start();
    }, []);

    return (
        <>
            <SafeAreaComponent/>
            <View style={styles.content_title}>
                <Image style={styles.logo}
                       source={logo}
                       resizeMode="contain"/>
            </View>
            <Animated.View style={[{...style, opacity: fadeAnim}, styles.container_in]}>
                <View style={styles.content_box_1}>
                    <ScrollView
                        bounces={true}
                        contentContainerStyle={{flexGrow: 1}}
                        showsVerticalScrollIndicator={false}
                        style={styles.viewScroll}
                    >
                        <News/>
                        <View style={styles.content_box_2}>
                            <View style={styles.content_main_box_1}>
                                <View style={styles.content_main_box_2}>
                                    <Shelter/>
                                </View>
                            </View>
                            <View style={{height: 15}}></View>
                            <View style={styles.content_main_box_1}>
                                <View style={styles.content_main_box_2}>
                                    <Aed/>
                                </View>
                            </View>
                            <View style={{height: 15}}></View>
                            <View style={styles.content_main_box_1}>
                                <View style={styles.content_main_box_2}>
                                    <Fire/>
                                </View>
                            </View>
                            <View style={{height: 15}}></View>
                            {/*<View style={styles.content_weather_box_1}>*/}
                            {/*    <View style={[styles.content_weather_box_2, {paddingRight: 7.5}]}>*/}
                            {/*        <View style={styles.content_weather_box_3}>*/}
                            {/*            <Weather/>*/}
                            {/*        </View>*/}
                            {/*    </View>*/}
                            {/*    <View style={[styles.content_weather_box_2, {paddingLeft: 7.5}]}>*/}
                            {/*        <View style={styles.content_weather_box_3}>*/}
                            {/*            <Weather_interest/>*/}
                            {/*        </View>*/}
                            {/*    </View>*/}
                            {/*</View>*/}
                            <View style={{height: 65}}></View>
                        </View>
                    </ScrollView>
                    <StatusBar style="auto"/>
                </View>
            </Animated.View>
        </>
    );
}