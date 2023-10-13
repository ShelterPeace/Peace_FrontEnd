import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import styles from '../../styles/Home/Home_components/Shelter_Aed_Fire_Styles';

export default function Shelter() {
    return (
        <>
            <View style={styles.content_div_1_2_title}>
                <Image
                    style={[styles.content_div_1_2_title_img, {width: 19, height: 19}]}
                    source={require('../../assets/img/fire.png')}/>
                <Text style={styles.content_div_1_2_title_text}>소화기구</Text>
            </View>
            <View style={styles.content_div_1_2_content}>
                <View style={styles.content_div_1_2_content_1}>
                    <View style={styles.content_div_1_2_content_1_1}>
                        <View style={styles.content_div_1_2_content_1_1_1}>
                            <Text style={styles.content_div_1_2_content_1_1_1_text} >가장 가까운
                                소화기구</Text>
                        </View>
                        <View style={styles.content_div_1_2_content_1_1_2}>
                            <View style={styles.content_div_1_2_content_1_1_2_1}>
                                <Text style={styles.content_div_1_2_content_1_1_2_1_text} numberOfLines={1} ellipsizeMode='tail'>강남역 2번 출구
                                    소화기
                                </Text>
                            </View>
                            <View style={styles.content_div_1_2_content_1_1_2_2}>
                                <Text style={styles.content_div_1_2_content_1_1_1_text_M}>7m</Text>
                                <TouchableOpacity
                                    style={styles.content_div_1_2_content_1_1_2_2_btn}
                                    onPress={() => navigation.navigate('MychatScreen')}
                                >
                                    <Entypo name="direction" size={15} color="white"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.content_div_1_2_content_2}>
                    <View style={styles.content_div_1_2_content_2_1}>
                        <View style={styles.content_div_1_2_content_2_1_1}>
                            <View style={styles.content_div_1_2_content_2_1_1_1}>
                                <Text style={styles.content_div_1_2_content_2_1_1_1_text}>30m</Text>
                            </View>
                            <View style={styles.content_div_1_2_content_2_1_1_1}>
                                <Text style={styles.content_div_1_2_content_2_1_1_1_text2}>2개</Text>
                            </View>
                        </View>
                        <View style={styles.content_div_1_2_content_2_1_1}>
                            <View style={styles.content_div_1_2_content_2_1_1_1}>
                                <Text
                                    style={styles.content_div_1_2_content_2_1_1_1_text}>100m</Text>
                            </View>
                            <View style={styles.content_div_1_2_content_2_1_1_1}>
                                <Text style={styles.content_div_1_2_content_2_1_1_1_text2}>5개</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}