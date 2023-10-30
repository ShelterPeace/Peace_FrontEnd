import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../../styles/Weather/WeatherStyles';
import React from "react";
export default function Weather() {

    return (
        <>
            <View style={styles.content_div_1_2_weather_1_1}>
                <Text style={styles.content_div_1_2_weather_1_1_text}>관심 지역 날씨</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    style={styles.content_div_1_2_weather_1_1_settings}
                >
                    <Ionicons name="settings-outline" size={13} color="#5e5e5e"/>
                </TouchableOpacity>
            </View>
            <View style={styles.content_div_1_2_weather_1_2}>
                <Text style={styles.content_div_1_2_weather_1_2_text}>은평구</Text>
                <Text style={styles.content_div_1_2_weather_1_2_text2}>맑음 22°C</Text>
                <Image
                    style={[{width: 70, height: 70}]}
                    source={require('../../assets/weather_icon/sun.png')}/>
            </View>
        </>
    )
}