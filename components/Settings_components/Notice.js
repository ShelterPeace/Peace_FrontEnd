import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

export default function Notice() {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>공지사항</Text>
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