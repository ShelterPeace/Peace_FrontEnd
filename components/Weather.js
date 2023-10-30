import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Weather_interest from './Weather_components/Weather_interest';
import Weather_main from './Weather_components/Weather';
import styles from '../styles/Weather/WeatherStyles';

export default function Weather({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <View style={styles.container_header_bell}>
                    <Text style={styles.container_header_bell_text}>오늘은 뜨끈한 국밥 먹기 좋은날 ~</Text>
                </View>
            </View>
            <View style={styles.container_in}>
                <View style={styles.content_weather_box_1}>
                    <View style={[styles.content_weather_box_2, {paddingRight: 7.5}]}>
                        <View style={styles.content_weather_box_3}>
                            <Weather_main/>
                        </View>
                    </View>
                    <View style={[styles.content_weather_box_2, {paddingLeft: 7.5}]}>
                        <View style={styles.content_weather_box_3}>
                            <Weather_interest/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}