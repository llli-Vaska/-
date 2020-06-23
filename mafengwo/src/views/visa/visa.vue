<template>
  <div>
    <Header></Header>
    <div class="dropdown-bar container-fluid row" style="">
      <div class="content">
        <ul
          class="clearfix ul-dropdown-bar col-md-12 col-xs-12 col-md-offset-3 col-xs-offset-2"
          id="Js_middleNav"
        >
          <li>
            <a href="#">自由行</a>
          </li>
          <li>
            <a href="#">跟团游</a>
          </li>
          <li>
            <a href="#">当地游</a>
          </li>

          <li class="on">
            <a href="#">签证</a>
          </li>
          <li>
            <a href="#">全球WiFi</a>
          </li>
          <li>
            <a href="#">邮轮</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- --- -->
    <div class="container-fluid" style="padding:0">
      <div class="banner">
        <div class="wrapper">
          <div class="place-search-panel">
            <div class="searchbar clearfix">
              <input
                id="ipt_keyword"
                class="search-input"
                type="text"
                placeholder="输入要办理签证的国家或地区名称"
              />
              <a id="btn_keyword" class="search-button" href="#" role="button"
                ><i class="icon-search"></i
              ></a>
            </div>
            <div class="place-search-hot text-left">
              <a href="#">美国</a>
              <a href="#">台湾</a>
              <a href="#">日本</a>
              <a href="#">英国</a>
              <a href="#">泰国</a>
              <a href="#">新加坡</a>
              <a href="#">马来西亚</a>
              <a href="#">更多&gt;</a>
            </div>
          </div>
        </div>
      </div>
      <!-- -*- -->
      <div class="content wrapper">
        <div class="hot_visa">
          <div class="title">
            <h3 class="flt1">马蜂窝推荐</h3>
          </div>
          <ul class="pro-m clearfix row">
            <li class="col-md-4 " v-for="item in visas" :key="item.id">
              <a :href="item.href">
                <div class="pic">
                  <img :src="item.img" width="314" height="180" />
                  <div class="cover">
                    <div class="city">
                      <span>{{ item.startaddress }}</span
                      ><br />
                      <i class="line"></i>
                      <strong>{{ item.endadress }}</strong>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <div class="visa_tips clearfix">
                    <span class="nation">{{ item.startaddress }}</span>
                    <span class="price"
                      ><em>¥{{ item.price }}</em
                      >起</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot_visa">
          <div class="title">
            <h3 class="flt1">热门国家/地区</h3>
            <span class="flt2 ">
              <a href="#">查看更多</a>
            </span>
          </div>
          <ul class="pro-s clearfix row">
            <li
              class="col-md-3 col-xs-6"
              v-for="country in countrys"
              :key="country.id"
            >
              <a :href="country.href">
                <div class="pic">
                  <img
                    :src="country.img"
                    width="100"
                    height="67"
                    class="img-responsive"
                  />
                </div>
                <div class="info">
                  <p class="nation">{{ country.state }}</p>
                  <p class="pice">
                    <em>¥{{ country.price }}</em
                    >起
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="recommed">
          <div class="title">
            <h3 class="flt1">本周热卖</h3>
            <span class="flt2">
              <a href="javascript:void(0);" @click="change"
                ><i class="change"></i>换一组</a
              >
            </span>
          </div>
          <ul class="clearfix row">
            <li
              :class="maimai.class"
              :style="maimai.style"
              v-for="maimai in maimais"
              :key="maimai.id"
            >
              <a href="#">
                <div class="pic">
                  <img :src="maimai.img" width="235" height="132" />
                  <p class="text"><i class="address"></i>{{ maimai.adress }}</p>
                </div>
                <div class="info">
                  <h2>
                    {{ maimai.title }}
                  </h2>
                  <div class="price clearfix">
                    <span class="money"
                      ><em>¥{{ maimai.price }}</em
                      >起</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="flow_visa">
          <div class="title text-left">
            <h3 class="">办理流程</h3>
          </div>
          <ul class="clearfix row">
            <li
              class="col-md-2"
              v-for="procedure in procedures"
              :key="procedure.id"
            >
              <span :class="procedure.class"></span>
              <p>
                <i>{{ procedure.id }}.</i>{{ procedure.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row-banner">
      <a href="#">
        <img :src="imgbottom" />
      </a>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Footer from "@/components/index/Footer.vue";
import img1 from "../../assets/visa-images/japan.jpeg";
import img2 from "../../assets/visa-images/australia.jpeg";
import img3 from "../../assets/visa-images/singa.jpeg";
import img11 from "../../assets/visa-images/a1.gif";
import img22 from "../../assets/visa-images/a2.gif";
import img33 from "../../assets/visa-images/a3.gif";
import img44 from "../../assets/visa-images/a4.gif";
import img55 from "../../assets/visa-images/a5.jpeg";
import img66 from "../../assets/visa-images/a6.jpeg";
import img77 from "../../assets/visa-images/a7.gif";
import img88 from "../../assets/visa-images/a8.jpeg";
import imgbottom from "../../assets/visa-images/banner-alliance3.jpg";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      imgbottom,
      procedures: [
        {
          id: 1,
          class: "icon1",
          title: "选择签证"
        },
        {
          id: 2,
          class: "icon2",
          title: "确认订单"
        },
        {
          id: 3,
          class: "icon3",
          title: "支付费用"
        },
        {
          id: 4,
          class: "icon4",
          title: "坐等商家邮件"
        },
        {
          id: 5,
          class: "icon5",
          title: "递交材料"
        },
        {
          id: 6,
          class: "icon6",
          title: "出签领取"
        }
      ],
      visas: [
        {
          href: "/visa/VisaOne",
          img: img1,
          startaddress: "日本",
          endadress: "上海送签",
          price: "228"
        },
        {
          href: "/visa/VisaTwo",
          img: img2,
          startaddress: "澳大利亚",
          endadress: "全国受理",
          price: "879"
        },
        {
          href: "/visa/VisaThree",
          img: img3,
          startaddress: "新加坡",
          endadress: "全国受理",
          price: "228"
        }
      ],
      countrys: [
        {
          href: "#",
          img:
            "http://b1-q.mafengwo.net/s14/M00/6F/E3/wKgE2l0JqQKAQh-bAAAUy4YuwME159.png?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "日本",
          price: "10"
        },
        {
          href: "#",
          img:
            "http://n1-q.mafengwo.net/s9/M00/8E/07/wKgBs1baom-AP4RdAADHMulz0Qg19.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "泰国",
          price: "121"
        },
        {
          href: "#",
          img:
            "http://n1-q.mafengwo.net/s10/M00/28/20/wKgBZ1h9lfqAIy5gAACeSj2ZR6s35.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "马来西亚",
          price: "155"
        },
        {
          href: "#",
          img:
            "http://b1-q.mafengwo.net/s9/M00/87/44/wKgBs1gRazqADtgAAAA-0uosra025.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "新加坡",
          price: "137"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s8/M00/4E/6D/wKgBpVhrdMOAehR-AAAPsYjs89s60.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "越南",
          price: "8"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s9/M00/43/25/wKgBs1aOI_uAX_ULAABSn9Xk10I15.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "美国",
          price: "6"
        },
        {
          href: "#",
          img:
            "http://n1-q.mafengwo.net/s9/M00/CB/11/wKgBs1gRzi2AST0PAAAaX73pSTI03.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "菲律宾",
          price: "268"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s14/M00/6F/ED/wKgE2l0JqQaAAVt1AAA4RJU2TgU005.png?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "澳大利亚",
          price: "188"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s9/M00/85/31/wKgBs1gRaEiAAUVFAAAwmhS89jg571.gif?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "新西兰",
          price: "399"
        },
        {
          href: "#",
          img:
            "http://n1-q.mafengwo.net/s9/M00/85/AE/wKgBs1gRaO2AC7S3AACZ_a9gssQ28.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "英国",
          price: "266"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s9/M00/CB/04/wKgBs1gRzgiAUDe6AAAQpaF0o1822.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "法国",
          price: "48"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s9/M00/CB/05/wKgBs1gRzg6ACIVWAAAQOwmGS6Q24.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "意大利",
          price: "88"
        },
        {
          href: "#",
          img:
            "http://p1-q.mafengwo.net/s9/M00/CB/0D/wKgBs1gRziGAFiO-AAA5SMAc_HI06.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "俄罗斯",
          price: "60"
        },
        {
          href: "#",
          img:
            "http://b1-q.mafengwo.net/s10/M00/7F/5F/wKgBZ1mybkaAZJ4gAAAsmm7e4eU57.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "土耳其",
          price: "10"
        },
        {
          href: "#",
          img:
            "http://b1-q.mafengwo.net/s9/M00/CA/FF/wKgBs1gRzf2AHZYtAAAW7xQDREY26.jpeg?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "加拿大",
          price: "120"
        },
        {
          href: "#",
          img:
            "http://b1-q.mafengwo.net/s15/M00/FD/FE/CoUBGV2_9jGAHG8AAAE6Mp2Bs3k336.png?imageMogr2%2Fthumbnail%2F%21200x134r%2Fgravity%2FCenter%2Fcrop%2F%21200x134%2Fquality%2F100",
          state: "西班牙",
          price: "79"
        }
      ],
      maimais: [
        {
          class: "col-md-3 onep",
          style: "display: list-item ",
          img: img11,
          adress: "日本",
          title:
            "北京送签-日本单次旅游签证(拒签全退+顺丰包回邮+简化资料+客服秒回+日本签证+东京大阪自由行+北海道滑雪泡温泉)",
          price: "278"
        },
        {
          class: "col-md-3 onep",
          style: "display: list-item ",
          img: img22,
          adress: "菲律宾",
          title:
            "上海送签-菲律宾旅游签证(优先排队最快1工出签+免资产免在职+全国受理+拒签全退+免面试+免机酒+长滩薄荷岛宿务菲律宾签证)",
          price: "399"
        },
        {
          class: "col-md-3 onep",
          style: "display: list-item ",
          img: img33,
          adress: "泰国",
          title:
            "全国办理-泰国电子落地签(春节出游专享+EVOA快速通关+免排队+电子材料+泰国普吉清迈曼谷自由行签证)",
          price: "136"
        },
        {
          class: "col-md-3 onep",
          style: "display: list-item ",
          img: img44,
          adress: "日本",
          title:
            "广州送签-日本单次旅游签证(樱花提前go/上千好评+销量万本无拒签+免流水在职可加急福建简化东京大阪北海道自由行日本签证)",
          price: "266"
        },
        {
          class: "col-md-3 twop",
          style: "display: none ",
          img: img55,
          adress: "美国",
          title:
            "北京送签-美国旅游签证(全国受理+超快约签+专业美签面试讲解+可升级拒签全赔+部分套餐含EVUS登记)",
          price: "6"
        },
        {
          class: "col-md-3 twop",
          style: "display: none ",
          img: img66,
          adress: "澳大利亚",
          title:
            "全国办理-澳大利亚一年多次旅游签证(咨询立减+官方绿色通道+可加急办理+专业客服多对1指导+一价全包+高出签率+全国送签)",
          price: "744"
        },
        {
          class: "col-md-3 twop",
          style: "display: none ",
          img: img77,
          adress: "日本",
          title:
            "上海送签-日本单次旅游签证(拒签全退+上海户籍立减60元+年终蜂抢199元起+简化办理+仅需基本材料+日本自由行签证)",
          price: "218"
        },
        {
          class: "col-md-3 twop",
          style: "display: none ",
          img: img88,
          adress: "越南",
          title:
            "广州送签-越南30天单次旅游签证(指定送签社+全球受理+不分领区+无套路+仅护照首页拍照+可2小时出签+顺丰直邮+拒签退款+越南签证)",
          price: "200"
        }
      ],
      i: 0
    };
  },
  methods: {
    change() {
      var i = this.i;
      this.a = document.getElementsByClassName("col-md-3 onep");
      this.b = document.getElementsByClassName("col-md-3 twop");
      // console.log(this.a[0].style.display);
      // console.log(this.b);
      if (this.a[0].style.display == "list-item") {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.b[i].style.display = "list-item";
        }
      } else {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "list-item";
          this.b[i].style.display = "none";
        }
      }
    }
  }
};
</script>

<style scoped>
.row-banner img {
  width: 100%;
}
.row-banner {
  margin-bottom: 0;
}
a:focus {
  text-decoration: none;
}
.flow_visa li i {
  font-size: 14px;
}
.flow_visa li p {
  height: 46px;
  line-height: 46px;
}
.flow_visa li .icon6 {
  background-position: -200px 0;
  width: 39px;
}
.flow_visa li .icon5 {
  background-position: -160px 0;
  width: 39px;
}
.flow_visa li .icon4 {
  background-position: -120px 0;
  width: 39px;
}
.flow_visa li .icon3 {
  background-position: -80px 0;
  width: 39px;
}
.flow_visa li .icon2 {
  background-position: -40px 0;
  width: 39px;
}
.flow_visa li span {
  width: 37px;
  height: 37px;
  background: url(../../assets/visa-images/icon_sprites.png) no-repeat 0 0;
  display: inline-block;
}
.flow_visa li {
  width: 165px;
  text-align: center;
  float: left;
  font-size: 14px;
}
.flow_visa ul {
  padding: 25px 0;
}
.recommed ul li a:hover .info h2 {
  height: 80px;
}
.recommed li .money em {
  color: #ff9d00;
  font-size: 22px;
  font-style: normal;
}
.recommed li .money {
  float: right;
  color: #959595;
}
.recommed .info .price {
  padding-top: 10px;
}
.recommed .info h2 {
  font-size: 14px;
  color: #000;
  line-height: 20px;
  font-weight: normal;
  padding: 4px 0;
  height: 40px;
  overflow: hidden;
  transition: height 0.2s ease-in-out 0.1s;
  text-align: left;
}
.recommed li .info {
  width: 235px;
  border: 1px solid #f1f1f1;
  border-top: 0;
  padding: 0 8px 5px 8px;
  /* height: 91px; */
  overflow: hidden;
  position: absolute;
  left: 15px;
  bottom: 5px;
  transition: height 0.2s ease-in-out 0.1s;
  background-color: #fff;
}
.recommed li .text i {
  width: 16px;
  height: 21px;
  background: url(../../assets/visa-images/address.png);
  display: inline-block;
  vertical-align: text-bottom;
  margin: 0 5px 0 10px;
}
.recommed li .pic .text {
  width: 100%;
  height: 34px;
  line-height: 34px;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: left;
}
.recommed li .pic {
  width: 235px;
  height: 132px;
  overflow: hidden;
  position: relative;
}
.recommed ul li {
  width: 235px;
  float: left;
  margin-right: 15px;
  height: 229px;
  position: relative;
}
.recommed ul {
  padding: 15px 0;
}
.recommed .title a:hover i {
  transform: rotate(360deg);
  transition: all 0.7s;
}
.recommed .title i {
  width: 14px;
  height: 14px;
  background: url(../../assets/visa-images/change.png);
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}
.hot_visa .pro-s li:hover {
  border-color: #f1f1f1;
  background-color: #f9f9f9;
}
.hot_visa .pro-s .info .pice em {
  color: #ff9d00;
  font-size: 22px;
  font-style: normal;
}
.hot_visa .pro-s .info .pice {
  color: #959595;
  padding-top: 10px;
}
.hot_visa .pro-s .info .nation {
  color: #000;
  font-size: 16px;
}
.hot_visa .pro-s .info {
  width: 90px;
  float: left;
  padding-left: 15px;
}
.hot_visa .pro-s .pic {
  width: 100px;
  height: 67px;
  overflow: hidden;
  float: left;
}
.hot_visa .pro-s li {
  height: 97px;
  float: left;
  background-color: #fff;
  border: 1px solid #fff;
  padding-top: 14px;
  overflow: hidden;
  margin: 0 0 10px 0;
}
.hot_visa .pro-s {
  padding: 20px 0 27px;
}
.flt2 a:hover {
  text-decoration: none;
}
.flt2 {
  float: right;
}
.content .title a {
  color: #666;
  padding-right: 10px;
}
.content .title span {
  line-height: 40px;
}
.hot_visa .visa_tips .price em {
  color: #ff9d00;
  font-size: 22px;
  font-style: normal;
}
.hot_visa .visa_tips .price {
  float: right;
  font-size: 14px;
}
.hot_visa .visa_tips .nation {
  float: left;
  color: #000;
}
.hot_visa .pro-m .visa_tips {
  height: 44px;
  padding: 0 9px;
  background-color: #fff;
  line-height: 44px;
  font-size: 20px;
  overflow: hidden;
}
.hot_visa .pro-m li a:hover .info .visa_tips {
  background-color: #f9f9f9;
}
.hot_visa .pro-m .info {
  border: 1px solid #f1f1f1;
  border-top: 0;
  color: #999;
  width: 314px;
}
.hot_visa .pro-m .pic .city > strong {
  font-weight: normal;
  display: inline-block;
  padding: 10px;
}
.hot_visa .pro-m .pic .line:after {
  content: "";
  width: 3px;
  height: 3px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  right: -7px;
  top: 0;
}
.hot_visa .pro-m .pic .line:before {
  content: "";
  width: 3px;
  height: 3px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: -7px;
  top: 0;
}
.hot_visa .pro-m .pic .line {
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  display: block;
  /* +width: 120px; */
  position: relative;
}
.hot_visa .pro-m .pic .city > span {
  padding: 10px 20px;
  display: inline-block;
}
.hot_visa .pro-m .pic .city {
  display: inline-block;
}
.hot_visa .pro-m .pic .cover {
  width: 314px;
  height: 180px;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding-top: 30px;
}
.hot_visa .pro-m .pic {
  width: 314px;
  height: 180px;
  overflow: hidden;
  position: relative;
}
.hot_visa a {
  color: #000;
}
.hot_visa .pro-m .nomargin {
  margin-right: 0;
}
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
.hot_visa .pro-m li {
  width: 314px;
  float: left;
  margin-right: 29px;
}
.hot_visa .pro-m {
  padding-top: 15px;
}
.flt1 {
  float: left;
}
.content .title h3 {
  font-size: 24px;
  font-weight: normal;
}
.content .title {
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
}
.hot_visa {
  padding-top: 35px;
}
.place-search-hot a {
  margin-right: 10px;
  color: #fff;
}
.place-search-hot {
  margin-top: 8px;
  line-height: 16px;
}
.place-search-panel .icon-search {
  display: inline-block;
  margin-top: 11px;
  width: 24px;
  height: 24px;
  background: url(../../assets/index-images/header-sprites13.png) no-repeat 0 -110px;
  overflow: hidden;
  vertical-align: top;
}
.place-search-panel .search-button {
  float: left;
  width: 50px;
  height: 46px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
}
.place-search-panel .search-input {
  float: left;
  width: 440px;
  height: 46px;
  margin: 0 6px 0 0;
  padding: 0 20px;
  background-color: #fff;
  border: 0 none;
  line-height: 46px;
  font-size: 14px;
  color: #000;
  border-radius: 4px;
  outline: none;
}
.place-search-panel .searchbar {
  height: 46px;
}
.place-search-panel {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  margin: -70px 0 0 -280px;
  width: 540px;
  padding: 15px 10px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
.banner .wrapper {
  position: relative;
  height: 240px;
}
.banner {
  width: 100%;
  height: 240px;
  background: url(../../assets/visa-images/focus1.jpg) no-repeat center top
    #a9c0e0;
}
.dropdown-bar li a:hover {
  text-decoration: none;
  color: #ff9d00;
}
.dropdown-bar .on a {
  border-bottom: 3px solid #fc9d27;
  color: #ff9d00;
}
.dropdown-bar li + li:before {
  content: "";
  position: absolute;
  margin: 13px 0 0 -10px;
  width: 1px;
  height: 15px;
  background-color: #e0e0e0;
}
.dropdown-bar li + li {
  margin-left: 10px;
}
.dropdown-bar li a {
  display: inline-block;
  height: 37px;
  padding: 0 6px;
  color: #666;
}
.dropdown-bar li {
  float: left;
  /* display: inline; */
  margin-right: 10px;
}
/* .dropdown-bar .ul-dropdown-bar {
  margin-left: 235px;
} */
.dropdown-bar .content {
  width: 1000px;
  margin: 0 auto;
}
.dropdown-bar {
  /* width: 100%; */
  height: 39px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  position: relative;
}
</style>
