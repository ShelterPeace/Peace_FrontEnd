import React from 'react';
import {View, Text, TouchableOpacity, Image,} from 'react-native';
import styles from '../styles/Settings/SettingsStyles'
import {Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.settings_option_mypage_container}>
                {/*프로필 이미지 박스*/}
                <View style={styles.settings_option_mypage_profile_img}>
                    <View style={styles.settings_option_mypage_profile_img_content}>
                        <Image style={styles.settings_option_mypage_profile_user_img}
                               source={require('../assets/img/user.png')}/>
                        <View style={styles.settings_option_mypage_profile_user_img_update_icon_div}>
                            <MaterialCommunityIcons name="pencil" style={styles.settings_option_mypage_profile_user_img_update_icon}/>
                        </View>
                    </View>
                </View>
                {/*프로필 이미지 박스*/}
                {/*프로필 정보 박스*/}
                <View style={styles.settings_option_mypage_profile_content}>
                    <View style={styles.settings_option_mypage_profile_name}>
                        <Text style={styles.settings_option_mypage_profile_name_text}>alsrb8452</Text>
                        <Text style={styles.settings_option_mypage_profile_name_text_2}>님</Text>
                    </View>
                    <View style={styles.settings_option_mypage_profile_button}>
                        <TouchableOpacity
                            style={[styles.settings_option_mypage_profile_button_user_update, {marginRight:10}]}
                            onPress={() => navigation.navigate('MychatScreen')}
                        >
                            <Text style={styles.settings_option_mypage_profile_button_user_update_text}>
                                내 정보 수정
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.settings_option_mypage_profile_button_user_update}
                            onPress={() => navigation.navigate('MychatScreen')}
                        >
                            <Text style={styles.settings_option_mypage_profile_button_user_update_text}>
                                로그아웃
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*프로필 정보 박스*/}
            </View>
            <View style={styles.container_in}>
                <View style={[styles.settings_option_container, {marginBottom:15}]}>
                    <Text style={styles.settings_option_title_text}>대피스</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('공지사항')}
                        style={styles.settings_option_menu}
                    >
                        <Entypo name="megaphone" style={[styles.settings_option_menu_text_icon, {fontSize: 17}]}/>
                        <Text style={styles.settings_option_menu_text}>공지사항</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('문의사항')}
                        style={styles.settings_option_menu}
                    >
                        <Entypo name="help-with-circle" style={[styles.settings_option_menu_text_icon, {fontSize: 17}]}/>
                        <Text style={styles.settings_option_menu_text}>문의사항</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.settings_option_container, {marginBottom:15}]}>
                    <Text style={styles.settings_option_title_text}>알림</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('대피소 알림 설정')}
                        style={styles.settings_option_menu}
                    >
                        <Ionicons  name="notifications-circle" style={styles.settings_option_menu_text_icon}/>
                        <Text style={styles.settings_option_menu_text}>대피소 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AED 알림 설정')}
                        style={styles.settings_option_menu}
                    >
                        <Ionicons  name="notifications-circle" style={styles.settings_option_menu_text_icon}/>
                        <Text style={styles.settings_option_menu_text}>AED 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('소화기 알림 설정')}
                        style={styles.settings_option_menu}
                    >
                        <Ionicons  name="notifications-circle" style={styles.settings_option_menu_text_icon}/>
                        <Text style={styles.settings_option_menu_text}>소화기 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('재난 문자 필터링 설정')}
                        style={styles.settings_option_menu}
                    >
                        <Entypo name="mail-with-circle" style={[styles.settings_option_menu_text_icon, {fontSize: 17}]}/>
                        <Text style={styles.settings_option_menu_text}>재난 문자 필터링 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.settings_option_container}>
                    <Text style={styles.settings_option_title_text}>관심 지역</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('관심 지역 설정')}
                        style={styles.settings_option_menu}
                    >
                        <MaterialCommunityIcons name="pencil" style={styles.settings_option_menu_text_icon}/>
                        <Text style={styles.settings_option_menu_text}>관심 지역 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}