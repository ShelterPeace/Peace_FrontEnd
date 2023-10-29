import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../../styles/Settings/Settings_components/NoticeStyles'
import { useNavigation } from '@react-navigation/native';

export default function Notice() {
    const navigation = useNavigation();

    const notices = [
        {id: '1', type: '안내', title: '서비스 점검 안내(10/23 03:30~05:40)', date: '2023. 10. 23'},
        {id: '2', type: '안내', title: '서비스 점검 안내(10/17 03:30~06:00)', date: '2023. 10. 17'},
        {id: '3', type: '안내', title: '대피스 개인정보처리방침 변경 안내', date: '2023. 10. 15'},
        {id: '4', type: '이벤트', title: '9월 설문조사 이벤트', date: '2023. 09. 30'},
        {id: '5', type: '이벤트', title: '8월 설문조사 이벤트', date: '2023. 08. 30'},
        {id: '6', type: '이벤트', title: '7월 설문조사 이벤트', date: '2023. 07. 30'},
        {id: '7', type: '안내', title: '서비스 점검 안내(07/15 03:30~05:00)', date: '2023. 07. 15'},
        {id: '8', type: '이벤트', title: '6월 설문조사 이벤트', date: '2023. 06. 30'},
        {id: '9', type: '이벤트', title: '5월 설문조사 이벤트', date: '2023. 05. 30'},
        {id: '10', type: '이벤트', title: '4월 설문조사 이벤트', date: '2023. 04. 30'},
        {id: '11', type: '이벤트', title: '3월 설문조사 이벤트', date: '2023. 03. 30'},
        {id: '12', type: '이벤트', title: '2월 설문조사 이벤트', date: '2023. 02. 30'},
        {id: '13', type: '이벤트', title: '1월 설문조사 이벤트', date: '2023. 01. 30'},
        {id: '14', type: '이벤트', title: '12월 설문조사 이벤트', date: '2022. 12. 30'},
        {id: '15', type: '이벤트', title: '11월 설문조사 이벤트', date: '2022. 11. 30'},
    ];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    function navigateToNoticeDetail(notice) {
        navigation.navigate('NoticeDetail',{notice});
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <FlatList
                    data={notices}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) => {
                        const backgroundColor = item.type === '안내' ? '#6c6c6c' : item.type === '이벤트' ? '#3bb428' : '#fff';
                        // 공지사항의 날짜를 Date 객체로 변환
                        const noticeDateParts = item.date.split('.').map(Number);
                        const noticeDate = new Date(noticeDateParts[0], noticeDateParts[1] - 1, noticeDateParts[2]);
                        // 연도, 월, 일을 비교
                        const isNew =
                            noticeDate.getFullYear() === year &&
                            (noticeDate.getMonth() + 1) === month &&
                            noticeDate.getDate() === date;

                        return (
                            <TouchableOpacity onPress={() => navigateToNoticeDetail(item)}
                                              style={styles.notice_container_list}>
                                <Text
                                    style={[styles.notice_list_type_text, {color: backgroundColor}]}>{item.type}</Text>
                                <View style={{flexDirection: "row", alignItems: 'center'}}>
                                    {isNew &&
                                        <Text style={styles.notice_list_new_text}>NEW</Text>
                                    }
                                    <Text style={styles.notic_list_title_text}>{item.title}</Text>
                                </View>
                                <Text style={styles.notice_list_date_text}>{item.date}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
}