import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

export default function MychatScreen2({navigation}) {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                ...region,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();
    }, []);

    return (
        <>
            <View style={{height: 10, backgroundColor:'#eaeaea'}}/>
            <MapView style={{flex: 1}} region={region}>
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="My Location"
                    pinColor='black'
                />
            </MapView>
            <View style={{height: 70, backgroundColor:'#eaeaea'}}/>
        </>
    );
}
