import React from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

export default function MyPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>마이페이지</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
    },
    container_in: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 15,
    },
});