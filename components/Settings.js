import React from 'react';
import { Button } from 'react-native';

export default function Settings({ navigation }) {
    return (
        <Button title="Go back" onPress={() => navigation.goBack()} />
    );
}