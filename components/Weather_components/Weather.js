import {View, Text, Image} from 'react-native';
import React from "react";
import styles from '../../styles/Weather/WeatherStyles';

export default function Weather() {

    return (
        <>
            <View style={styles.content_div_1_2_weather_1_1}>
                <Text style={styles.content_div_1_2_weather_1_1_text}>현재 지역 날씨</Text>
            </View>
            <View style={styles.content_div_1_2_weather_1_2}>
                <Text style={styles.content_div_1_2_weather_1_2_text}>구리시</Text>
                <Text style={styles.content_div_1_2_weather_1_2_text2}>구름 17°C</Text>
                <Image
                    style={[{width: 70, height: 70}]}
                    source={require('../../assets/weather_icon/cloud.png')}/>
            </View>
        </>
    )
}