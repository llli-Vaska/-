<template>
  <!-- 主页内容（游记） -->
  <div class="mfw-travelnotes">
    <div class="navbar clearfix">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="热门游记" name="first">
          <div class="tn-list">
            <div
              class="tn-item clearfix"
              v-for="item in conners"
              :key="item.id"
            >
              <div class="tn-image">
                <a href="#">
                  <img :src="item.img" style="display:inline" />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#">{{ item.title }}</a>
                  </dt>
                  <dd>
                    <a href="#">{{ item.intrduce }}</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#"></a>
                    <em>{{ item.number }}</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#" class="_j_gs_item">{{ item.address }}</a>
                    ，by
                  </span>
                  <span class="tn-user">
                    <a href="#">
                      <img :src="item.imguser" />
                      {{ item.username }}
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>
                    {{ item.looknumber }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新发表" name="second">
          <div class="tn-list">
            <div
              class="tn-item clearfix"
              v-for="item in conner2s"
              :key="item.id"
            >
              <div class="tn-image">
                <a href="#">
                  <img :src="item.img" style="display:inline" />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#">{{ item.title }}</a>
                  </dt>
                  <dd>
                    <a href="#">{{ item.intrduce }}</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#"></a>
                    <em>{{ item.number }}</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#" class="_j_gs_item">{{ item.address }}</a>
                    ，by
                  </span>
                  <span class="tn-user">
                    <a href="#">
                      <img :src="item.imguser" />
                      {{ item.username }}
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>
                    {{ item.looknumber }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="260"
        ></el-pagination>
      </div>
      <div class="tn-write">
        <a class="btn-add" href="#"><i></i>写游记</a>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/index-images/img1.jpg";
import imguser1 from "../../assets/index-images/imguser1.jpeg";
import img2 from "../../assets/index-images/img2.jpg";
import imguser2 from "../../assets/index-images/imguser2.jpeg";
import img3 from "../../assets/index-images/img3.jpg";
import imguser3 from "../../assets/index-images/imguser3.jpeg";
import img4 from "../../assets/index-images/img4.jpg";
import imguser4 from "../../assets/index-images/imguser4.jpeg";
import img5 from "../../assets/index-images/img5.jpg";
import imguser5 from "../../assets/index-images/imguser5.jpeg";
import img6 from "../../assets/index-images/img6.jpg";
import imguser6 from "../../assets/index-images/imguser6.jpeg";
import img7 from "../../assets/index-images/img7.jpeg";
import imguser7 from "../../assets/index-images/imguser7.jpeg";
import img8 from "../../assets/index-images/img8.jpg";
import imguser8 from "../../assets/index-images/imguser8.jpeg";
import img9 from "../../assets/index-images/img9.jpeg";
import imguser9 from "../../assets/index-images/imguser9.jpeg";
import img10 from "../../assets/index-images/img10.jpg";
import imguser10 from "../../assets/index-images/imguser10.jpeg";

import imgg1 from "../../assets/index-images/imgg1.jpg";
import userr1 from "../../assets/index-images/userr1.jpeg";
import imgg2 from "../../assets/index-images/imgg2.jpeg";
import userr2 from "../../assets/index-images/userr2.jpeg";
import imgg3 from "../../assets/index-images/imgg3.jpg";
import userr3 from "../../assets/index-images/userr3.jpeg";
import imgg4 from "../../assets/index-images/imgg4.jpg";
import userr4 from "../../assets/index-images/userr4.jpeg";
import imgg5 from "../../assets/index-images/imgg5.jpg";
import userr5 from "../../assets/index-images/userr5.jpeg";
import imgg6 from "../../assets/index-images/imgg6.jpg";
import userr6 from "../../assets/index-images/userr6.jpeg";
import imgg7 from "../../assets/index-images/imgg7.jpeg";
import userr7 from "../../assets/index-images/userr7.png";
import imgg8 from "../../assets/index-images/imgg8.jpg";
import userr8 from "../../assets/index-images/userr8.jpeg";
import imgg9 from "../../assets/index-images/imgg9.jpg";
import userr9 from "../../assets/index-images/userr9.jpeg";
import imgg10 from "../../assets/index-images/imgg10.jpg";
import userr10 from "../../assets/index-images/userr10.jpeg";
export default {
  data() {
    return {
      activeName: "first",
      conners: [
        {
          img: img1,
          title: "【日本】最全东京樱花实拍指南，纪念平成年最后的樱花季！",
          intrduce:
            " 2019年的樱花季是 日本 平成年最后的樱花季，去年和闺蜜在 东京 待了两个多礼拜，几乎把 东京 樱花从开花到满开再到樱吹雪从头至尾看了个遍，打卡了 东京 所有的赏樱名所和不少人少景美的小...",
          number: "154",
          address: "东京",
          imguser: imguser1,
          username: "J调de华丽",
          looknumber: "16150/19"
        },
        {
          img: img2,
          title: "彩云之南——顶风作案下的无奈与惊喜",
          intrduce:
            " 缘起 在一个夕阳产业的行业中工作，除了能带给你对未来的不确定性，对现状的焦虑，竞争力的下降，被迫降薪下岗的迷茫之外，也能带给你更多闲暇的时间，来思考人生，来放慢脚步，来规划一些...",
          number: "53",
          address: "云南",
          imguser: imguser2,
          username: "nf0001384",
          looknumber: "1483/21"
        },
        {
          img: img3,
          title: "初回限定！霓虹建筑大巡礼！",
          intrduce:
            " 「VLOG·霓虹建筑巡游记」 当当当当~人生第一个VLOG诞生啦 ~ 这是一次一边旅行一边学习的旅程，也是本人第一次尝试用视频记录的行程，希望能给自己留下一份特别的回忆。 「序篇·导览」 本...",
          number: "219",
          address: "日本",
          imguser: imguser3,
          username: "蘼蓎先生",
          looknumber: "5113/16"
        },
        {
          img: img4,
          title: "【滇行短记】我穿过金黄的麦田，去给稻草人唱歌，等着落山风...",
          intrduce:
            "去年的今天，我在 喜洲 晒着太阳☀️，头顶燕子盘旋，远方是一望无垠的田埂。 收割机🚜在麦子地里给麦穗剃头，忙的晕头转向吐着滚滚黑烟，温热的风吹在身上刚刚好… 悠闲惬意。💨 今年的我，...",
          number: "120",
          address: "大理",
          imguser: imguser4,
          username: "yxt",
          looknumber: "2073/23"
        },
        {
          img: img5,
          title: "逆风飞翔--一个人背包环岛",
          intrduce:
            " 源起 旅行的意义--走出去带回一个与出发时不一样的自己 五年前 一个人 一部单反 一个大背包 踏上了远方的列车 一路上 遍布大 江南 北的美食撩拨漂泊流浪的味蕾 不同住宿方式让我可以以天为...",
          number: "175",
          address: "台湾",
          imguser: imguser5,
          username: "风子",
          looknumber: "3159/28"
        },
        {
          img: img6,
          title: "环游日本九州，探访熊本熊部长！",
          intrduce:
            " 关于九州 如果说 京都 和 奈良 充满着意蕴悠长的东方式美感，而 东京 则意味着快节奏、时尚、潮流、先锋、繁荣、喧嚣、前卫等一系列现代意义代名词的话，那隔关门海峡与 本州 岛相对的 九州...",
          number: "67",
          address: "熊本",
          imguser: imguser6,
          username: "紫陌",
          looknumber: "4251/14"
        },
        {
          img: img7,
          title: "上帝的眼泪，锡兰微笑，这是我不能忘记的斯里兰卡（13天行程...",
          intrduce:
            " 第六天，努沃埃利耶，从茶厂到粉红邮局 洛奇奇茶厂，兰卡最受欢迎的茶厂 对于喜欢喝茶的人来说， 斯里兰卡 的红茶可是一个很大的诱惑，谁都知道，锡兰红茶世界闻名，谁都想亲口品尝一下。所...",
          number: "121",
          address: "斯里兰卡",
          imguser: imguser7,
          username: "郝地瓜Cynthia",
          looknumber: "2509/19"
        },
        {
          img: img8,
          title: "【萌懒の幸福】难产游记之十一自驾，我们好像去了假内蒙？？！！",
          intrduce:
            "为什么说这篇游记难产，之前的出游，最慢差不多三个月的时间我也就写完了，但是19年国庆的出游，到了现在还没有写完。主要是因为6天的时间，我们大部分都在路上，所以感觉能写的内容很少，再...",
          number: "169",
          address: "内蒙古",
          imguser: imguser8,
          username: " 萌生C位是旅行",
          looknumber: "3413/28"
        },
        {
          img: img9,
          title: "初见台湾｜恍若一场平行世界中的旅程",
          intrduce:
            "2019年07月22日，我向自己预约了这篇游记，当时我说： 和姐妹👭的二人行 一起走完这趟旅程 说点什么 一转眼距离去年的 台湾 之行快七个月了，本想着春节过年放假空闲下来的时间着手写下这趟...",
          number: "271",
          address: "台湾",
          imguser: imguser9,
          username: "^Yvonne",
          looknumber: "7038/43"
        },
        {
          img: img10,
          title: "古 巴 故 事 | 哈 瓦 那 120 小 时",
          intrduce:
            " VLOG : 哈瓦那的120小时 我为什么想要去古巴？ “一定要在 古巴 发生变化之前去看看”， 每一个想去 古巴 旅行的人都会这样说。 我为什么想去 古巴 呢？ 真的只是因为好奇。 我好奇离我1300...",
          number: "165",
          address: "古巴",
          imguser: imguser10,
          username: "罐子brownie",
          looknumber: "3432/26"
        }
      ],
      conner2s: [
        {
          img: imgg1,
          title: "新加坡｜超级全的吃喝玩乐干货攻略，适合第一次游玩的人",
          intrduce:
            " 新加坡印象 所有的故事，都会从夏天开始，走过很多路，看过很多风景，还是很爱你—— 新加坡 。或许因为生活在 苏州 的缘故，来到你的这座城，仿佛和在自己所在的城一样，毫无不适感。（ 苏...",
          number: "3",
          address: "新加坡",
          imguser: userr1,
          username: "薛子",
          looknumber: "191/2"
        },
        {
          img: imgg2,
          title: "2018.9.20全家游北京五天四晚",
          intrduce:
            " 北京 之行是很久以前就说好的，算是承诺给老丈人的。作为乖女婿，必须兑现哈。所以这次就带着老丈人丈母娘一起出发啦！ day1 一大早四点就起床啦，整理梳洗以后5点半出门。 路上看日出了 到...",
          number: "11",
          address: "北京",
          imguser: userr2,
          username: "大圣粑粑",
          looknumber: "310/1"
        },
        {
          img: imgg3,
          title: "大手牵小手，庄周梦蝶游日本",
          intrduce:
            " 日本 对我来说，一直都不在我的旅行清单上。我不喜欢购物，不喜欢人多的地方，城市里的生活方式都 大同 小异的，无非就是一些灯红酒绿，一些高楼大厦，感觉和 上海 没有很大的区别。这次过...",
          number: "5",
          address: "日本",
          imguser: userr3,
          username: "典邑",
          looknumber: "84/1"
        },
        {
          img: imgg4,
          title: "川行30日 2020年5月",
          intrduce:
            "5月20日 八点半出发，来到与宾馆近在咫尺的 德格 印经院。 . 德格 印经院是素有“藏文化大百科全书”、“藏族地区璀璨的文化明珠”、“雪山下的宝库”盛名的 德格 印经院，全名“ 西藏 文化...",
          number: "13",
          address: "四川",
          imguser: userr4,
          username: "吕大哥",
          looknumber: "230/1"
        },
        {
          img: imgg5,
          title: "年来终觉此生浮 又做巴蜀浪漫游",
          intrduce:
            " 写在之前: 这次出门遛弯, 有太多有趣的片段留在本来就不大的脑容量里, 我尽可能将当时的所见所想在这里还原, 还有每个萍水相逢因你而精彩的人。 关于出行交通, 可直接阅读文末交通篇, 查看...",
          number: "4",
          address: "重庆",
          imguser: userr5,
          username: "夏亦白",
          looknumber: "172/1"
        },
        {
          img: imgg6,
          title: "从你的全世界路过——稻城亚丁8天吃住行到川西 心之净地",
          intrduce:
            "旅行的意义不在于战利品有多少，照片拍了几张，景点去了几个；而是，你做了多少疯狂的事，经历了多少个心跳的时刻，是否有新的感悟…… 云翻一天墨兰，碧蓝之水撒向天空，深邃至极。遮星蔽月...",
          number: "19",
          address: "稻城",
          imguser: userr6,
          username: "看看",
          looknumber: "275/6"
        },
        {
          img: imgg7,
          title: "忆山东、洛阳、开封、云台山自驾游",
          intrduce:
            "前言 第一次带父母自驾出行，无论在攻略准备和景点的选择上都没什么经验 ，可以说2015年的这次行程是一次随遇而安说走就走的旅行，也正是因为这次旅游才使心中埋下了一棵向往美好种子，能带...",
          number: "12",
          address: "云台山",
          imguser: userr7,
          username: "马蜂窝用户",
          looknumber: "140/1"
        },
        {
          img: imgg8,
          title: "打卡宁夏",
          intrduce:
            "打算来 银川 旅游的小伙伴，做好跑遍 宁夏 的准备哦 景点全收集: 银川 市内: 1.南门楼，玉皇阁，大清真寺，这里算老城区可以逛逛步行街，也有类似于夜市的摊位，可以随便吃吃。据说这边的夜...",
          number: "13",
          address: "银川",
          imguser: userr8,
          username: "小笨",
          looknumber: "88/2"
        },
        {
          img: imgg9,
          title: "长城文化带旅行之密云段78/兴隆段31：V字长城4（墙子路营城、...",
          intrduce:
            " 一、V字长城介绍 V字长城，位于 河北 省 承德 市 兴隆 县上石洞乡米铺村口门自然村南、六道河镇小关门村加城沟自然村西、下孔台自然村西、上孔台自然村西、小关门自然村西、 北京 市 密云 ...",
          number: "12",
          address: "密云",
          imguser: userr9,
          username: "虫子",
          looknumber: "83/5"
        },
        {
          img: imgg10,
          title: "小baby马尔代夫浮潜记",
          intrduce:
            " 一直被拖延的马代 先上几张图吧～为什么说一直被拖延呢，因为大学时就说去没去，然后毕业后假期太少，又不愿意把假浪费在海岛，婚假那么长，也没选马代，就这样，一直拖啊拖，拖到小孩3岁时...",
          number: "5",
          address: "莉莉岛",
          imguser: userr10,
          username: "晃晃小耗子",
          looknumber: "1302/2"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
/* >>>穿透 */
.navbar >>> .el-tabs__active-bar {
  background-color: #ff9d00;
}
.navbar >>> .el-tabs__item:hover {
  color: #ff9d00;
}
.navbar >>> .el-tabs__item.is-active {
  color: #ff9d00;
  font-size: 18px;
}
.navbar >>> .el-tabs__item {
  font-size: 18px;
}
.el-pagination.is-background >>> .el-pager li:not(.disabled).active {
  background-color: #ff9d00;
  color: #fff;
}
.el-pagination.is-background >>> .btn-next,
.el-pagination.is-background >>> .btn-prev,
.el-pagination.is-background >>> .el-pager li {
  background-color: #ffffff00;
}
</style>
<style>
.page {
  margin-top: 30px;
  position: absolute;
  right: 0;
}
.tn-extra a:focus,
a:hover {
  color: #ff9d00;
  text-decoration: none;
}
.tn-item a:hover {
  text-decoration: none;
}
.tn-item:hover dt a {
  color: #ff9d00;
  text-decoration: none;
}
.tn-item:hover {
  background-color: #f8f8f8;
  padding: 15px;
  margin: 0 -15px;
}
.tn-extra .tn-nums i {
  float: left;
  margin: 10px 5px 0 0;
  width: 18px;
  height: 14px;
  background-position: -30px -50px !important;
}
.tn-extra .tn-nums {
  font-size: 14px;
  color: #999;
  float: left;
}
.tn-extra .tn-user img {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 50%;
  vertical-align: -3px;
}
.tn-extra .tn-user {
  margin-right: 15px;
  font-size: 12px;
  float: left;
}
.tn-extra .tn-place a {
  color: #666;
}
.tn-extra .tn-place i {
  float: left;
  margin: 8px 5px 0 0;
  width: 14px;
  height: 16px;
  background-position: 0 -50px !important;
  overflow: hidden;
}
.tn-extra .tn-place {
  margin-right: 10px;
  font-size: 12px;
  float: left;
}
.tn-extra .tn-ding em {
  font-style: normal;
}
.tn-extra .tn-ding {
  float: right;
  color: #ff9d00;
  font-size: 14px;
  text-align: right;
}
.tn-write .btn-add i,
.tn-extra .btn-ding,
.tn-extra .tn-place i,
.tn-extra .tn-nums i {
  background: url(../../assets/index-images/index-sprites9.png) no-repeat;
}
.tn-extra .btn-ding {
  /* display: inline-block; */
  float: right;
  margin-left: 8px;
  width: 38px;
  height: 33px;
  background-position: -60px 0 !important;
  overflow: hidden;
}
.tn-extra span {
  display: inline-block;
}
.tn-extra .tn-ding {
  float: right;
  color: #ff9d00;
  font-size: 14px;
  text-align: right;
}
.tn-extra {
  height: 33px;
  overflow: hidden;
  line-height: 33px;
}
.tn-item dd a {
  color: #666;
  display: inline-block;
  text-align: left;
}
.tn-item dd {
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.tn-item dt a {
  width: 420px;
  height: 26px;
  display: block;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.tn-item dt {
  height: 26px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 26px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd {
  margin: 0;
}
.tn-item dl {
  height: 117px;
}
.tn-wrapper {
  float: right;
  width: 455px;
  height: 150px;
}
.tn-image img {
  width: 220px;
  height: 150px;
}
.tn-image {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}
.tn-item {
  padding: 15px 0;
  height: 180px;
}
.tn-write .btn-add i,
.tn-extra .btn-ding,
.tn-extra .tn-place i,
.tn-extra .tn-nums i {
  background: url(../../assets/index-images/index-sprites9.png) no-repeat;
}
.tn-write .btn-add i {
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 17px;
  background-position: 0 0;
  overflow: hidden;
  vertical-align: -3px;
  *vertical-align: middle;
}
.tn-write .btn-add {
  display: block;
  /* height: 36px; */
  background-color: #ff9d00;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}
.tn-write {
  float: right;
  width: 140px;
  position: relative;
  top: -1855px;
}
.mfw-travelnotes .navbar {
  padding: 15px 0 15px 0;
  margin-bottom: 20px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  padding-bottom: 8px;
  /* border-bottom: 1px solid #e4e4e4; */
}
</style>
