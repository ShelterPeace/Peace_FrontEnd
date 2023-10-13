import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

export default function Shelter_Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.container_in}>
                <Text>대피소 설정</Text>
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