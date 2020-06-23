<template>
  <div>
    <div class="container">
      <!-- 标签列表 -->
      <div class="h-tab">
        <ul class="ul-tab">
          <li v-for="item in information.tab" :key="item.id">
            <a href="#" class="select" @click="tabon($event)">{{
              item.tabtitle
            }}</a>
          </li>
        </ul>
      </div>
      <!-- 筛选 -->
      <div class="hotel-toolbar clearfix">
        <div class="htb-item htb-item-price">
          <div class="htb-title text-left">
            <span>¥{{ this.value[0] }}-{{ this.value[1] }}</span>
            价格
          </div>
          <!-- silder滑块 -->
          <div class="price-range">
            <el-slider v-model="value" range show-stops :max="4000">
            </el-slider>
          </div>
        </div>
        <!-- 住宿等级\类型\设施\品牌-->
        <div
          class="htb-item htb-item-dropdown"
          v-for="ititem in list"
          :key="ititem.id"
        >
          <div class="htb-title text-left">{{ ititem.title }}</div>
          <div class="htb-select open text-left">
            <div class="sel-trigger ">
              <i class="i-sel-arrow"></i>
              <span>不限</span>
            </div>
          </div>
        </div>
        <!-- 指定地点距离 -->
        <div class="htb-item htb-item-dist">
          <div class="htb-title text-left">与指定地点距离</div>
          <div class="htb-select">
            <div class="sel-trigger text-left">
              <i class="i-sel-arrow"></i>
              <span class="dist-num ">10公里</span>
              <span>选择地点</span>
            </div>
          </div>
        </div>
      </div>
      <!-- -*- -->
      <div class="hotel-sortbar clearfix">
        <div class="sortbar-info">
          <div class="total">
            <span>{{ information.num }}</span
            >家酒店
          </div>
          <div class="checkbox-list clearfix">
            <a href="#" class="mui-checkbox" @click="pitch($event)">
              <i class="icon-checkbox"></i>
              临地铁
            </a>
            <a href="#" class="mui-checkbox" @click="pitch($event)">
              <i class="icon-checkbox"></i>
              收藏
            </a>
          </div>
          <div class="htb-search">
            <div class="htb-searchbar">
              <input type="text" placeholder="搜索关键词" />
              <a class="htb-icon-search" href="#"></a>
            </div>
          </div>
        </div>
        <!-- -*- -->
        <div class="sortbar-nav" id="_j_sorter">
          <a href="#" class="on">综合排序</a><a href="#">销量</a
          ><a class="price-sort" href="#"><i></i>价格</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["information"],
  data() {
    return {
      value: [0, 4000],
      list: [
        { title: "住宿等级" },
        { title: "住宿类型" },
        { title: "设施" },
        { title: "品牌" }
      ]
    };
  },
  mounted() {
    let litab = document.getElementsByClassName("select");
    // 确定该a标签的节点
    // console.log(select);
    litab[0].className = "on select";
  },
  methods: {
    tabon(e) {
      let litab = document.getElementsByClassName("select");
      console.log(litab);
      //   鼠标点击的该元素（当前点击的元素）
      //   console.log(e.target);
      for (var i = 0; i < litab.length; i++) {
        litab[i].className = "select";
      }
      e.target.className = " on select";
    },
    pitch(ee) {
      let check = document.getElementsByClassName("mui-checkbox");
      console.log(check);
      console.log(ee);
      if (ee.target.className == "mui-checkbox") {
        ee.target.className = "mui-checkbox on";
      } else if (ee.target.className == "mui-checkbox on") {
        ee.target.className = "mui-checkbox";
      }
    }
  }
};
</script>

<style scoped>
.sortbar-nav a:hover {
  text-decoration: none;
  color: #ff8a00;
}
.sortbar-nav .price-sort i {
  float: right;
  margin: 11px 0 0 5px;
  width: 7px;
  height: 12px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -110px -200px;
  overflow: hidden;
}
.sortbar-nav a {
  display: inline-block;
  margin-left: 20px;
  color: #666;
}
.sortbar-nav .on {
  color: #ff8a00;
}
.sortbar-nav {
  float: right;
  margin-right: 150px;
}
.htb-searchbar .htb-icon-search {
  position: absolute;
  left: -22px;
  top: 5px;
  width: 20px;
  height: 18px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -70px -200px;
  overflow: hidden;
}
.htb-searchbar input {
  padding: 0;
  width: 100px;
  height: 20px;
  border: 0;
  line-height: 20px;
  font-size: 12px;
  color: #666;
  outline: none;
}
.htb-searchbar {
  position: relative;
  width: 112px;
  margin-top: 4px;
  border-bottom: 2px solid #dce0e0;
  line-height: 24px;
}
.htb-search {
  float: left;
  margin-left: 22px;
}
.hotel-toolbar .on .icon-checkbox,
.hotel-sortbar .on .icon-checkbox {
  background-position: -90px -220px;
}
.hotel-toolbar .icon-checkbox,
.hotel-sortbar .icon-checkbox {
  float: left;
  margin-left: -25px;
  width: 20px;
  height: 20px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -70px -220px;
}
.sortbar-info .mui-checkbox i {
  margin-top: 7px;
}
.sortbar-info .mui-checkbox {
  float: left;
  /* display: inline-block; */
  margin-right: 15px;
  padding-left: 30px;
  color: #666;
}
.sortbar-info .checkbox-list {
  float: left;
}
.sortbar-info .total span {
  color: #ff8a00;
  font-size: 16px;
}
.sortbar-info .total {
  float: left;
  padding-right: 15px;
}
.sortbar-info {
  float: left;
}
.hotel-sortbar {
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #eaeaea;
  font-size: 14px;
  color: #666;
}
.htb-item-dist .dist-num {
  float: right;
  padding-right: 5px;
}
.htb-select .sel-trigger {
  height: 18px;
  cursor: pointer;
  line-height: 18px;
}
.htb-select .i-sel-arrow {
  float: right;
  margin: 8px 3px 0 0;
  border-top: 4px solid #999;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  line-height: 0;
  overflow: hidden;
}
.htb-select .sel-trigger {
  height: 18px;
  cursor: pointer;
  line-height: 18px;
}
.htb-select {
  font-size: 12px;
}
.htb-item-dropdown {
  width: 127px;
  height: 66px;
}
.htb-item + .htb-item {
  border-left: 1px solid #d7d7d7;
}
.price-range >>> .el-slider__button {
  border: 2px solid #ffb200;
}
.price-range >>> .el-slider__bar {
  background-color: #ffb200;
}
.price-range,
.dist-range-box {
  margin: -10px 10px 0;
}
.htb-item-price .htb-title span {
  float: right;
}
.htb-title {
  margin-bottom: 10px;
  font-size: 14px;
}
.htb-item {
  float: left;
  padding: 10px 18px;
  /* height: 46px; */
}
.htb-item-price {
  width: 232px;
  height: 66px;
}
.hotel-toolbar {
  height: 82px;
  width: 1000px;
  margin-bottom: 20px;
  padding: 7px 0;
  border: 1px solid #d7d7d7;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.h-tab .ul-tab a {
  /* display: inline-block; */
  float: left;
  height: 38px;
  padding: 0 12px;
  background-color: #f4f4f4;
  border-radius: 3px 3px 0 0;
  line-height: 38px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;
}
.h-tab .ul-tab a.on {
  background-color: #ffb200;
  border-color: #ffb200;
  color: #fff;
}
.h-tab .ul-tab li {
  float: left;
  /* display: inline; */
  margin-right: 5px;
}
.h-tab .ul-tab {
  float: left;
}
.h-tab {
  height: 40px;
  bottom: -2px;
  position: relative;
}
.htb-item-dist {
  width: 216px;
}
</style>
