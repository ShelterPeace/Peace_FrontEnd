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

export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>알림</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    container_in: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 15,
    },
});