import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

export default function Message_Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>재난 문자 필터링 설정</Text>
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