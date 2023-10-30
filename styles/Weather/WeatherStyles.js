import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(243,243,243,0)',
    },
    container_in: {
        flex: 1,
        backgroundColor: 'rgba(157,86,86,0)',
        padding: 15,
    },
    container_header:{
        backgroundColor:'rgba(243,243,243,0)',
    },
    container_header_bell:{
        justifyContent:'center',
        alignItems:'center',
    },
    container_header_bell_text:{
        fontSize:20,
        fontFamily:'mainFont',
        color:'#545454'
    },
    content_weather_box_1: {
        width: '100%',
        height: 170,
        flexDirection: "row",
    },
    content_weather_box_2: {
        width: '50%',
        height: '100%',
    },
    content_weather_box_3: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,

        shadowColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
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
})