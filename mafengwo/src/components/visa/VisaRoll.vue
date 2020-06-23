<template>
  <div data-spy="scroll" data-target="#navbar-example" id="boo">
    <div class="clearfix detail-wrapper">
      <div class="sales-nav-wrap">
        <div class="sales-nav ">
          <ul class="clearfix">
            <li class="rollwatch on">
              <a href="#q1">产品介绍</a>
            </li>
            <li class="rollwatch">
              <a href="#q2">所需材料</a>
            </li>
            <li class="rollwatch">
              <a href="#q3">办签流程</a>
            </li>
            <li class="rollwatch">
              <a href="#q4">购买须知</a>
            </li>
            <li class="rollwatch">
              <a href="#">用户点评</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-detail">
        <a class="nav-anchor"></a>
        <!--产品介绍-->
        <div class="m-panel">
          <div class="m-hd">
            <h2 class="text-left" id="q1">产品介绍</h2>
          </div>
          <div class="m-bd">
            <!--机票-->
            <dl class="detail-notes">
              <dt class="subtitle text-left">
                图文详情
              </dt>
              <dd class="notes-content">
                <p class="text-left" v-for="item in roll.items" :key="item.id">
                  <img :src="item.img" />
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <a class="nav-anchor"></a>
        <!--产品介绍-->
        <div class="m-panel">
          <div class="m-hd">
            <h2 class="text-left" id="q2">所需材料</h2>
          </div>
        </div>
        <a class="nav-anchor"></a>
        <!-- 办签流程 -->
        <div class="m-panel">
          <div class="m-hd">
            <h2 class="text-left" id="q3">办签流程</h2>
          </div>
          <div class="m-bd">
            <!--机票-->
            <div class="img">
              <img
                src="http://n1-q.mafengwo.net/s13/M00/A1/C6/wKgEaVyZ5liACNqFAAC8dHsFT2w979.png?imageView2%2F2%2Fw%2F530%2Fh%2F8000%2Fq%2F100"
              />
            </div>

            <!-- 景点POI -->
          </div>
        </div>
        <a class="nav-anchor"></a>
        <!--购买须知-->
        <div class="m-panel m-notice">
          <div class="m-hd">
            <h2 class="text-left" id="q4">购买须知</h2>
          </div>
          <div class="m-bd">
            <dl class="detail-alert">
              <dt class="subtitle text-left">取消政策</dt>
              <dd class="notes-content text-left">
                订单支付成功后，买家未办理（即资料未快递/邮件给商家），可与商家协商退款；<br />
                订单有效期为3个月，买家在有效期内未办理，视为自动放弃，予以退款处理，敬请谅解；<br />
                若商家已为您递交资料或已付费预约，已支付订单款项无法退还，敬请谅解；<br />
                非拒签可退款套餐，若发生拒签则已支付订单款项无法退还，敬请谅解。<br />
              </dd>
            </dl>
            <dl class="detail-notes">
              <dt class="subtitle text-left">温馨提示</dt>
              <dd class="notes-content text-left">
                <p>
                  ·资料递交入馆后，领馆会进行电话抽查申请人或申请人的工作单位，请务必保持联系方式畅通，以免错过领馆的电话抽查，请注意电话区号为020/010/021等区号的电话。<br />·目前澳洲签证均为电子签证，签证资料不需要邮寄纸质版，亲只要将电子版资料发到我们指定的邮箱：2881351933@qq.com，备注好您的订单号以便专员审核资料
                </p>
              </dd>
            </dl>
            <dl class="detail-notes">
              <dt class="subtitle text-left">重要提示</dt>
              <dd class="notes-content text-left">
                <p>
                  1.
                  马蜂窝尊重并保护用户隐私，用户信息只会用于协助用户预订旅游商品。
                </p>
                <p>
                  2.
                  若相关办理部门（包括并不限于使馆、政府部门、签证中心、保险公司等）有政策性费用调整，差额需由客人自行承担，敬请谅解。
                </p>
              </dd>
            </dl>
            <dl class="detail-notes">
              <dt class="subtitle text-left">产品服务信息</dt>
              <dd class="notes-content text-left">
                该旅游产品由 深圳招商国际旅游有限公司 提供
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["roll"],
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var roll = document.getElementsByClassName("sales-nav");
      var rolllist = document.getElementsByClassName("rollwatch");
      console.log(rolllist);
      console.log(scrollTop);
      if (scrollTop > 700 && scrollTop < 11262) {
        roll[0].className = " sales-nav fixed ";
        rolllist[0].className = "rollwatch on";
        for (var i = 0; i <= rolllist.length - 1; i++) {
          rolllist[i].className = "rollwatch";
          rolllist[0].className = "rollwatch on";
        }
        if (scrollTop > 10200 && scrollTop < 10322) {
          for (i = 0; i <= rolllist.length - 1; i++) {
            rolllist[i].className = "rollwatch";
            rolllist[1].className = "rollwatch on";
          }
        } else if (scrollTop > 10322 && scrollTop < 10599) {
          for (i = 0; i <= rolllist.length - 1; i++) {
            rolllist[i].className = "rollwatch";
            rolllist[2].className = "rollwatch on";
          }
        } else if (scrollTop > 10599 && scrollTop < 11219) {
          for (i = 0; i <= rolllist.length - 1; i++) {
            rolllist[i].className = "rollwatch";
            rolllist[3].className = "rollwatch on";
          }
        }
      } else {
        roll[0].className = " sales-nav ";
      }
    }
  }
};
</script>

<style scoped>
.detail-notes .notes-content {
  font-size: 14px;
  line-height: 1.8;
}
.detail-notes {
  margin: 20px 0 40px 20px;
}
.main-detail .subtitle {
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
}
.detail-alert .subtitle {
  color: #333;
}
.detail-alert {
  margin: 0 0 25px -10px;
  border: 1px solid #e0e0e0;
  padding: 15px 20px 15px 28px;
  font-size: 14px;
  background-color: #fff8b7;
}
.main-detail .m-panel {
  margin-bottom: 50px;
  padding-left: 25px;
  color: #333;
}
.detail-notes img {
  max-width: 100%;
}
.detail-notes .notes-content p {
  margin: 10px 0;
}
.detail-notes .notes-content {
  font-size: 14px;
  line-height: 1.8;
}
.main-detail .subtitle:before {
  content: "";
  float: left;
  margin: 9px 0 0 -20px;
  width: 7px;
  height: 7px;
  background-color: #ff9d00;
  border-radius: 50%;
  overflow: hidden;
}
.main-detail .subtitle {
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
}
.detail-notes {
  margin: 20px 0 40px 20px;
}
.main-detail .m-bd {
  line-height: 1.8;
}
.main-detail .m-hd h2:before {
  content: "";
  float: left;
  margin: 3px 0 0 -25px;
  width: 5px;
  height: 24px;
  background-color: #ff9f00;
}
.main-detail .m-hd h2 {
  font-size: 24px;
  font-weight: normal;
  line-height: 30px;
}
.main-detail .m-hd {
  margin-bottom: 25px;
}
.main-detail .m-panel {
  margin-bottom: 50px;
  padding-left: 25px;
  color: #333;
}
.nav-anchor {
  display: block;
  margin-top: -60px;
  padding-top: 60px;
  visibility: hidden;
}
.main-detail {
  float: left;
  width: 660px;
}
.sales-nav.fixed {
  position: fixed;
  left: 50%;
  top: 0;
  margin-left: -500px;
  z-index: 100;
}
.sales-nav li a {
  display: inline-block;
  color: #333;
  font-size: 18px;
}
.sales-nav .on a {
  color: #ff9d00;
}
.sales-nav li {
  float: left;
  /* display: inline; */
  margin-right: 30px;
}
.sales-nav .on {
  margin-bottom: -2px;
  border-bottom: 2px solid #ff9d00;
}
.sales-nav {
  width: 1000px;
  border-bottom: 2px solid #e8e8e8;
  line-height: 50px;
  background-color: #fff;
}
.sales-nav-wrap {
  height: 54px;
  margin-bottom: 25px;
}
.detail-wrapper {
  position: relative;
  height: 1000px;
}
</style>
