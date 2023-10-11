import {NavigationContainer, useNavigationState} from '@react-navigation/native';
import Home from './components/Home';
import Settings from './components/Settings';
import MychatScreen from './components/Map';
import MychatScreen2 from './components/Map2';
import MyPage from './components/MyPage';
import * as Font from 'expo-font';
import React, {useState, useEffect, Fragment, useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Ionicons, Octicons  } from '@expo/vector-icons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainNavigator() {
  const routeState = useNavigationState(state => state);
  let title;

  if (routeState !== undefined) {
    const routeName = routeState.routes[routeState.index]?.name;
    switch (routeName) {
      case 'Home':
        title = '모아보기';
        break;
      case 'MychatScreen':
        title = '지도';
        break;
      case 'MychatScreen2':
        title = '밀집도';
        break;
      case 'MyPage':
        title = '마이페이지';
        break;
      case 'Settings':
        title = '설정';
        break;
    }
  } else {
    // 초기 라우트 이름이 undefined일 때의 처리
    title = '모아보기';
  }

  const dynamicStyle = StyleSheet.create({
    content_title: {
      width: '100%',
      height: 45,
      backgroundColor: '#ffb931',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottomLeftRadius: title === "모아보기" ? 20 : 0,
      borderBottomRightRadius: title === "모아보기" ? 20 : 0,

      shadowColor: '#969696',
      shadowOffset: {width: 0, height: 7},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
      zIndex: 2,
    },
  });

  return (
      <View style={styles.content_title_back}>
        <View style={dynamicStyle.content_title}>
          <Text style={styles.content_title_text}>{title}</Text>
        </View>
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                backgroundColor: '#fff',
                paddingTop:10,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
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
                fontFamily: 'YourFontName',
              },
            }}
        >
          <Tab.Screen
              name="MychatScreen"
              component={MychatScreen}
              options={{
                tabBarIcon: ({color,focused }) => (
                    <Ionicons name={focused ? "map" : "map-outline"} size={20} color={color}/>
                ),
                tabBarLabel: '지도', headerShown: false
              }}
          />
          <Tab.Screen
              name="MychatScreen2"
              component={MychatScreen2}
              options={{
                tabBarIcon: ({color,focused}) => (
                    <Ionicons name={focused ? "map" : "map-outline"} size={20} color={color}/>
                ),
                tabBarLabel: '밀집도', headerShown: false
              }}
          />
          <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color,focused}) => (
                    <Ionicons name={focused ? "home" : "home-outline"} size={20} color={color}/>
                ),
                tabBarLabel: '홈', headerShown: false
              }}
          />
          <Tab.Screen
              name="MyPage"
              component={MyPage}
              options={{
                tabBarIcon: ({color,focused}) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={20} color={color}/>
                ),
                tabBarLabel: '마이페이지', headerShown: false
              }}
          />
          <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({color,focused}) => (
                    <Ionicons name={focused ? "settings" : "settings-outline"} size={20} color={color}/>
                ),
                tabBarLabel: '설정', headerShown: false
              }}
          />
        </Tab.Navigator>
      </View>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        YourFontName: require('./assets/fonts/IBMPlexSansKR-SemiBold.ttf'), // 경로와 파일명 변경
      });

      setFontLoaded(true);
    }

    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null;
  }

  return (
      <Fragment>
        <SafeAreaView style={styles.container_top}/>
        <SafeAreaView style={styles.container_bottom}>
          <NavigationContainer>
            <MainNavigator/>
          </NavigationContainer>
        </SafeAreaView>
      </Fragment>
  );
  //a
}

const styles = StyleSheet.create({
  container_top: {
    flex: 0,
    backgroundColor: '#ffb931',
  },
  container_bottom: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between', // 메인 컨테이너 내의 요소들을 상하로 분리
  },
  content_title_back: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  content_title_text: {
    fontSize: 28,
    marginLeft: 20,
    fontFamily: 'YourFontName',
    color: 'black',
  },
});