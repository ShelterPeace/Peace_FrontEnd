import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {parseString} from 'react-native-xml2js';

export default function MychatScreen({navigation}) {
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isMarkersVisible, setIsMarkersVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleButton1Press = async () => {
    if (isMarkersVisible) {
      setMarkers([]);
      setIsMarkersVisible(false);
    } else {
      await shelterMarkers();
      setIsMarkersVisible(true);
    }
  };

  const handleButton2Press = async () => {
    if (isMarkersVisible) {
      setMarkers([]);
      setIsMarkersVisible(false);
    } else {
      await aedMarkers();
      setIsMarkersVisible(true);
    }
  };
  // 대피소
  const shelterMarkers = async () => {
    // API 주소 변경
    const apiUrl =
        'https://apis.data.go.kr/1741000/EmergencyAssemblyArea_Earthquake2/getArea1List?serviceKey=l1%2B1VLJ5U%2BI%2ByRXyHB%2FmTXGXMBz4N7pFSv%2FcjcTFIcXxbUODsvcrXmH7wLoLi3Dplklqs1qMzEiESQ0vnpYB0A%3D%3D&pageNo=1&numOfRows=5000&type=json';

    try {
      console.log(apiUrl)
      const response = await fetch(apiUrl);
      console.log(response);
      const data = await response.json();
      console.log(data);

      // 데이터 구조 변경에 따른 코드 수정
      const newMarkers = data.EarthquakeOutdoorsShelter[1].row.map(item => ({
        latitude: parseFloat(item.ycord),
        longitude: parseFloat(item.xcord),
      }));

      setMarkers(newMarkers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 심장제세동기
  const aedMarkers = async () => {
    const apiUrl =
        'https://apis.data.go.kr/B552657/AEDInfoInqireService/getAedFullDown?serviceKey=l1%2B1VLJ5U%2BI%2ByRXyHB%2FmTXGXMBz4N7pFSv%2FcjcTFIcXxbUODsvcrXmH7wLoLi3Dplklqs1qMzEiESQ0vnpYB0A%3D%3D&pageNo=1&numOfRows=10';
    try {
      const response = await fetch(apiUrl);
      const data = await response.text();

      parseString(data, (err, result) => {
        if (err) {
          console.error('XML 파싱 에러:', err);
          return;
        }

        const items = result.response.body[0].items[0].item;
        const newMarkers = items.map(item => ({
          latitude: parseFloat(item.wgs84Lat[0]),
          longitude: parseFloat(item.wgs84Lon[0]),
        }));

        setMarkers(newMarkers);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!region) {
    return null;
  }

  return (
      <>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="대피소" onPress={handleButton1Press} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="심장제세동기" onPress={handleButton2Press} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="버튼3" onPress={() => {}} />
          </View>
        </View>
        <MapView style={{flex: 1}} region={region}>
          {markers.map((marker, index) => (
              <Marker key={index} coordinate={marker} />
          ))}
          {region && (
              //현재 내 위치 노란색으로 마커
              <Marker
                  coordinate={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                  }}
                  pinColor={'yellow'} // 노란색으로 설정
              />
          )}
        </MapView>
      </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  buttonWrapper: {
    marginLeft: 10,
  },
});