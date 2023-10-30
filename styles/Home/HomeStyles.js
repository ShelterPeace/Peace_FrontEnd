import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 80,
        height: 20,
        marginTop: 8,
    },
    content_title: {
        width: '100%',
        height: 45,
        backgroundColor: '#ffb931',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        shadowColor: '#969696',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        zIndex: 2,
    },
    container_in: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
    },
    content_box_1: {
        flex: 1,
        backgroundColor: '#f3f3f3',
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