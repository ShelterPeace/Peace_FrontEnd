import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {useNavigationState} from "@react-navigation/native";
import MychatScreen from "../components/Map";
import MychatScreen2 from "../components/Map2";
import Home from "../components/Home";
import MyPage from "../components/MyPage";
import Settings from "../components/Settings";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import Notice from '../components/Settings_components/Notice';
import Inquiry from "../components/Settings_components/Inquiry";
import Shelter_Settings from "../components/Settings_components/Shelter_Settings";
import AED_Settings from "../components/Settings_components/AED_Settings";
import Fire_Settings from "../components/Settings_components/Fire_Settings";
import Message_Settings from "../components/Settings_components/Message_Settings";
import Interest_Place_Settings from "../components/Settings_components/Interest_Place_Settings";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//공통 옵션 설정
const commonOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: '#eaeaea',
        borderStyle: 'solid',
        shadowColor: '#c2c2c2',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    headerTintColor: '#575757',
    headerTitleStyle: {
        fontFamily: 'mainFont',
    },
    headerBackTitleStyle: {
        fontSize: 12,
        fontFamily: 'mainFont',
    },
    headerBackImage: () => <MaterialIcons name="navigate-before" style={styles.backIcon}/>,
};

function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="설정" component={Settings} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="공지사항" component={Notice} options={commonOptions}/>
            <Stack.Screen name="문의사항" component={Inquiry} options={commonOptions}/>
            <Stack.Screen name="대피소 알림 설정" component={Shelter_Settings} options={commonOptions}/>
            <Stack.Screen name="AED 알림 설정" component={AED_Settings} options={commonOptions}/>
            <Stack.Screen name="소화기 알림 설정" component={Fire_Settings} options={commonOptions}/>
            <Stack.Screen name="재난 문자 필터링 설정" component={Message_Settings} options={commonOptions}/>
            <Stack.Screen name="관심 지역 설정" component={Interest_Place_Settings} options={commonOptions}/>
        </Stack.Navigator>
    );
}

export default function FooterComponent({safeAreaView}) {
    const routeState = useNavigationState(state => state); // 현재 선택 중인 navigation
    const [isTitle, setIsTitle] = useState(false); //타이블 보이기/숨기기
    const [isTitleColor, setIsTitleColor] = useState('#ffb931'); //타이블 보이기/숨기기

    useEffect(() => {
        if (routeState !== undefined) {
            const routeName = routeState.routes[routeState.index]?.name;
            switch (routeName) {
                case 'Home':
                    setIsTitle(true);
                    safeAreaView(false, true);
                    setIsTitleColor('#ffb931');
                    break;
                case 'MychatScreen':
                    setIsTitle(false);
                    safeAreaView(true, false);
                    setIsTitleColor('#eaeaea');
                    break;
                case 'MychatScreen2':
                    setIsTitle(false);
                    safeAreaView(true, false);
                    setIsTitleColor('#eaeaea');
                    break;
                case 'MyPage':
                    setIsTitle(false);
                    safeAreaView(false, false);
                    setIsTitleColor('#eaeaea');
                    break;
                case 'Settings':
                    setIsTitle(false);
                    safeAreaView(false, false);
                    setIsTitleColor('white');
                    break;
            }
        } else {
            // 초기 라우트 이름이 undefined일 때의 처리
            setIsTitle(true);
            safeAreaView(false, true);
            setIsTitleColor('#ffb931');
        }
    }, [routeState]);

    const dynamicStyle = StyleSheet.create({
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
        ios_bar_top: {
            flex: 0,
            backgroundColor: isTitleColor,
        },
        ios_bar: {
            flex: 1,
            backgroundColor: 'white',
        },
    });

    return (
        <>
            <SafeAreaView style={dynamicStyle.ios_bar_top}></SafeAreaView>
            <SafeAreaView style={dynamicStyle.ios_bar}>
                <View style={styles.content_title_back}>
                    {
                        isTitle && <View style={dynamicStyle.content_title}>
                            <Image style={styles.logo}
                                   source={require('../assets/img/logo_black_only_text.png')} resizeMode="contain"/>
                        </View>
                    }
                    <Tab.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            tabBarActiveTintColor: 'black',
                            tabBarInactiveTintColor: 'gray',
                            tabBarStyle: {
                                position: "absolute",
                                bottom: 0,
                                backgroundColor: '#fff',
                                paddingTop: 10,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                shadowColor: '#484848',
                                shadowOffset: {
                                    width: 0,
                                    height: -6,
                                },
                                shadowOpacity: 0.08,
                                shadowRadius: 4,
                                elevation: 3,
                            },
                            tabBarLabelStyle: {
                                fontSize: 10,
                                fontWeight: 'bold',
                                fontFamily: 'mainFont',
                            },
                        }}
                    >
                        <Tab.Screen
                            name="MychatScreen"
                            component={MychatScreen}
                            options={{
                                tabBarIcon: ({color, focused}) => (
                                    <Ionicons name={focused ? "map" : "map-outline"} size={20} color={color}/>
                                ),
                                tabBarLabel: '지도', headerShown: false
                            }}
                        />
                        <Tab.Screen
                            name="MychatScreen2"
                            component={MychatScreen2}
                            options={{
                                tabBarIcon: ({color, focused}) => (
                                    <Ionicons name={focused ? "map" : "map-outline"} size={20} color={color}/>
                                ),
                                tabBarLabel: '밀집도', headerShown: false
                            }}
                        />
                        <Tab.Screen
                            name="Home"
                            component={Home}
                            options={{
                                tabBarIcon: ({color, focused}) => (
                                    <Ionicons name={focused ? "home" : "home-outline"} size={20} color={color}/>
                                ),
                                tabBarLabel: '홈', headerShown: false
                            }}
                        />
                        <Tab.Screen
                            name="MyPage"
                            component={MyPage}
                            options={{
                                tabBarIcon: ({color, focused}) => (
                                    <Ionicons name={focused ? "person" : "person-outline"} size={20} color={color}/>
                                ),
                                tabBarLabel: '마이페이지', headerShown: false
                            }}
                        />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsStack}
                            options={{
                                tabBarIcon: ({color, focused}) => (
                                    <Ionicons name={focused ? "settings" : "settings-outline"} size={20} color={color}/>
                                ),
                                tabBarLabel: '설정', headerShown: false
                            }}
                        />
                    </Tab.Navigator>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    content_title_back: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    logo: {
        width: 80,
        height: 20,
        marginTop: 8,
    },
    backIcon: {
        marginLeft: 10,
        fontSize: 20,
        color: '#575757'
    }
});