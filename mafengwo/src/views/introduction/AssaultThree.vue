<template>
  <div>
    <Header></Header>
    <Background :west="west2"></Background>
    <UserCon :userwest="userwest2"></UserCon>
    <div class="view clearfix" style="position:relative;">
      <div class="view_con">
        <Time :timewest="timewest2"></Time>
        <div>
          <h2
            class="text-left"
            style="font-size:24px;height:50px;margin:20px 0"
          >
            始于
          </h2>
          <p class="text-left" style="margin-bottom:20px;line-height:28px">
            对海有着某种迷恋，<br />
            如果夏天没有去海边，<br />
            就好像拼图缺失了一角，<br />
            不完整。
          </p>
          <img
            style="height: 453px; width: 680px; "
            src="http://n1-q.mafengwo.net/s11/M00/0C/12/wKgBEFt34AqAACXKAAY4hirlInU50.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt=""
          />
          <p class="text-left">
            <a href="#">濑户内海</a>
            ，是偶然间注意到的地方，吸引我的原因很简单：海＆小众。海是我心心念念的，而小众，则意味着游人不多。近来，
            <a href="#">日本</a>
            已成为了旅行的热门目的地，游人总是络绎不绝，而我并不爱凑热闹，所以小众的海岛最合我心意。<br />
          </p>
          <img
            style="height: 453px; width: 680px; "
            src="http://p1-q.mafengwo.net/s11/M00/37/FD/wKgBEFt4-xWAH7e7AAMUia2T7_E13.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt=""
          />
          <h2
            class="text-left"
            style="font-size:24px;height:50px;margin:20px 0"
          >
            <span>备行</span>
          </h2>
          <p class="text-left">
            目的地确定后，便开始着手准备。这是我第一次出国，在此也正好为新手小伙伴们分享一下出国前的一些准备。<br />
            <br />
            1、护照：<br />
            护照，这是必备物品，简单的说，如果出国了，那么护照就是你的身份证，出门必带。我的护照是在去年年底时就已经办理好的，所以这次就免去了办理护照的程序。一般护照只需要再当地的出入境管理处办理即可，大约7-15天的样子就可以拿到。
          </p>
          <img
            style="height: 453px; width: 680px; "
            src="http://b1-q.mafengwo.net/s11/M00/33/E7/wKgBEFt49yaAV2QnAAOw9YLmADo87.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt=""
          />
          <p class="text-left">
            2、签证：<br />
            去往
            <a href="#">日本</a>
            旅行必须提前办理好签证，我是请旅行社好友帮助办理的，一般某宝上也可以购买签证办理服务。办理签证需要准备：护照原件、身份证户口本复印件、2张白底2寸照片、在职证明、工资卡近半年流水账单（需银行敲章）、签证表格填写等。只要材料齐全，真实有效一般都可以办下来，如果是夫妻同行还可以提供结婚证复印件。办理周期大约也是7-15天的样子。<br />
            <br />
            3、机票+住宿：<br />
            由于是第一次前往
            <a href="#">日本</a>
            ，对
            <a href="#">日本</a>
            的酒店住宿等不了解，所以在确定目的地和游玩路线后，我购买了“机+酒”的自由行套餐。我这次选择的是春秋旅游的“高松6天5晚自由行”套餐，因为从
            <a href="#">上海</a>
            飞往高松的航班并不多，只有春秋航空是直飞的，大概2小时左右即可到达，较为方便，价格也相对便宜。
          </p>
          <img
            style="height: 453px; width: 680px; "
            src="http://p1-q.mafengwo.net/s11/M00/34/38/wKgBEFt493WAFZ-pAAH-j3qbres69.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt=""
          />
          <p class="text-left">
            2、签证：<br />
            去往
            <a href="#">日本</a>
            旅行必须提前办理好签证，我是请旅行社好友帮助办理的，一般某宝上也可以购买签证办理服务。办理签证需要准备：护照原件、身份证户口本复印件、2张白底2寸照片、在职证明、工资卡近半年流水账单（需银行敲章）、签证表格填写等。只要材料齐全，真实有效一般都可以办下来，如果是夫妻同行还可以提供结婚证复印件。办理周期大约也是7-15天的样子。<br />
            <br />
            3、机票+住宿：<br />
            由于是第一次前往
            <a href="#">日本</a>
            ，对
            <a href="#">日本</a>
            的酒店住宿等不了解，所以在确定目的地和游玩路线后，我购买了“机+酒”的自由行套餐。我这次选择的是春秋旅游的“高松6天5晚自由行”套餐，因为从
            <a href="#">上海</a>
            飞往高松的航班并不多，只有春秋航空是直飞的，大概2小时左右即可到达，较为方便，价格也相对便宜。
          </p>
        </div>
      </div>
      <Side :sidewest="sidewest2"></Side>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Background from "@/components/introduction/Background.vue";
import UserCon from "@/components/introduction/UserCon.vue";
import Time from "@/components/introduction/Time.vue";
import Side from "@/components/introduction/Side.vue";
import Footer from "@/components/index/Footer.vue";
import kkk1 from "../../assets/introduction-images/kkk1.jpeg";
import kkk2 from "../../assets/introduction-images/kkk2.jpeg";
import kkk3 from "../../assets/introduction-images/kkk3.jpeg";
export default {
  components: {
    Header,
    Background,
    UserCon,
    Time,
    Side,
    Footer
  },
  data() {
    return {
      west2: {
        img:
          "http://p1-q.mafengwo.net/s11/M00/D5/69/wKgBEFt5bcmACGNBAAtTsnf-l6Q48.jpeg?imageMogr2%2Fstrip",
        title: "濑户内海の旅 | 艺术之于海，而海之于生活"
      },
      userwest2: {
        userimg:
          "http://p1-q.mafengwo.net/s11/M00/E5/92/wKgBEFqQ0QSACtjgAAKkW1dPJzY74.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
        dingnum: 44,
        username: "Torres",
        level: 8,
        time: "2018-08-19 21:17",
        looknum: "1002/10",
        numfx: 3,
        numsc: 30
      },
      timewest2: {
        time: "2018-07-17",
        day: 6,
        role: "情侣/夫妻",
        price: 8000
      },
      sidewest2: {
        img:
          "http://b1-q.mafengwo.net/s9/M00/B4/96/wKgBs1gAi8mAK_8eACErk-sdm7899.jpeg?imageMogr2%2Fthumbnail%2F%21200x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21200x150%2Fquality%2F90",
        address: "日本",
        picnum: 8466042,
        img2:
          "http://b1-q.mafengwo.net/s11/M00/3F/FB/wKgBEFt5AsGAEbHpABJ3_S7C7NY50.jpeg?imageMogr2%2Fthumbnail%2F%21345x213r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21345x213%2Fquality%2F90",
        date: "02/25",
        date2: " 星级纪念",
        items: [
          {
            img: kkk1,
            title: "亲子出游第一站，八个适合亲子游目的地"
          },
          {
            img: kkk2,
            title: "简单粗暴的关西交通攻略，第一次去日本需要了解！"
          },
          {
            img: kkk3,
            title: "眺望富士山，在箱根泡温泉（交通、美食、景点推荐）"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.va_con .pic_tag {
  width: 600px;
  padding-left: 0;
  text-align: left;
}
.pic_tag i.house {
  background-position: 0 -203px;
}
.pic_tag i {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: inline-block;
  background: url(../../assets/introduction-images/nn_sprite_v25.png) 0 -203px no-repeat;
  vertical-align: -6px;
}
.pic_tag a:hover {
  color: #ff8a00;
  text-decoration: none;
}
.pic_tag,
.pic_tag a {
  color: #999;
  font-size: 12px;
  text-align: left;
}
.va_con a.link {
  text-decoration: none;
  color: #4d4d4d;
  border-bottom: 1px solid #948e8e;
}
.va_con a.link:hover {
  text-decoration: none;
  color: #666;
}
.add_pic,
.video_wrapper {
  position: relative;
  background-color: #fff;
  margin-bottom: 18px;
}
.va_con p {
  margin-bottom: 20px;
  text-align: justify;
  word-break: break-word;
}
.article_title h2.t9 span {
  line-height: 50px;
}
.article_title h2.t9 {
  height: 50px;
  overflow: hidden;
  color: #222;
  font-size: 24px;
  line-height: 50px;
  background: 0;
}
.article_title {
  margin: 20px 0;
  position: relative;
}
.view_con {
  width: 680px;
  float: left;
  /* margin-top: 40px;
  margin-left: 360px; */
  /* background-color: aquamarine; */
}
.view {
  width: 1000px;
  margin: 40px auto 20px;
  height: 1000px;
}
</style>
