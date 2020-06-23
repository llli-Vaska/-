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
    <div class="container">
      <div class="wrapper">
        <div class="crumb text-left">
          <a href="/visa" class="crumb-index">签证首页</a>
          &gt; <a href="#">{{ address }}</a>
        </div>
        <VisaCon :visacon="onecon"></VisaCon>
        <VisaRoll :roll="block"></VisaRoll>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import VisaCon from "@/components/visa/VisaCon.vue";
import VisaRoll from "@/components/visa/VisaRoll.vue";
import Footer from "@/components/index/Footer.vue";
import i1 from "../../assets/visa-images/ii.jpeg";
import i2 from "../../assets/visa-images/i2.jpeg";
import i3 from "../../assets/visa-images/i3.jpeg";
import i4 from "../../assets/visa-images/i4.jpeg";
import i5 from "../../assets/visa-images/i5.jpeg";
import i6 from "../../assets/visa-images/i6.jpeg";
import i7 from "../../assets/visa-images/i7.jpeg";
import i8 from "../../assets/visa-images/i8.jpeg";
import i9 from "../../assets/visa-images/i9.jpeg";
import i10 from "../../assets/visa-images/i10.jpeg";
import i11 from "../../assets/visa-images/i11.jpeg";
import i12 from "../../assets/visa-images/i12.jpg";
import i13 from "../../assets/visa-images/i13.jpeg";
// import i14 from "../../assets/visa-images/i14.jpeg";
export default {
  components: {
    Header,
    VisaCon,
    VisaRoll,
    Footer
  },
  data() {
    return {
      address: "日本",
      onecon: {
        price: "",
        total: "--",
        img:
          "http://b1-q.mafengwo.net/s10/M00/35/A0/wKgBZ1iVOtiAfZcTAAIqYtFcsoM37.jpeg?imageMogr2%2Fthumbnail%2F%21440x260r%2Fgravity%2FCenter%2Fcrop%2F%21440x260%2Fquality%2F100",
        id: 2388531,
        con: "上海、江苏、浙江、安徽、江西",
        num: 36,
        title:
          "上海送签-日本单次旅游签证(年终大促冬日去日本滑雪温泉撒欢+拒签全陪+可简化资产+只需护照+东京大阪冲绳北海道签证)"
      },
      block: {
        items: [
          {
            img: i1
          },
          {
            img: i2
          },
          {
            img: i3
          },
          {
            img: i4
          },

          {
            img: i5
          },
          {
            img: i6
          },
          {
            img: i7
          },
          {
            img: i8
          },
          {
            img: i9
          },
          {
            img: i10
          },
          {
            img: i11
          },
          {
            img: i12
          },
          {
            img: i13
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.crumb .crumb-index {
  color: #ff8a00;
}
.crumb a {
  color: #666;
  font-size: 12px;
}
.crumb {
  height: 20px;
  padding: 15px 10px;
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
.wrapper {
  margin: 0 auto;
  width: 1000px;
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
