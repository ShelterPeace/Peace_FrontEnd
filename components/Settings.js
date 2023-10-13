import React from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
import styles from '../styles/Settings/SettingsStyles'
import {MaterialIcons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // Import this

export default function Settings() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <View style={styles.settings_option_title_container}>
                    <Text style={styles.settings_option_title_text}>대피스</Text>
                </View>
                <View style={styles.settings_option_container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('공지사항')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>공지사항</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>문의사항</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.settings_option_title_container, {marginTop:10}]}>
                    <Text style={styles.settings_option_title_text}>알림</Text>
                </View>
                <View style={styles.settings_option_container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>대피소 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>AED 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>소화기 알림 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
                        <Text style={styles.settings_option_menu_text}>재난 문자 필터링 설정</Text>
                        <MaterialIcons
                            name="navigate-next"
                            style={styles.settings_option_menu_icon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.settings_option_title_container, {marginTop:10}]}>
                    <Text style={styles.settings_option_title_text}>관심 지역</Text>
                </View>
                <View style={styles.settings_option_container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={styles.settings_option_menu}
                    >
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