<template>
  <div>
    <div class="area-main clearfix">
      <div class="area-wrapper">
        <dl class="item-area">
          <dt>区域:</dt>
          <dd>
            <ul class="area-nav clearfix">
              <li>
                <a href="#" class="on">全部</a>
              </li>
              <li v-for="item in area.items" :key="item.id">
                <a href="#" class="">{{ item.address }}</a>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="item-info clearfix" style="height:105px">
          <dt style="display: block;">攻略:</dt>
          <dd style="height: 105px">
            <div style="margin-top:-3px">
              <p
                class="text-left"
                style="line-height:29px"
                v-for="item in area.items"
                :key="item.id"
              >
                {{ item.title }}
              </p>
            </div>
          </dd>
        </dl>
        <dl class="item-price clearfix">
          <!-- 均价 -->
          <dt class="anim-show">
            均价
            <sup
              class="warn-mark"
              title="等级均价由平日价格计算得出，节假日价格会有上浮。"
            >
              <span class="warn-mark-icon"></span> </sup
            >:
          </dt>
          <dd class="anim-show">
            <ul class="clearfix">
              <li>
                <span class="hotel-rate rate3"></span>
                ￥{{ area.price1 }}
              </li>
              <li>
                <span class="hotel-rate rate4"></span>
                ￥{{ area.price2 }}
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <!-- --map-- -->
      <div class="area-maps">
        <div id="container"></div>
      </div>
    </div>
  </div>
</template>
<script
  type="text/javascript"
  src="https://webapi.amap.com/maps?v=1.4.15&key=4d34f6936cd8e1d13162367b4a788e7e"
></script>
<script>
// import $ from "jquery";
export default {
  props: ["area"],

  data() {
    return {};
  },
  mounted() {
    this.Gdmap();
  },
  methods: {
    Gdmap() {
      var map = new AMap.Map("container");
      var map = new AMap.Map("container", {
        zoom: 10, //设置地图的缩放级别
        center: [this.$store.state.left, this.$store.state.right] //中心点坐标
      });
      AMap.plugin(["AMap.Scale"], function() {
        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        map.addControl(new AMap.Scale());
      });
    }
  }
};
</script>

<style scoped>
.area-maps {
  float: right;
  width: 340px;
  height: 220px;
  position: relative;
}
#container {
  width: 340px;
  height: 220px;
}
.hotel-rate {
  margin-left: 10px;
  display: inline-block;
  height: 13px;
  width: 70px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -150px -230px;
  overflow: hidden;
  vertical-align: -2px;
}
.area-wrapper .hotel-rate {
  margin: 0 5px 0 0;
}

.hotel-rate.rate4 {
  width: 56px;
}
.hotel-rate.rate3 {
  width: 42px;
}
.area-wrapper .item-price li {
  float: left;
  /* display: inline; */
  margin-right: 40px;
}
.area-wrapper .item-price ul {
  margin-right: -20px;
}
.area-wrapper .item-price dd {
  width: 580px;
  height: 26px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 60px;
}
.warn-mark-icon {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -135px -220px;
  overflow: hidden;
}
sup {
  top: -0.5em;
}
.warn-mark {
  position: relative;
}
.area-wrapper .item-price dt {
  position: absolute;
  top: 0;
  left: 0;
  float: none;
  margin: 0;
}
.area-wrapper .item-info dd {
  width: 580px;
  height: 105px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 60px;
}
.area-wrapper .item-info {
  height: 105px;
  min-height: 105px;
}
.area-wrapper .area-nav a:hover {
  text-decoration: none;
  color: #ffa800;
}
.area-wrapper .area-nav a {
  display: inline-block;
  padding: 0 5px;
  color: #666;
}
.area-wrapper .area-nav .on,
.area-wrapper .area-nav .on:hover {
  background-color: #ffb200;
  border-radius: 3px;
  color: #fff;
}
.area-wrapper .area-nav li {
  float: left;
  /* display: inline; */
  margin: 0 8px 4px 0;
}
.area-wrapper .area-nav {
  margin: 0 -10px 0 -5px;
  line-height: 24px;
  overflow: hidden;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}
/* .area-wrapper dl.item-area dd {
  padding-top: -2px;
} */
.area-wrapper dt {
  float: left;
  /* display: inline; */
  margin-left: -75px;
  width: 60px;
  font-weight: 1;
}
.area-wrapper dl {
  margin-bottom: 20px;
  padding-left: 60px;
  font-size: 14px;
  color: #666;
  line-height: 26px;
  position: relative;
}
.area-wrapper {
  float: left;
  width: 640px;
  /* display: inline; */
  margin-top: -5px;
}
.area-main {
  margin: 20px 0;
}
</style>
