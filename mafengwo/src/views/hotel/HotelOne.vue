<template>
  <div>
    <Header></Header>
    <div class="wrapper">
      <!-- 路径导航 -->
      <PathNavigation :pathnav="content"></PathNavigation>
      <!-- 酒店筛选搜索 -->
      <HotelSearch :hotersear="content"></HotelSearch>
      <!-- 信息+地图 -->
      <HotelArea :area="content"></HotelArea>
      <!-- 酒店信息 -->
      <HotelInformation :information="content"></HotelInformation>
      <!-- 酒店评分 -->
      <HotelRating :rat="list"></HotelRating>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import PathNavigation from "@/components/hotel/PathNavigation.vue";
import HotelSearch from "@/components/hotel/HotelSearch.vue";
import HotelArea from "@/components/hotel/HotelArea.vue";
import HotelInformation from "@/components/hotel/HotelInformation.vue";
import HotelRating from "@/components/hotel/HotelRating.vue";
import Footer from "@/components/index/Footer.vue";
export default {
  components: {
    Header,
    PathNavigation,
    HotelSearch,
    HotelArea,
    HotelInformation,
    HotelRating,
    Footer
  },
  data() {
    return {
      list: {
        ratings: [
          {
            pic:
              " https://b1-q.mafengwo.net/s10/M00/01/36/wKgBZ1mU3gWAZfUKAAWgBf1_Zuw75.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "成都钓鱼台精品酒店",
            titleeg: "Diaoyutai Boutique Hotel Chengdu",
            num1: 8.9,
            num2: 364,
            num3: 5,
            cont:
              "很好的酒店，就在宽窄巷子上，但是一点也不吵，出门很方便，房间很大，服务周到，设施完善。",
            addree: " 宽巷子38-39号",
            price1: 1831,
            price2: 1606,
            price3: 1694,
            price4: 1873,
            price5: 1867
          },
          {
            pic:
              " https://n1-q.mafengwo.net/s12/M00/04/DD/wKgED1u9oeaAd2vqAK6kq2zaadI43.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "成都吾桐里国际青年旅舍",
            titleeg: "Wutongli International Youth Hostel",
            // num1: 8.9,
            num2: 1994,
            num3: 24,
            cont:
              "客栈的设计很棒，很有特色。客栈下面的咖吧挺大的 ，装修得也很有feel。客栈房间干净整洁，设施挺齐全的，氛围特别好...",
            addree: " 大石东路11号附8号",
            price1: 123,
            price2: 102,
            price3: 49,
            price4: 179,
            price5: 49
          },
          {
            pic:
              " https://p1-q.mafengwo.net/s10/M00/9E/65/wKgBZ1mIQkKATVlmAAEbMvQxDWo07.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "成都鼓楼智选假日酒店",
            titleeg: "Holiday Inn Express Chengdu Gulou",
            num1: 8.8,
            num2: 2686,
            num3: 12,
            cont:
              "酒店地处成都市中心天府广场商圈，毗邻耳熟能详的春熙路步行街、太古里商业街 ，装修得也很有feel。客栈房间干净整洁，设施挺齐全的，氛围特别好...",
            addree: " 大墙西街72号",
            price1: 283,
            price2: 262,
            price3: 262,
            price4: 305,
            price5: 296
          },
          {
            pic:
              "https://p1-q.mafengwo.net/s4/M00/5A/62/wKgIDlz0A2aAQSZlAIt4xDk_Pos64.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "麗枫酒店(成都春熙路店)",
            titleeg: "Lavande Hotel (Chengdu Chunxi Road)",
            num1: 8.4,
            num2: 321,
            num3: 4,
            cont:
              "酒店周边吃饭的地方很多，吃饭非常方便。酒店的环境非常好很安静，而且设施很新，房间干净宽敞。特别的是，卫生间设...",
            addree: " 玉沙路132号",
            price1: 268,
            price2: 349,
            price3: 267,
            price4: 268,
            price5: 349
          },
          {
            pic:
              "https://b1-q.mafengwo.net/s9/M00/7D/C7/wKgBs1hRED2ADh1bAASEm4JaCyM73.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "全季酒店(都江堰店)",
            titleeg: "Ji Hotel (Dujiangyan)",
            // num1: 8.4,
            num2: 305,
            num3: 1,
            cont: "酒店紧邻都江堰步行街，步行大概10分钟可到达都江堰景区。",
            addree: " 都江堰",
            price1: 283,
            price2: 240,
            price3: 283,
            price4: 240,
            price5: 283
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s12/M00/4A/FB/wKgED1vzpNyACATnAAhnpmA07Mo39.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "成都尼依格罗酒店",
            titleeg: "Niccolo Hotel",
            num1: 8.7,
            num2: 159,
            num3: 9,
            cont:
              "酒店地理位置很棒，过条马路就是太古里，背后就是春熙路。酒店房间的设计非常独特大气。酒店的工作人员服务态度特别...",
            addree: " 红星路三段1号国际金融中心三3号楼",
            price1: 1436,
            price2: 1265,
            price3: 1573,
            price4: 1561,
            price5: 2652
          },
          {
            pic:
              "https://b1-q.mafengwo.net/s7/M00/C3/31/wKgB6lPJVmSAROYQAChShYLlFDE61.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "成都浣花黉台酒店",
            titleeg: "Huanhua Hongtai Hotel",
            num1: 8.8,
            num2: 933,
            num3: 4,
            cont:
              "酒店以原木建筑为主体，古蜀文化为主题，环境幽静怡人，内部装饰古香古色。酒店装修的很好，房间非常安静而且舒适。...",
            addree: " 浣花南路251号附1号",
            price1: 666,
            price2: 655,
            price3: 689,
            price4: 655,
            price5: 621
          }
        ]
      },
      content: {
        num: 13231,
        address: "中国",
        reserve: "成都酒店预订",
        nainiang: "成都",
        price1: 242,
        price2: 357,
        items: [
          { address: "春熙路" },
          { address: "文殊院" },
          { address: "天府广场" },
          { address: "一品天下" },
          { address: "金沙" },
          { address: "其他" },
          {
            title: "成都是美女的摇篮，大熊猫的故乡，也是吃货的天堂。"
          },
          {
            title: "在成都就是要享受闲适的慢生活，要慢慢看、慢慢逛、慢慢吃。"
          },
          {
            title: "在这里不要错过正宗的川剧变脸，还有美味的火锅和串串。"
          }
        ],
        tab: [
          { id: 0, tabtitle: "全部" },
          { id: 1, tabtitle: "住文艺旅舍" },
          { id: 2, tabtitle: "打卡网红酒店" },
          { id: 3, tabtitle: "网红民宿榜" },
          { id: 4, tabtitle: "吃货根据地" },
          { id: 5, tabtitle: "住在文殊院" },
          { id: 6, tabtitle: "老成都院落" },
          { id: 7, tabtitle: "温泉度假" }
        ]
      }
    };
  }
  // created() {
  //   this.$store.commit("mapchangexa");
  // }
};
</script>

<style scoped>
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
