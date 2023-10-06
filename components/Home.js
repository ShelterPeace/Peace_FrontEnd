import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import React, { useState } from 'react';
import FooterComponent from '../uicomponents/FooterComponent';

export default function HomeScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 인덱스 상태
  const [isHalfScrolled, setIsHalfScrolled] = useState(false); // offset이 0.5를 넘었는지 여부
  const [isHalfScrolled2, setIsHalfScrolled2] = useState(false); // offset이 0.5를 넘었는지 여부
  const pagerRef = React.useRef(0); // PagerView에 대한 참조 생성
  const statusBarHeight =
    Platform.OS === 'android' ? StatusBar.currentHeight : 0;
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.content_title, { marginTop: statusBarHeight }]}>
          <Text style={styles.content_title_text}>대피스</Text>
        </View>
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
            <View key={`article-${index}`} style={styles.content_news}>
              <View style={styles.content_news_imgDiv}>
                <View style={styles.content_news_img}>
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    source={{ uri: article.image }}
                  />
                </View>
              </View>
              <View style={styles.content_news_TitleContentDiv}>
                <View style={styles.content_news_title}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 20, fontWeight: 'bold' }}
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
          ))}
        </PagerView>
        <View style={styles.content_div_1}>
          <View style={styles.content_div_1_1}></View>
        </View>
        <StatusBar style="auto" />
      </View>
      <FooterComponent navigation={navigation}></FooterComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // 메인 컨테이너 내의 요소들을 상하로 분리
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content_title: {
    width: '100%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content_title_text: {
    fontSize: 30,
    marginLeft: 20,
    fontFamily: 'YourFontName',
    color: '#858585',
  },
  viewPager: {
    width: '100%',
    height: 170,
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
    transform: [{ translateY: -15 }],
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
    transform: [{ translateY: -15 }],
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_news: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    backgroundColor: '#f6f6f6',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#b7b7b7',
    borderWidth: 0.2,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    shadowColor: '#969696',
    shadowOffset: {
      width: 10,
      height: 0.5, // 음수 값을 사용하면 그림자가 위로 올라갑니다
    },
    shadowOpacity: 0.5, // CSS의 box-shadow에서 alpha 값에 해당합니다
    shadowRadius: 5, // blur radius에 해당합니다
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
    height: 500,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,

    shadowColor: '#8a8a8a',
    shadowOffset: {
      width: 0,
      height: 4, // 음수 값을 사용하면 그림자가 위로 올라갑니다
    },
    shadowOpacity: 0.4, // CSS의 box-shadow에서 alpha 값에 해당합니다
    shadowRadius: 5, // blur radius에 해당합니다
    elevation: 3,
  },
  content_div_1_1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 10,
  },
  footer: {
    height: 65, // 원하는 높이로 설정
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#484848',
    shadowOffset: {
      width: 0,
      height: -6, // 음수 값을 사용하면 그림자가 위로 올라갑니다
    },
    shadowOpacity: 0.08, // CSS의 box-shadow에서 alpha 값에 해당합니다
    shadowRadius: 4, // blur radius에 해당합니다
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
