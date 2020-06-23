<template>
  <div>
    <div class="hotel-searchbar clearfix">
      <div class="hs-item hs-item-search">
        <input type="text" :value="hotersear.nainiang" autocomplete="off" />
        <a class="hs-icon hs-icon-search" href="#"></a>
      </div>
      <!-- -- -->
      <div class="hs-item hs-item-date-wrapper">
        <div class="hs-item hs-item-date">
          <el-date-picker v-model="value1" type="date" placeholder="入住日">
          </el-date-picker>
        </div>
        <div class="hs-item hs-item-date">
          <el-date-picker v-model="value1" type="date" placeholder="离店日">
          </el-date-picker>
        </div>
      </div>
      <!-- ---- -->
      <div class="hs-item hs-item-people number-guests-picker">
        <span class="text-left">人数未定</span>
        <i class="icon-person"></i>
      </div>
      <!-- --- -->
      <div class="hs-item hs-item-action">
        <a class="hs-btn" href="#">查看价格</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotersear"],
  data() {
    return {
      value1: ""
    };
  }
};
</script>

<style scoped>
.hotel-searchbar .hs-btn {
  display: block;
  width: 110px;
  height: 34px;
  background-color: #ffb200;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 34px;
  position: relative;
  overflow: hidden;
}
.hotel-searchbar .hs-btn:hover {
  text-decoration: none;
  background-color: #ff9d00;
}
.hotel-searchbar .hs-item-action {
  margin-left: 6px;
}
.hotel-searchbar .hs-item-people .icon-person {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 16px;
  background: url(../../assets/hotel-images/hotel-detail-icon7.png) no-repeat;
  background-position: -70px -140px;
  vertical-align: middle;
  overflow: hidden;
}
.hotel-searchbar .hs-item-date,
.hotel-searchbar .hs-item-people {
  cursor: pointer;
}
.hotel-searchbar .hs-item-people {
  position: relative;
  margin-right: 0;
  margin-left: 15px;
}
.hotel-searchbar .hs-item {
  float: left;
  width: 132px;
  margin-right: 3px;
  position: relative;
}
.hotel-searchbar .hs-item > span {
  font-size: 14px;
  color: #666;
}
.el-date-editor >>> .el-input__icon {
  line-height: 2.5;
}
.el-date-editor >>> .el-input__inner {
  height: 35px;
  outline: none;
  margin-right: 3px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 132px;
  /* height: 36px; */
  position: relative;
  left: 15px;
}
.hotel-searchbar .hs-item-date-wrapper {
  float: left;
  width: 270px;
  margin-right: 0;
}
.hotel-searchbar .hs-item-search > input {
  width: 140px;
  border-radius: 4px;
  outline: none;
}
.hotel-searchbar .hs-icon {
  position: absolute;
  right: 10px;
  top: 10px;
  background: url(../../assets/hotel-images/hotel-detail-icon8.png) no-repeat -70px -200px;
}
.hotel-searchbar .hs-icon-search {
  top: 9px;
  right: 8px;
  width: 20px;
  height: 18px;
  background-position: -70px -200px;
  overflow: hidden;
}
.hotel-searchbar .hs-item > input,
.hotel-searchbar .hs-item > span {
  display: block;
  height: 34px;
  line-height: 34px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.hotel-searchbar .hs-item > input {
  font-size: 16px;
  color: #333;
}

.hotel-searchbar .hs-item-search {
  width: 140px;
  margin-right: 12px;
}
.hotel-searchbar .hs-item {
  float: left;
  /* width: 132px; */
  margin-right: 3px;
  position: relative;
}
.hotel-searchbar {
  margin-top: 15px;
  margin-bottom: 30px;
}
</style>
