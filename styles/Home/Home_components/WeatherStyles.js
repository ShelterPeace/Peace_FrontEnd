import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content_div_1_2_weather_1_1: {
        width: '100%',
        height: 34,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: "row",
    },
    content_div_1_2_weather_1_1_text: {
        fontSize: 15,
        fontFamily: 'mainFont',
        marginLeft: 15,
        color:"#3f3f3f"
    },
    content_div_1_2_weather_1_1_settings: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    content_div_1_2_weather_1_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_div_1_2_weather_1_2_text:{
        position:"absolute",
        top:3,
        left:15,
        fontFamily:"mainFont",
        fontSize:20,
        color:"#626262"
    },
    content_div_1_2_weather_1_2_text2:{
        position:"absolute",
        bottom:10,
        right:10,
        fontFamily:"mainFont",
        fontSize:14,
        color:"#626262"
    },
});