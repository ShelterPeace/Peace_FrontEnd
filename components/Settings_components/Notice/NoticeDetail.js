import React from 'react';
import {View, Text } from 'react-native';
import styles from '../../../styles/Settings/Settings_components/NoticeStyles'
export default function NoticeDetail({ route }) {
    const { notice } = route.params;

    return (
        <View style={{backgroundColor:'white', flex:1}}>
            <View style={styles.notice_detial_box}>
                <Text style={styles.notice_detial_title_text}>{notice.title}</Text>
                <Text style={styles.notice_detial_date_text}>{notice.date}</Text>
                <View style={styles.notice_detia_line}></View>
            </View>
            <View style={styles.notice_detial_content_box}>
                <View style={styles.notice_detial_content_box_in}>
                    <Text style={styles.notice_detial_content_text}>
                        안녕하세요, 대피스입니다.{"\n"}
                        더욱 나은 서비스 제공을 위하여 서버 점검을 진행할 예정입니다.{"\n"}
                        {"\n"}
                        ▶ 점검 일시 : 2023 10월 23일 (금){"\n"}
                        ▶ 점검 시간 : 오전 03시 30분~05시 40분{"\n"}
                        (※ 점검 시간은 상황에 따라 연장될 수 있습니다.){"\n"}
                        {"\n"}
                        서비스 이용에 불편을 끼쳐 죄송하며, 너른 양해를 부탁드립니다.{"\n"}
                        {"\n"}
                        감사합니다
                    </Text>
                </View>
            </View>
        </View>
    );
}