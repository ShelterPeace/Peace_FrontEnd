import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Settings from './components/Settings';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import MychatScreen from './components/Map';

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MychatScreen" component={MychatScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
