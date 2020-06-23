<template>
  <div>
    <Header></Header>
    <div class="wrapper">
      <PathNavigation :pathnav="content"></PathNavigation>
      <HotelSearch :hotersear="content"></HotelSearch>
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
              "https://b1-q.mafengwo.net/s12/M00/0A/76/wKgED1vEFWuAWCbvABz0pf4VCpk62.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "重庆国贸格兰维大酒店",
            titleeg: "Glenview ITC PLAZA Chongqing",
            num1: 9.1,
            num2: 3363,
            num3: 11,
            cont:
              "酒店地处解放碑商圈，周围遍布购物中心及美食场所。酒店拥有各类豪华宽敞、时尚温馨的客房，部分设有超大落地玻璃窗...",
            addree: " 青年路66号 ",
            price1: 528,
            price2: 528,
            price3: 494,
            price4: 595,
            price5: 494
          },
          {
            pic:
              " https://b1-q.mafengwo.net/s10/M00/F5/5E/wKgBZ1mMbbKAMZZHABrSegSJ3zs96.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "新华酒店(重庆解放碑洪崖洞店)",
            titleeg: "Xin Hua Hotel (Chongqing Jiefangbei Hongyadong)",
            num1: 8.5,
            num2: 1459,
            num3: 1,
            cont:
              "酒店的位置很棒，是重庆繁华商圏地段，酒店下面就是著名的解放碑。吃、喝、玩、购物超级方便，离洪崖洞步行十分钟，...",
            addree: " 青年路9号 ",
            price1: 259,
            price2: 259,
            price3: 300,
            price4: 300,
            price5: 300
          },
          {
            pic:
              " https://p1-q.mafengwo.net/s12/M00/AB/C5/wKgED1uM0IiALonCAAZuQz_vPOM72.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "重庆解放碑威斯汀酒店",
            titleeg: "The Westin Chongqing Liberation Square",
            num1: 8.1,
            num2: 2039,
            num3: 11,
            cont:
              "酒店地理位置不错，长江索道和解放碑都在步行范围之内。酒店附近夜景很美，晚上可以从房间看到千厮门大桥，白天也能...",
            addree: "  新华路222号 ",
            price1: 942,
            price2: 1050,
            price3: 1049,
            price4: 810,
            price5: 1050
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s13/M00/30/83/wKgEaVx9BCGAWueJAAKxZZhthto07.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "重庆解放碑凯悦酒店",
            titleeg: "Hyatt Regency Liberation Square Chongqing ",
            num1: 8.5,
            num2: 1617,
            num3: 2,
            cont:
              "酒店的地理位置很好，就在解放碑步行街中心，周围商场林立，美食遍地。酒店内部装修豪华精美，房间舒适干净。",
            addree: " 五一路邹容路68号",
            price1: 629,
            price2: 570,
            price3: 677,
            price4: 778,
            price5: 778
          },
          {
            pic:
              "https://b1-q.mafengwo.net/s12/M00/5F/BE/wKgED1w25PiAc-nLAAJwIo6Knx016.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "重庆解放碑皇冠假日酒店",
            titleeg: "Crowne Plaza Chongqing Jiefangbei ",
            num1: 8.4,
            num2: 185,
            num3: 28,
            cont:
              "酒店位置优越，在房间内就可以看风景。酒店的软硬设施挺齐全的，内部房间干净整洁、宽敞舒适，服务也还不错，性价比...",
            addree: " 民族路101号",
            price1: 585,
            price2: 548,
            price3: 640,
            price4: 611,
            price5: 640
          },
          {
            pic:
              "https://p1-q.mafengwo.net/s11/M00/5C/A8/wKgBEFtm9myACuYrAAHT-JNpmNc24.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "扬子岛酒店(重庆洪崖洞解放碑店)",
            titleeg: "Yangzidao Hotel (Chongqing Hongyadong Jiefangbei) ",
            num1: 8.5,
            num2: 99,
            num3: 1,
            cont:
              "酒店位于西部大的商业中心，地理位置优越，具有完善的配套设施。菜品多样，周边有大型购物中心、医院、书城、影院等...",
            addree: " 邹容路82号附1号",
            price1: 268,
            price2: 328,
            price3: 314,
            price4: 268,
            price5: 328
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s11/M00/86/81/wKgBEFtgByKAHxqMAAEKJ2EYc5k17.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "全季酒店(重庆解放碑步行街店)",
            titleeg: "Ji Hotel (Chongqing Jiefangbei Pedestrian Street)",
            num1: 8.7,
            num2: 315,
            num3: 15,
            cont:
              "酒店的地理位置非常好，出门交通便捷，去周边的景点很方便，一眼可以看到解放碑。酒店下面就是八一路好吃街。酒店内...",
            addree: "民权路35号 ",
            price1: 244,
            price2: 220,
            price3: 244,
            price4: 365,
            price5: 244
          }
        ]
      },
      content: {
        num: 15,
        address: "中国",
        reserve: "重庆酒店预订",
        nainiang: "重庆",
        price1: 251,
        price2: 373,
        items: [
          { address: "解放碑、洪崖洞" },
          { address: "人民广场" },
          { address: "沙坪坝地区" },
          { address: "重庆北站" },
          { address: "南岸地区" },
          { address: "其他" },
          {
            title:
              "以“山城夜景”闻名于世。洪崖洞赏江景,八一路尝当地小吃,着迷于磁器口民乐。"
          },
          {
            title: "解放碑区域、沙坪坝区域、南岸区域是深受蜂蜂喜爱的区域。"
          },
          {
            title: "商务人士，建议住在商贸集中、交通便利的江北或高新区。"
          }
        ]
      }
    };
  },
  created() {
    this.$store.commit("mapchangecq");
  }
};
</script>

<style scoped>
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
