// Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function FooterComponent({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('MychatScreen')}
      >
        <Feather name="map" size={25} color="#5e5e5e" />
        <Text style={styles.item_text}>지도</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Feather name="map" size={25} color="#5e5e5e" />
        <Text style={styles.item_text}>밀집도</Text>
      </View>
      <View style={styles.item}>
        <Feather name="home" size={25} color="#5e5e5e" />
        <Text style={styles.item_text}>홈</Text>
      </View>
      <View style={styles.item}>
        <Feather name="user" size={25} color="#5e5e5e" />
        <Text style={styles.item_text}>마이페이지</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.item_last}
      >
        <Ionicons name="settings-outline" size={25} color="#5e5e5e" />
        <Text style={styles.item_text}>설정</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#484848',
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    width: 39,
    marginRight: 35,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_last: {
    width: 30,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_text: {
    fontSize: 11,
    color: '#5e5e5e',
    marginTop: 5,
  },
});
