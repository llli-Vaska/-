<template>
  <div>
    <div class="n-content">
      <div class="hotel-list">
        <div
          class="hotel-item clearfix"
          v-for="item in rat.ratings"
          :key="item.id"
        >
          <!-- pic -->
          <div class="hotel-pic">
            <a href="#" target="_blank">
              <img :src="item.pic" style="width: 330px;" />
            </a>
          </div>
          <!-- title -->
          <div class="hotel-title">
            <div class="title text-left">
              <h3>
                <a href="#" target="_blank" :title="item.title">{{
                  item.title
                }}</a>
              </h3>
              <a href="#" target="_blank"><i class="icon-birdRed"></i></a>
              <br />
              <span>{{ item.titleeg }}</span>
            </div>
          </div>
          <!-- info -->
          <div class="hotel-info ">
            <ul class="nums clearfix">
              <li class="rating rating2" v-if="typeof item.num1 != 'undefined'">
                <em>{{ item.num1 }}</em
                >分 <br /><strong>非常好</strong>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><em>{{ item.num2 }}条</em><br />蜂蜂评价</a
                >
              </li>
              <li class="split"></li>
              <li>
                <a href="#" target="_blank"
                  ><em>{{ item.num3 }}篇</em><br />游记提及</a
                >
              </li>
            </ul>
            <p class="summary text-left" :title="item.cont">
              {{ item.cont }}
            </p>
            <div class="location text-left">
              <span title="宽巷子38-39号"
                ><i class="icon-location"></i>地址:{{ item.addree }}</span
              >
            </div>
          </div>
          <!-- btns -->
          <div class="hotel-btns">
            <!-- 1. -->
            <a class="btn-booking text-left" href="#">
              <div class="ota">
                <div class="name">
                  <strong
                    ><img
                      src="https://images.mafengwo.net/images/hotel/newlogo/mafengwo_2018@2x.png"
                      height="20"
                      width="100"
                  /></strong>

                  <i class="icon-alipay" style=""></i>
                  <i class="icon-wxpay" style=""></i>
                </div>
              </div>
              <div class="price _j_booking_price">
                <strong>￥</strong><strong>{{ item.price1 }}</strong
                ><strong
                  style="font-size: 12px;color: #666;padding-left: 2px;vertical-align: 1px;"
                  >起</strong
                >
                <i class="arrow"></i>
              </div>
            </a>
            <!-- 2. -->
            <a class="btn-booking text-left" href="#">
              <div class="ota">
                <div class="name">
                  <strong
                    ><img
                      src="https://images.mafengwo.net/images/hotel/ota/agoda_w100h20_2x_2.png"
                      height="20"
                      width="100"
                  /></strong>
                </div>
              </div>
              <div class="price ">
                <strong>￥</strong><strong>{{ item.price2 }}</strong
                ><strong
                  style="font-size: 12px;color: #666;padding-left: 2px;vertical-align: 1px;"
                  >起</strong
                >
                <i class="arrow"></i>
              </div>
            </a>
            <!-- 3. -->
            <a class="btn-booking text-left" href="#">
              <div class="ota">
                <div class="name">
                  <strong>艺龙</strong>
                </div>
              </div>
              <div class="price">
                <strong>￥</strong><strong>{{ item.price3 }}</strong
                ><strong
                  style="font-size: 12px;color: #666;padding-left: 2px;vertical-align: 1px;"
                  >起</strong
                >
                <i class="arrow"></i>
              </div>
            </a>
            <!-- 4. -->
            <a class="btn-booking text-left" href="#">
              <div class="ota">
                <div class="name">
                  <strong>携程</strong>
                </div>
              </div>
              <div class="price">
                <strong>￥</strong><strong>{{ item.price4 }}</strong
                ><strong
                  style="font-size: 12px;color: #666;padding-left: 2px;vertical-align: 1px;"
                  >起</strong
                >
                <i class="arrow"></i>
              </div>
            </a>
            <!-- 5. -->
            <a class="btn-booking text-left" href="#">
              <div class="ota">
                <div class="name">
                  <strong>有鱼订房</strong>

                  <i class="icon-alipay"></i>
                  <i class="icon-wxpay"></i>
                </div>
              </div>
              <div class="price _j_booking_price">
                <strong>￥</strong><strong>{{ item.price5 }}</strong
                ><strong
                  style="font-size: 12px;color: #666;padding-left: 2px;vertical-align: 1px;"
                  >起</strong
                >
                <i class="arrow"></i>
              </div>
            </a>
          </div>
          <!-- other -->
          <div class="hotel-other">
            <div class="collect">
              <a class="btn-addCollect" href="#"
                ><i></i>

                收藏
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rat"]
};
</script>

<style scoped>
.hotel-other .collect i {
  display: inline-block;
  float: left;
  margin: 2px 5px 0 0;
  width: 12px;
  height: 12px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat;
}
.hotel-other .btn-addCollect i {
  background-position: -130px -50px;
}
.hotel-other .btn-addCollect {
  color: #ff8a00;
}
.hotel-other .collect a {
  display: inline-block;
}
.hotel-other {
  position: absolute;
  right: 0;
  top: 25px;
  text-align: right;
}
.btn-booking:hover {
  text-decoration: none;
  background-color: #f4f4f4;
}
.btn-booking .price .arrow {
  position: absolute;
  right: 0;
  margin: 5px 0 0 0;
  width: 8px;
  height: 13px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -190px -30px;
  overflow: hidden;
}
.btn-booking .price {
  float: left;
  padding-right: 10px;
  width: 95px;
  border-left: 1px solid #eee;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-family: "Microsoft Yahei";
  position: relative;
}
.btn-booking .icon-alipay,
.btn-booking .icon-wxpay {
  margin: 5px 0 0 4px;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -250px
    0;
  overflow: hidden;
  vertical-align: top;
}
.btn-booking .icon-wxpay {
  margin-left: 4px;
  background-position: -250px -15px;
}
.btn-booking .name strong {
  font-size: 14px;
  color: #333;
  font-weight: normal;
}
.btn-booking .name {
  line-height: 24px;
}
.btn-booking .ota {
  float: left;
  width: 180px;
  /* display: inline; */
}
.btn-booking {
  height: 35px;
  width: 300px;
  display: inline-block;
  /* padding: 6px; */
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 2px;
  border-bottom: 1px solid #eee;
  color: #ff8a00;
}
.hotel-btns {
  position: relative;
  float: right;
  width: 300px;
}
a:hover {
  outline: 0;
  text-decoration: underline;
  color: #ff8a00;
}
.hotel-info .icon-location {
  float: left;
  margin: 2px 5px 0 0;
  width: 13px;
  height: 15px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -130px
    0;
  overflow: hidden;
}
.hotel-info .location {
  color: #999;
  line-height: 20px;
}
.hotel-info .location {
  color: #999;
  line-height: 20px;
}
.hotel-info .summary {
  margin: 10px 0 15px;
  font-size: 14px;
  line-height: 26px;
  max-height: 78px;
}
.hotel-info .nums .split {
  margin: 1px 18px 0;
  width: 0;
  height: 30px;
  border-left: 1px solid #eaeaea;
  overflow: hidden;
}
.hotel-info .nums a {
  color: #999;
}
.hotel-info .rating strong {
  font-size: 14px;
  color: #666;
  font-weight: normal;
}
.hotel-info .nums em {
  font-style: normal;
  font-size: 14px;
  color: #ff8a00;
}
.hotel-info .rating {
  margin: -15px 20px 0 0;
  width: 65px;
  height: 51px;
  padding-top: 15px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat 0
    0;
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 16px;
}
.hotel-info .rating2 {
  background-position: 0 -70px;
  height: 67px;
}
.hotel-info .nums li {
  float: left;
}
.hotel-info .nums {
  height: 51px;
  margin: 15px 0 5px;
  color: #999;
  line-height: 15px;
  font-family: "Microsoft Yahei";
}
.hotel-info {
  float: left;
  width: 315px;
  margin-right: 20px;
}
.hotel-title span {
  font-size: 14px;
  color: #999;
  vertical-align: middle;
}
.icon-bird,
.icon-birdRed,
.icon-discount {
  display: inline-block;
  margin-left: 5px;
  width: 24px;
  height: 24px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -280px
    0;
  vertical-align: -6px;
}
.icon-birdRed {
  background-position: -310px 0;
}
.hotel-item .icon-bird,
.hotel-item .icon-birdRed {
  vertical-align: -5px;
}
.hotel-title h3 a {
  color: #666;
}
.hotel-title h3 {
  margin-right: 5px;
  line-height: 30px;
  font-size: 18px;
  font-weight: normal;
  display: inline;
}
.hotel-title .title {
  float: left;
}
.hotel-title {
  margin-bottom: 5px;
  overflow: hidden;
}
.hotel-pic img {
  border-radius: 5px;
}
.hotel-pic {
  float: left;
  /* display: inline; */
  margin-right: 20px;
  width: 330px;
  height: 240px;
  position: relative;
}
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #ececec;
  position: relative;
  transition: all 400ms;
}
.n-content {
  margin-bottom: 40px;
}
</style>
