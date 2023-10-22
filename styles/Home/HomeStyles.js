import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container_in: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
    },
    content_box_1: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content_box_2: {
        width: '100%',
        flex: 1,
    },
    viewScroll: {
        width: '100%',
        height: '100%',
    },
    content_main_box_1: {
        width: '100%',
        height: 130,
        paddingLeft: 15,
        paddingRight: 15,
    },
    content_main_box_2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,

        borderStyle: 'solid',
        borderColor: '#b7b7b7',
        borderWidth: 0.2,

        shadowColor: '#c2c2c2',
        shadowOffset: {
            width: 0,
            height: 0.5, // 음수 값을 사용하면 그림자가 위로 올라감
        },
        shadowOpacity: 0.5, // CSS의 box-shadow에서 alpha 값에 해당
        shadowRadius: 2, // blur radius에 해당
        elevation: 3,
    },
    content_weather_box_1: {
        width: '100%',
        height: 170,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
    },
    content_weather_box_2: {
        width: '50%',
        height: '100%',
    },
    content_weather_box_3: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,

        borderStyle: 'solid',
        borderColor: '#b7b7b7',
        borderWidth: 0.2,

        shadowColor: '#c2c2c2',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
})