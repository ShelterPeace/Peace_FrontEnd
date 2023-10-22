import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
    },
    settings_option_mypage_container: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row',

        borderTopWidth: 0,

        shadowColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 0.2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
        zIndex:2,
    },
    settings_option_mypage_profile_img: {
        width: 150,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settings_option_mypage_profile_img_content: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderColor: '#efefef',
        borderStyle: 'solid',
        borderWidth: 4,

        shadowColor: '#676767',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 3,
    },
    settings_option_mypage_profile_user_img: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    settings_option_mypage_profile_user_img_update_icon_div: {
        position: 'absolute',
        bottom: 0,
        right: -2,
        width: 24,
        height: 24,
        backgroundColor: '#858585',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    },
    settings_option_mypage_profile_user_img_update_icon: {
        color: 'white',
        fontSize: 14,
    },
    settings_option_mypage_profile_content: {
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
    },
    settings_option_mypage_profile_name: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        flexDirection:'row',
    },
    settings_option_mypage_profile_name_text: {
        fontFamily: 'mainFont',
        fontSize: 22,
        marginRight:2,
    },
    settings_option_mypage_profile_name_text_2:{
        fontSize: 13,
        marginTop:1,
    },
    settings_option_mypage_profile_button: {
        width: '100%',
        flex: 1,
        flexDirection:'row',
    },
    settings_option_mypage_profile_button_user_update: {
        width: 100,
        height: 30,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderColor:'#c2c2c2',
        borderWidth:1,
    },
    settings_option_mypage_profile_button_user_update_text:{
        fontSize:12,
        color:'#969696',
        fontFamily:'mainFont'
    },
    container_in: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 15,
    },
    settings_option_title_text: {
        fontSize: 14,
        fontFamily: "mainFont",
        marginLeft: 13,
        marginTop:10,
        marginBottom:10,
        color: '#575757'
    },
    settings_option_container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
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
    settings_option_menu: {
        width: '100%',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: "row",
    },
    settings_option_menu_text_icon:{
        fontSize: 16,
        color: '#818181',
        marginLeft: 30,
    },
    settings_option_menu_text: {
        fontSize: 14,
        fontFamily: "mainFont",
        marginLeft: 5,
        color: '#818181',
        lineHeight:20,
    },
    settings_option_menu_icon: {
        color: '#818181',
        fontSize: 18,
        position: 'absolute',
        right: 20,
    }
})