<template>
  <div>
    <div class="sales-intro new-intro clearfix">
      <div class="intro-l">
        <div class="sales-photo">
          <ul>
            <li>
              <img :src="visacon.img" />
            </li>
          </ul>
          <span class="sales-id">ID:{{ visacon.id }}</span>
        </div>
        <!-- ---- -->
        <div class="visa-info">
          <ul class="clearfix text-left">
            <li>签证类型：<span>单次旅游签证</span></li>
            <li>面试/录指纹：<span>无，具体以实际要求为准</span></li>
            <li>有效期：<span>90天，具体以实际下发为准</span></li>
            <li>停留天数：<span>15天，具体以实际下发为准</span></li>
            <li>入境次数：<span>1次，具体以实际下发为准</span></li>
            <li>订单有效期：<span>3个月</span></li>
            <li>
              受理地区：<span>{{ visacon.con }}</span>
            </li>
          </ul>
        </div>
        <!-- --- -->
        <div class="l-ft clearfix">
          <a class="btn-collect " href="javascript:void(0);">
            <i></i>收藏
            <span class="num">{{ visacon.num }}</span>
          </a>
          <div class="share">
            <a class="btn-share" href="javascript:void(0)"><i></i>分享</a>
          </div>
        </div>
      </div>
      <!-- *--* -->
      <div class="intro-r">
        <div class="sales-title text-left">
          <span class="shop-icon">店铺</span>
          <h1>{{ visacon.title }}</h1>

          <div class="s-label clearfix">
            <span>拒签退</span>
            <span>可加急</span>
            <span>简化资料</span>
          </div>
        </div>
        <div class="price-panel clearfix">
          <ul>
            <li class="item-price" v-if="visacon.price == '' ? false : true">
              <em>￥</em><strong>{{ visacon.price }}</strong>
              <span id="priceDesc">
                <a href="javascript:void(0);" data-stat-area="2_2">价格说明</a>
              </span>
            </li>
            <li class="item-sold" style="width:200px;"></li>
          </ul>
        </div>
        <div class="info-panel">
          <div class="info-promo clearfix">
            <span class="label">优惠信息</span>
            <div class="promo-bd text-left">
              <span class="t-gold honey-hover" style=""> APP金卡专享</span>
              <span class="sales-app"
                ><a href="javascript:void(0);">收藏商品，去APP下单</a></span
              >
              <br />

              <span class="t-text" style="display: none;"></span>
            </div>
          </div>

          <div class="info-tips">
            <span class="label">预订须知</span>
            <div class="info-tips-box">
              <p class="text-left">
                <span>本商品支付完成即可顺利出行，无需等待确认</span>
              </p>
            </div>
          </div>
        </div>
        <div class="property-panel" v-if="visacon.price == '' ? false : true">
          <div>
            <dl class="clearfix tj-type">
              <dt class="label">
                套餐类型
              </dt>
              <dd>
                <ul class="ui-selProp clearfix">
                  <li class="lx" @click="bingo('0')">
                    <a href="javascript:void(0);">
                      <span>简化套餐-免机酒预订单 专家预审，顾问1对1服务</span
                      ><i></i>
                    </a>
                  </li>
                  <li class="lx" @click="bingo('1')">
                    <a href="javascript:void(0);">
                      <span>加急套餐-10个工作日内 预审加急，顾问1对1服务</span
                      ><i></i>
                    </a>
                  </li>
                  <li class="lx" @click="bingo('2')">
                    <a href="javascript:void(0);">
                      <span>拒签全退套餐 符合条件拒签退全款</span><i></i>
                    </a>
                  </li>
                  <li class="lx" @click="bingo('3')">
                    <a href="javascript:void(0);">
                      <span>普通套餐 需英行程单，初级专员预审</span><i></i>
                    </a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="r-line"></div>
        <div class="action-panel clearfix">
          <div class="total">
            <strong id="text_total_price">{{ visacon.total }}</strong>
          </div>
          <div class="on-countdown-hide">
            <span class="buy">
              <a
                class="btn-disabled"
                href="javascript:void(0);"
                v-if="visacon.price == '' ? true : false"
                >已下线</a
              >
              <a
                class="btnn"
                href="javascript:void(0);"
                v-if="visacon.price == '' ? false : true"
                >立即购买</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visacon"],
  data() {
    return {};
  },
  methods: {
    bingo(num) {
      var list = document.getElementsByClassName("lx");
      var price = document.getElementById("text_total_price");
      //   console.log(list[num]);
      for (var i = 0; i <= list.length - 1; i++) {
        list[i].className = "lx";
        list[num].className = "lx on";
      }
      if (num == 0) {
        price.innerHTML = "￥1038";
      } else if (num == 1) {
        price.innerHTML = "￥1299";
      } else if (num == 2) {
        price.innerHTML = "￥1399";
      } else if (num == 3) {
        price.innerHTML = "￥888";
      }
    }
  }
};
</script>

<style scoped>
.action-panel .buy .btnn:hover {
  text-decoration: none;
  background-color: #ff7000;
}
.action-panel .buy .btnn {
  display: block;
  height: 50px;
  background-color: #ff9d00;
  font-size: 20px;
  color: #fff;
  border-radius: 1px;
  line-height: 50px;
  text-align: center;
}

.ui-selProp li.on i {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  background: url(../../assets/visa-images/detail-v4-sprites11.png) no-repeat -40px -40px;
  overflow: hidden;
  line-height: 200px;
}
.ui-selProp li a:hover,
.ui-selProp li.on a {
  padding: 0 9px;
  border: 2px solid #ff9d00;
  text-decoration: none;
}
.ui-selProp li a {
  display: block;
  float: left;
  border: 1px solid #bcbcbc;
  color: #333;
  padding: 1px 10px;
  position: relative;
  line-height: 24px;
}
.ui-selProp li {
  float: left;
  /* display: inline; */
  margin: 10px 10px 0 0;
  min-height: 28px;
  font-size: 14px;
  color: #333;
  position: relative;
}
.ui-selProp {
  margin-top: -10px;
}
.property-panel dd {
  float: left;
  width: 460px;
}
.sales-intro .label {
  float: left;
  width: 70px;
  padding-left: 5px;
  color: #999;
}
.property-panel .label {
  line-height: 28px;
}
.property-panel dl {
  margin: 15px 0;
}
.property-panel {
  margin-bottom: 25px;
}
#priceDesc {
  position: relative;
  display: inline-block;
  left: 5px;
  top: 0;
}
.price-panel .item-price strong,
.action-panel .total strong {
  font-size: 34px;
  color: #ff6f00;
  font-family: "Tahoma";
  font-weight: normal;
}
.price-panel .item-price em,
.action-panel .total em {
  font-size: 18px;
  color: #ff6f00;
  font-family: "Microsoft Yahei";
  font-style: normal;
}
.price-panel .item-price {
  padding: 0 15px 0 0;
}
a:focus {
  text-decoration: none;
}
.action-panel .buy .btn-disabled {
  background-color: #ccc;
  color: #fff;
  cursor: default;
}
.action-panel .buy a {
  display: block;
  height: 50px;
  /* background-color: #ff9d00; */
  font-size: 20px;
  /* color: #fff; */
  border-radius: 1px;
  line-height: 50px;
  text-align: center;
}
.action-panel .buy,
.m-book .buy {
  float: right;
  width: 130px;
}
.action-panel .total strong {
  line-height: 50px;
}
.action-panel .total {
  float: left;
  padding-left: 20px;
  margin-left: 8px;
}
.action-panel {
  margin-bottom: 20px;
  height: 50px;
  background-color: #f6f6f6;
}
.sales-intro .r-line {
  margin: 20px 0;
  border-bottom: 1px dotted #d6d6d6;
  height: 0;
  overflow: hidden;
}
.sales-app a {
  color: #408fff;
  display: inline-block;
  position: relative;
  text-decoration: underline;
}
.sales-app {
  /* display: inline-block; */
  float: right;
  text-align: right;
  font-size: 12px;
  color: #f9644e;
}
.sales-intro .info-panel .t-gold {
  background: linear-gradient(
    135deg,
    rgba(255, 226, 76, 1) 0,
    rgba(255, 219, 38, 1) 100%
  );
  color: #b37012;
}
.sales-intro .info-promo .promo-bd span {
  font-size: 12px;
  line-height: 20px;
}
.sales-intro .info-promo .promo-bd {
  float: left;
  width: 465px;
  font-size: 0;
}
.sales-intro .label {
  float: left;
  width: 70px;
  padding-left: 5px;
  color: #999;
}
.intro-r .info-promo,
.intro-r .info-tips {
  margin: 15px 0;
  line-height: 20px;
}
.price-panel .item-sold {
  width: 135px;
  padding-top: 20px;
}
.price-panel li {
  float: left;
  /* display: inline; */
  padding-top: 24px;
}
.price-panel {
  padding: 15px 20px;
  background-color: #f6f6f6;
  font-size: 12px;
  color: #999;
}
.new-intro .price-panel {
  margin-bottom: 30px;
}
.sales-title .s-label span {
  /* display: inline-block; */
  float: left;
  margin-right: 10px;
  border: 1px dashed #ff7000;
  color: #ff7000;
  line-height: 18px;
  padding: 0 6px;
}
.sales-title .s-label {
  margin-top: 7px;
}
.sales-title h1 {
  display: inline;
  font-size: 22px;
  color: #333;
  line-height: 32px;
  font-weight: normal;
}
.sales-title .shop-icon {
  border: 1px solid #80aaff;
  color: #fff;
  /* display: inline-block; */
  float: left;
  margin-right: 10px;
  line-height: 18px;
  padding: 0 6px;
  background: #80aaff;
  margin-top: 5px;
}
.sales-title {
  margin-bottom: 10px;
}
.intro-r {
  float: right;
  width: 540px;
}
.intro-l .btn-share {
  display: inline-block;
  color: #666;
}
.intro-l .share {
  float: left;
  font-size: 14px;
  color: #666;
  position: relative;
}
.sales-intro .btn-collect {
  float: left;
  margin-right: 25px;
  font-size: 14px;
  color: #666;
}
.sales-intro .btn-collect i,
.intro-l .btn-share i {
  float: left;
  margin: 0 8px 0 0;
  width: 18px;
  height: 18px;
  background: url(../../assets/visa-images/detail-v4-sprites11.png) no-repeat 0 -40px;
  overflow: hidden;
}
.intro-l .btn-share i {
  margin-top: 1px;
  width: 16px;
  height: 17px;
  background-position: -20px -40px;
}
.sales-intro .btn-collect {
  float: left;
  margin-right: 25px;
  font-size: 14px;
  color: #666;
}
.sales-intro .l-ft {
  line-height: 20px;
}
.sales-intro .visa-info span {
  color: #333;
}
.sales-intro .visa-info li {
  margin: 8px 0;
}
.sales-intro .visa-info ul {
  width: 524px;
}
.sales-intro .visa-info {
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 14px;
  color: #999;
  line-height: 20px;
}
.sales-photo .sales-id {
  cursor: default;
  text-decoration: none;
  line-height: 24px;
  font-size: 12px;
  position: absolute;
  padding: 0 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.sales-photo li {
  float: left;
  width: 440px;
}
.sales-photo ul {
  position: absolute;
  left: 0;
  top: 0;
}
.sales-photo {
  margin-bottom: 15px;
  position: relative;
  width: 440px;
  height: 260px;
  overflow: hidden;
}
.new-intro .sales-photo {
  margin-bottom: 30px;
}
.intro-l {
  float: left;
  width: 440px;
}
.new-intro {
  position: relative;
}
.wrapper .new-intro {
  margin-bottom: 30px;
  margin-top: 20px;
}
</style>
