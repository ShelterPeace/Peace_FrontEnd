import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewPager: {
        width: '100%',
        height: 170,
        padding: 10,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content_news_previous: {
        position: 'absolute',
        top: '50%',
        left: 10,
        transform: [{translateY: -15}],
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_next: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: [{translateY: -15}],
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_out: {
        flex: 1,
        padding: 15,
    },
    content_news: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,

        backgroundColor: 'white',
        shadowColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    content_news_imgDiv: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_img: {
        width: '80%',
        height: '80%',
    },
    content_news_TitleContentDiv: {
        width: '70%',
        height: '100%',
    },
    content_news_title: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 0,
        paddingRight: 10,
    },
    content_news_content: {
        width: '100%',
        height: '45%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0,
        paddingLeft: 0,
    },
    content_news_footerDiv: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 20,
        flexDirection: 'row',
    },
    content_news_footer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_footer_text: {
        fontSize: 11,
        color: '#939393',
        marginLeft: 10,
    },
    content_news_footer_date: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});