import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

export default function Inquiry() {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>문의사항</Text>
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