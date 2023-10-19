import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    settings_option_mypage_container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop:20,
        backgroundColor:"#ffffff",

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height:0,
        },
        shadowOpacity: 100,
        shadowRadius: 5,
        elevation: 3,
        zIndex:2,
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
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
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