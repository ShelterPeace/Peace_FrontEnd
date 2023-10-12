import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    Button,
    Animated,
} from 'react-native';
import {Ionicons, Feather, MaterialIcons, Entypo} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'expo-status-bar';
import PagerView from 'react-native-pager-view';
import React, {useState, useEffect} from 'react';

export default function HomeScreen({style = {}}) {
    const [fadeAnim] = useState(new Animated.Value(0))  // Home 초기 상태
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 인덱스 상태
    const [isHalfScrolled, setIsHalfScrolled] = useState(false); // offset이 0.5를 넘었는지 여부
    const [isHalfScrolled2, setIsHalfScrolled2] = useState(false); // offset이 0.5를 넘었는지 여부
    const pagerRef = React.useRef(0); // PagerView에 대한 참조 생성
    const newsArticles = [
        {
            image:
                'https://img1.yna.co.kr/etc/inner/KR/2023/10/04/AKR20231004021200053_01_i_P4.jpg',
            title: '대구 낙동강서 우즈베크 6세 여아 숨진 채 발견',
            content:
                '(대구=연합뉴스) 황수빈 기자 = 3일 오후 6시 10분께 대구 달성군 논공읍 달성보 인근 낙동강에서 우즈베키스탄 국적 6세 A양이 숨진 채 발견됐다. 구조 당국은 이날 낮 12시 21분께 실종 신고를 받고 수색에 나서 약 6시간 만에 A양을 발견했다 당시 A양이 혼자 킥보드를 타고 달성보 인근 둔치로 향한 모습이 폐쇄회로(CC)TV를 통해 확인됐다. 타살 흔적은 없는 것으로 전해졌다.',
            news: '연합뉴스',
            reporter: '황수빈 기자',
            date: '2023-10-04 08:15',
        },
        {
            image:
                'https://flexible.img.hani.co.kr/flexible/normal/701/467/imgdb/original/2023/1004/20231004500098.jpg',
            title: '미국 하원의장 해임안 사상 첫 가결…‘대결 정치’ 극단화',
            content:
                '케빈 매카시 미국 하원의장이 하원 표결을 통해 해임당했다. 미국 역사에서 하원의장이 해임당한 것은 이번이 처음으로, 미국의 정치적 대립과 혼란이 더욱 심화되는 모습이다. 미국 하원은 3일 매카시 의장에 대한 해임안을 찬성 216표 대 반대 210표로 가결했다. 이로써 지난 1월 새 의회 출범과 함께 취임한 그는 10개월 만에 의장직을 잃었다. 민주당에서는 의원 212명 중 표결에 참여한 208명 전원이 해임에 찬성했다. 매카시 의장이',
            news: '한겨례',
            reporter: '이본영 기자',
            date: '2023-10-04 06:19',
        },
        {
            image:
                'http://newsroom.etomato.com/userfiles/20231004_114151_617157880.jpg',
            title:
                '삶이 바뀐다" 서울시 핀테크 위크 2023 이승건 토스 대표 기조연설 "금융 제판분리로 효용성 창출',
            content:
                "[뉴스토마토 신유미 기자] 국내 핀테크 기업들과 금융사, 유관기관, 지자체 등이 대거 참여하는 서울 핀테크 위크 2023 컨퍼런스가 4일 동대문디자인플라자(DDP) 아트홀2관에서 열렸습니다. 서울시와 금융감독원이 공동 개최하는 이번 행사는 '핀테크는 우리의 삶을 어떻게 변화시킬 것인가'를 주제로 오는 6일까지 진행되는데요. 디지털금융도시 서울의 경쟁력을 강화하고 핀테크 산업 발전을 논의하고자 국내외 핀테크 전문가와 리더가 참여했습니다. ",
            news: '뉴스토마토',
            reporter: '신유미 기자',
            date: '2023-10-04 14:57',
        },
    ];

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1, // 최종 상태: 완전 불투명
                duration: 250, // 전환 시간: 2초
                useNativeDriver: true,
            }
        ).start();
    }, []);

    return (
        // <Animated.View style={styles.container_in}>
        <Animated.View style={[{...style, opacity: fadeAnim}, styles.container_in]}>
            <View style={styles.content}>
                <ScrollView
                    bounces={true}
                    contentContainerStyle={{flexGrow: 1}}
                    showsVerticalScrollIndicator={false}
                    style={styles.viewScroll}
                >
                    <PagerView
                        ref={pagerRef} // 생성한 참조 연결
                        style={styles.viewPager}
                        initialPage={0}
                        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
                        onPageScroll={(e) => {
                            const position = e.nativeEvent.position;
                            const offset = e.nativeEvent.offset;
                            if (offset > 0.5 && !isHalfScrolled) {
                                setIsHalfScrolled(true);
                                setCurrentPage(position + 1);
                            } else {
                                setIsHalfScrolled(false);
                            }

                            if (
                                offset < 0.5 &&
                                !isHalfScrolled2 &&
                                position === currentPage - 1
                            ) {
                                setIsHalfScrolled2(true);
                                setCurrentPage(position);
                            } else {
                                setIsHalfScrolled2(false);
                            }
                        }}
                    >
                        {newsArticles.map((article, index) => (
                            <View style={styles.content_news_out} key={`article-${index}`}>
                                <View style={styles.content_news}>
                                    <View style={styles.content_news_imgDiv}>
                                        <View style={styles.content_news_img}>
                                            <Image
                                                style={{width: '100%', height: '100%', borderRadius: 10}}
                                                source={{uri: article.image}}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.content_news_TitleContentDiv}>
                                        <View style={styles.content_news_title}>
                                            <Text
                                                numberOfLines={1}
                                                ellipsizeMode="tail"
                                                style={{fontSize: 20, fontWeight: 'bold'}}
                                            >
                                                {article.title}
                                            </Text>
                                        </View>
                                        <View style={styles.content_news_content}>
                                            <Text numberOfLines={4} ellipsizeMode="tail">
                                                {article.content}
                                            </Text>
                                        </View>
                                        <View style={styles.content_news_footerDiv}>
                                            <View style={styles.content_news_footer}>
                                                <Text style={styles.content_news_footer_text}>
                                                    {article.news}
                                                </Text>
                                            </View>
                                            <View style={styles.content_news_footer}>
                                                <Text style={styles.content_news_footer_text}>
                                                    {article.reporter}
                                                </Text>
                                            </View>
                                            <View style={styles.content_news_footer_date}>
                                                <Text style={styles.content_news_footer_text}>
                                                    {article.date}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* Previous button */}
                                    {currentPage > 0 && ( // 첫 번째 페이지가 아닐 때만 보이게 함
                                        <TouchableOpacity
                                            onPress={() => {
                                                pagerRef.current.setPage(currentPage - 1);
                                            }}
                                            style={styles.content_news_previous}
                                        >
                                            <MaterialIcons
                                                name="navigate-before"
                                                size={24}
                                                color="rgba(255,255,255,0.7)"
                                            />
                                        </TouchableOpacity>
                                    )}

                                    {/* Next button */}
                                    {currentPage < newsArticles.length - 1 && ( // 마지막 페이지가 아닐 때만 보이게 함
                                        <TouchableOpacity
                                            onPress={() => {
                                                pagerRef.current.setPage(currentPage + 1);
                                            }}
                                            style={styles.content_news_next}
                                        >
                                            <MaterialIcons
                                                name="navigate-next"
                                                size={24}
                                                color="rgba(255,255,255,0.7)"
                                            />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        ))}
                    </PagerView>
                    <View style={styles.content_div_1}>
                        <View style={styles.content_div_1_1}>
                            <View style={styles.content_div_1_2}>
                                <View style={styles.content_div_1_2_title}>
                                    <Image
                                        style={[styles.content_div_1_2_title_img, {borderRadius: 5}]}
                                        source={require('../assets/img/shelter.png')}/>
                                    <Text style={styles.content_div_1_2_title_text}>
                                        대피소</Text>
                                </View>
                                <View style={styles.content_div_1_2_content}>
                                    <View style={styles.content_div_1_2_content_1}>
                                        <View style={styles.content_div_1_2_content_1_1}>
                                            <View style={styles.content_div_1_2_content_1_1_1}>
                                                <Text style={styles.content_div_1_2_content_1_1_1_text}>가장 가까운
                                                    대피소</Text>
                                            </View>
                                            <View style={styles.content_div_1_2_content_1_1_2}>
                                                <View style={styles.content_div_1_2_content_1_1_2_1}>
                                                    <Text style={styles.content_div_1_2_content_1_1_2_1_text}>강남역 대피소
                                                    </Text>
                                                </View>
                                                <View style={styles.content_div_1_2_content_1_1_2_2}>
                                                    <Text style={styles.content_div_1_2_content_1_1_1_text_M}>15m</Text>
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
                                                    <Text style={styles.content_div_1_2_content_2_1_1_1_text2}>4개</Text>
                                                </View>
                                            </View>
                                            <View style={styles.content_div_1_2_content_2_1_1}>
                                                <View style={styles.content_div_1_2_content_2_1_1_1}>
                                                    <Text
                                                        style={styles.content_div_1_2_content_2_1_1_1_text}>100m</Text>
                                                </View>
                                                <View style={styles.content_div_1_2_content_2_1_1_1}>
                                                    <Text
                                                        style={styles.content_div_1_2_content_2_1_1_1_text2}>10개</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View></View>
                            </View>
                        </View>
                        <View style={{height: 15}}></View>
                        <View style={styles.content_div_1_1}>
                            <View style={styles.content_div_1_2}>
                                <View style={styles.content_div_1_2_title}>
                                    <Image style={styles.content_div_1_2_title_img}
                                           source={require('../assets/img/aed.png')}/>
                                    <Text style={styles.content_div_1_2_title_text}>심장제세동기(AED)</Text>
                                </View>
                                <View style={styles.content_div_1_2_content}>
                                    <View style={styles.content_div_1_2_content_1}>
                                        <View style={styles.content_div_1_2_content_1_1}>
                                            <View style={styles.content_div_1_2_content_1_1_1}>
                                                <Text style={styles.content_div_1_2_content_1_1_1_text}>가장 가까운
                                                    AED</Text>
                                            </View>
                                            <View style={styles.content_div_1_2_content_1_1_2}>
                                                <View style={styles.content_div_1_2_content_1_1_2_1}>
                                                    <Text style={styles.content_div_1_2_content_1_1_2_1_text}>강남역 2번 출구
                                                        AED
                                                    </Text>
                                                </View>
                                                <View style={styles.content_div_1_2_content_1_1_2_2}>
                                                    <Text style={styles.content_div_1_2_content_1_1_1_text_M}>8m</Text>
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
                                                    <Text style={styles.content_div_1_2_content_2_1_1_1_text2}>6개</Text>
                                                </View>
                                            </View>
                                            <View style={styles.content_div_1_2_content_2_1_1}>
                                                <View style={styles.content_div_1_2_content_2_1_1_1}>
                                                    <Text
                                                        style={styles.content_div_1_2_content_2_1_1_1_text}>100m</Text>
                                                </View>
                                                <View style={styles.content_div_1_2_content_2_1_1_1}>
                                                    <Text style={styles.content_div_1_2_content_2_1_1_1_text2}>8개</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View></View>
                            </View>
                        </View>
                        <View style={{height: 15}}></View>
                        <View style={styles.content_div_1_1}>
                            <View style={styles.content_div_1_2}>
                                <View style={styles.content_div_1_2_title}>
                                    <Image
                                        style={[styles.content_div_1_2_title_img, {width: 19, height: 19}]}
                                        source={require('../assets/img/fire.png')}/>
                                    <Text style={styles.content_div_1_2_title_text}>소화기구</Text>
                                </View>
                                <View style={styles.content_div_1_2_content}>
                                    <View style={styles.content_div_1_2_content_1}>
                                        <View style={styles.content_div_1_2_content_1_1}>
                                            <View style={styles.content_div_1_2_content_1_1_1}>
                                                <Text style={styles.content_div_1_2_content_1_1_1_text}>가장 가까운
                                                    소화기구</Text>
                                            </View>
                                            <View style={styles.content_div_1_2_content_1_1_2}>
                                                <View style={styles.content_div_1_2_content_1_1_2_1}>
                                                    <Text style={styles.content_div_1_2_content_1_1_2_1_text}>강남역 2번 출구
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
                                <View></View>
                            </View>
                        </View>
                        <View style={{height: 15}}></View>
                        <View style={styles.content_div_1_1_weather}>
                            <View style={[styles.content_div_1_2_weather, {paddingRight: 7.5}]}>
                                <View style={styles.content_div_1_2_weather_1}>
                                    <View style={styles.content_div_1_2_weather_1_1}>
                                        <Text style={styles.content_div_1_2_weather_1_1_text}>현재 지역 날씨</Text>
                                    </View>
                                    <View style={styles.content_div_1_2_weather_1_2}>
                                        <Text style={styles.content_div_1_2_weather_1_2_text}>구리시</Text>
                                        <Text style={styles.content_div_1_2_weather_1_2_text2}>구름  17°C</Text>
                                        <Image
                                            style={[{width: 70, height: 70}]}
                                            source={require('../assets/weather_icon/cloud.png')}/>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.content_div_1_2_weather, {paddingLeft: 7.5}]}>
                                <View style={styles.content_div_1_2_weather_1}>
                                    <View style={styles.content_div_1_2_weather_1_1}>
                                        <Text style={styles.content_div_1_2_weather_1_1_text}>관심 지역 날씨</Text>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Settings')}
                                            style={styles.content_div_1_2_weather_1_1_settings}
                                        >
                                            <Ionicons name="settings-outline" size={13} color="#5e5e5e"/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.content_div_1_2_weather_1_2}>
                                        <Text style={styles.content_div_1_2_weather_1_2_text}>은평구</Text>
                                        <Text style={styles.content_div_1_2_weather_1_2_text2}>맑음  22°C</Text>
                                        <Image
                                            style={[{width: 70, height: 70}]}
                                            source={require('../assets/weather_icon/sun.png')}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{height: 15}}></View>

                    </View>
                </ScrollView>
                <StatusBar style="auto"/>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container_in: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    content: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content_title: {
        width: '100%',
        height: 45,
        backgroundColor: '#ffb931',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content_title_text: {
        fontSize: 30,
        marginLeft: 20,
        fontFamily: 'YourFontName',
        color: 'black',
    },
    viewScroll: {
        width: '100%',
        height: '100%',
    },
    viewPager: {
        width: '100%',
        height: 170,
        padding: 10,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content_news_previous: {
        position: 'absolute',
        top: '50%',
        left: 10,
        transform: [{translateY: -15}],
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_next: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: [{translateY: -15}],
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_out: {
        flex: 1,
        padding: 15,
    },
    content_news: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#b7b7b7',
        borderWidth: 0.2,
        borderRadius: 10,

        shadowColor: '#969696',
        shadowOffset: {
            width: 0,
            height: 0.5, // 음수 값을 사용하면 그림자가 위로 올라갑니다
        },
        shadowOpacity: 0.5, // CSS의 box-shadow에서 alpha 값에 해당합니다
        shadowRadius: 2, // blur radius에 해당합니다
        elevation: 3,
    },
    content_news_imgDiv: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_img: {
        width: '80%',
        height: '80%',
    },
    content_news_TitleContentDiv: {
        width: '70%',
        height: '100%',
    },
    content_news_title: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 0,
        paddingRight: 10,
    },
    content_news_content: {
        width: '100%',
        height: '45%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0,
        paddingLeft: 0,
    },
    content_news_footerDiv: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 20,
        flexDirection: 'row',
    },
    content_news_footer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_news_footer_text: {
        fontSize: 11,
        color: '#939393',
        marginLeft: 10,
    },
    content_news_footer_date: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_div_1: {
        width: '100%',
        flex: 1,
    },
    content_div_1_1: {
        width: '100%',
        height: 130,
        paddingLeft: 15,
        paddingRight: 15,
    },
    content_div_1_1_weather: {
        width: '100%',
        height: 170,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
    },
    content_div_1_2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,

        borderStyle: 'solid',
        borderColor: '#b7b7b7',
        borderWidth: 0.2,

        shadowColor: '#c2c2c2',
        shadowOffset: {
            width: 0,
            height: 0.5, // 음수 값을 사용하면 그림자가 위로 올라갑니다
        },
        shadowOpacity: 0.5, // CSS의 box-shadow에서 alpha 값에 해당합니다
        shadowRadius: 2, // blur radius에 해당합니다
        elevation: 3,
    },
    content_div_1_2_weather: {
        width: '50%',
        height: '100%',
    },
    content_div_1_2_weather_1: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,

        borderStyle: 'solid',
        borderColor: '#b7b7b7',
        borderWidth: 0.2,

        shadowColor: '#c2c2c2',
        shadowOffset: {
            width: 0,
            height: 0.5, // 음수 값을 사용하면 그림자가 위로 올라갑니다
        },
        shadowOpacity: 0.5, // CSS의 box-shadow에서 alpha 값에 해당합니다
        shadowRadius: 2, // blur radius에 해당합니다
        elevation: 3,
    },
    content_div_1_2_title: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15,
    },
    content_div_1_2_title_img: {
        width: 15,
        height: 15,
    },
    content_div_1_2_title_text: {
        fontSize: 20,
        marginLeft: 3,
        fontFamily: 'YourFontName',
        color: '#000000',
    },
    content_div_1_2_content: {
        flex: 1,
        borderRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
    },
    content_div_1_2_content_1: {
        width: '60%',
        height: '100%',
        padding: 10,
        paddingTop: 0,
    },
    content_div_1_2_content_1_1: {
        flex: 1,
        backgroundColor: "#e3e3e3",
        borderRadius: 10,
    },
    content_div_1_2_content_1_1_1: {
        width: '100%',
        height: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    content_div_1_2_content_1_1_1_text: {
        marginLeft: 15,
        fontSize: 12,
        fontFamily: 'YourFontName'
    },
    content_div_1_2_content_1_1_1_text_M: {
        position: "absolute",
        top: -25,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: 'YourFontName'
    },
    content_div_1_2_content_1_1_2: {
        flex: 1,
        padding: 5,
        flexDirection: "row",
    },
    content_div_1_2_content_1_1_2_1: {
        width: "70%",
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    content_div_1_2_content_1_1_2_1_text: {
        fontSize: 18,
        fontFamily: 'YourFontName',
    },
    content_div_1_2_content_1_1_2_2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    content_div_1_2_content_1_1_2_2_btn: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    content_div_1_2_content_2: {
        flex: 1,
        padding: 10,
        paddingLeft: 0,
        paddingTop: 0,
    },
    content_div_1_2_content_2_1: {
        flex: 1,
        backgroundColor: "#e3e3e3",
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    content_div_1_2_content_2_1_1: {
        width: '100%',
        height: '50%',
        flexDirection: "row",
    },
    content_div_1_2_content_2_1_1_1: {
        width: '50%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    content_div_1_2_content_2_1_1_1_text: {
        fontSize: 17,
        fontFamily: 'YourFontName',
    },
    content_div_1_2_content_2_1_1_1_text2: {
        fontSize: 20,
        fontFamily: 'YourFontName',
    },
    content_div_1_2_weather_1_1: {
        width: '100%',
        height: 34,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: "row",
    },
    content_div_1_2_weather_1_1_text: {
        fontSize: 15,
        fontFamily: 'YourFontName',
        marginLeft: 15,
        color:"#3f3f3f"
    },
    content_div_1_2_weather_1_1_settings: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    content_div_1_2_weather_1_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_div_1_2_weather_1_2_text:{
        position:"absolute",
        top:3,
        left:15,
        fontFamily:"YourFontName",
        fontSize:20,
        color:"#626262"
    },
    content_div_1_2_weather_1_2_text2:{
        position:"absolute",
        bottom:10,
        right:10,
        fontFamily:"YourFontName",
        fontSize:14,
        color:"#626262"
    },
});
