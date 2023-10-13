import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    container_in: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 15,
    },
    settings_option_title_container: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom:10,
    },
    settings_option_title_text: {
        fontSize: 19,
        fontFamily: "mainFont",
        marginLeft: 15,
        color: '#575757'
    },
    settings_option_container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius:10,
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
    settings_option_menu: {
        width:'100%',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:"row",
    },
    settings_option_menu_text:{
        fontSize: 14,
        fontFamily: "mainFont",
        marginLeft: 30,
        color: '#818181'
    },
    settings_option_menu_icon:{
        color: '#818181',
        fontSize: 18,
        position:'absolute',
        right:20,
    }
})