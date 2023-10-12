import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import styles from '../../styles/Home/Home_components/NewsStyles'
import React, {useState } from 'react';

export default function News() {
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

    return(
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
    )
}