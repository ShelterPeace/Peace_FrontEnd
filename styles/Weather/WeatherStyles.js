import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container_header:{
        backgroundColor:'#f3f3f3',
        height: 110,
    },
    container_header_bell:{
        justifyContent:'center',
        alignItems:'center',
    },
    container_header_bell_text:{
        fontSize:20,
        fontFamily:'mainFont',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
    },
    container_in: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 15,
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
})