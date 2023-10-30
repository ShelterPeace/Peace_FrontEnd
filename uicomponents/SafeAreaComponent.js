import React, {Fragment} from 'react';
import {
    View,
    Text, SafeAreaView, StyleSheet,
} from 'react-native';

export default function SafeAreaComponent() {
    return (
        <>
            <SafeAreaView style={styles.ios_bar_top}></SafeAreaView>
            <SafeAreaView style={styles.ios_bar}>
            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    content_title_back: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    logo: {
        width: 80,
        height: 20,
        marginTop: 8,
    },
    backIcon: {
        marginLeft: 10,
        fontSize: 17,
        color: '#575757'
    },
    ios_bar_top: {
        flex: 0,
        backgroundColor: '#ffb931',
    },
    ios_bar: {
        flex: 1,
        backgroundColor: 'white',
    },
});

