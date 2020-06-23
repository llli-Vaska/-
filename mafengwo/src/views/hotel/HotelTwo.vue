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
              " https://p1-q.mafengwo.net/s10/M00/CE/16/wKgBZ1mNMC6ADOTpAAJmaVELC_c91.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "锦江之星(西安钟鼓楼地铁站店)",
            titleeg: "Jinjiang Inn (Xi'an Bell Tower)",
            num1: 8.9,
            num2: 297,
            num3: 10,
            cont:
              "酒店地理位置非常好，就在钟楼附近，临近回民街，对面就是机场大巴，步行就能到骡马市步行街，吃饭购物很方便，性价...",
            addree: " 社会路1号 ",
            price1: 175,
            price2: 283,
            price3: 275,
            price4: 215,
            price5: 179
          },
          {
            pic:
              " https://b1-q.mafengwo.net/s15/M00/FF/0E/CoUBGV5CprOAD-kZARlWscFU7S045.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "西安鼓楼金茂酒店",
            titleeg: "Jinmao Hotel Xi'an",
            num1: 8.6,
            num2: 1994,
            num3: 24,
            cont:
              "地理位置非常棒，转弯就是机场大巴终点站，出门就是鼓楼和回民街，出门特别方便，员工服务也很热情、超级贴心。",
            addree: " 竹笆市36号",
            price1: 280,
            price2: 308,
            price3: 308,
            price4: 359,
            price5: 565
          },
          {
            pic:
              " https://n1-q.mafengwo.net/s9/M00/EF/91/wKgBs1fHxHmAMHw1AAKpyOh5sB454.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "西安成功国际酒店",
            titleeg: "Chenggong International Hotel",
            num1: 8.8,
            num2: 2503,
            num3: 18,
            cont:
              "酒店装修风格很简约，很符合低炭生活的标准，房间虽然小但五脏俱全，床睡起来也舒服，重要的是干净，性价比非常高。",
            addree: " 和平路59号（近东大街）",
            price1: 88,
            price2: 101,
            price3: 96,
            price4: 174,
            price5: 228
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s9/M00/D2/37/wKgBs1ZMFj-AUupsAADHUFfbeaY50.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "西安西唐青年旅舍",
            titleeg: "Xi an Seetang Youth Hostel",
            num1: 9.2,
            num2: 631,
            num3: 15,
            cont:
              "旅舍离古城墙、钟楼都很近，在一个卖字画纸笔的古玩城里，位置环境都不错。旅舍四楼有一个露天餐厅，晚上景色拍照很美。",
            addree: " 书院门33号",
            price1: 66,
            price2: 98,
            price3: 90,
            price4: 98,
            price5: 141
          },
          {
            pic:
              "https://p1-q.mafengwo.net/s10/M00/B8/CE/wKgBZ1mMaJOAKjaTACWpEkx1T2s87.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "西安钟楼饭店",
            titleeg: "Bell Tower Hotel",
            num1: 7.9,
            num2: 3514,
            num3: 19,
            cont:
              "饭店位于西安市市中心钟鼓楼附近，部分房间可以直接从屋眺望钟鼓楼。",
            addree: " 南大街110号",
            price1: 328,
            price2: 396,
            price3: 623,
            price4: 345,
            price5: 521
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s1/M00/B0/04/wKgIC1zv2GWAVtMaAA5QGfDU0zE87.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "华美达兆瑞酒店(西安钟楼店)",
            titleeg: "Ramada Bell Tower Hotel Xi'an",
            num1: 8.7,
            num2: 2745,
            num3: 8,
            cont:
              "酒店位于西安市中心钟鼓楼商圈繁华地带，紧邻回民小吃一条街。走到回民街也需要几分钟的时间，地理位置比较优越，基...",
            addree: " 红星路三段1号国际金融中心三3号楼",
            price1: 380,
            price2: 380,
            price3: 380,
            price4: 380,
            price5: 380
          },
          {
            pic:
              "https://n1-q.mafengwo.net/s10/M00/04/3C/wKgBZ1mMbxuAeoYyAAOQ2lQasgg10.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90",
            title: "西安中心戴斯酒店(钟楼店)",
            titleeg: "City Centre Days Inn (Bell Tower)",
            num1: 8.6,
            num2: 2095,
            num3: 16,
            cont:
              "酒店位置非常好，交通便利，房间很大，早餐也比较丰盛。酒店客房服务很体贴，也很热情，去周边吃东西也很方便。整体...",
            addree: " 北大街99号 ",
            price1: 309,
            price2: 271,
            price3: 309,
            price4: 309,
            price5: 309
          }
        ]
      },
      content: {
        num: 15,
        address: "中国",
        reserve: "西安酒店预订",
        nainiang: "西安",
        price1: 222,
        price2: 358,
        items: [
          { address: "钟楼、鼓楼周边" },
          { address: "大雁塔周边" },
          { address: "大明宫遗址" },
          { address: "华清池" },
          { address: "兵马俑" },
          { address: "其他" },
          {
            title: "西安，旧称长安，中国古都，沉淀着中华民族几千年的历史文化。"
          },
          {
            title:
              "无论秦砖汉瓦、隋唐风华亦或是关中皮影、各色美食都是西安的独一无二。"
          },
          {
            title:
              "鼓楼－钟楼区的景点和美食集中，交通也方便，游客大都会选择住在此处。"
          }
        ]
      }
    };
  },
  created() {
    this.$store.commit("mapchangexa");
  }
};
</script>

<style scoped>
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
</style>
