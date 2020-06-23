<template>
  <div>
    <div class="top-info clearfix">
      <div class="crumb">
        <span class="tit">您在这里：</span>
        <div class="item">
          <div class="drop">
            <span class="hd">
              <a href="#">酒店<i></i></a>
            </span>
          </div>
          <em>&gt;</em>
        </div>
        <div class="item">
          <div class="drop">
            <span class="hd">
              <a href="#">{{ pathnav.address }}酒店<i></i></a>
            </span>
          </div>
          <em>&gt;</em>
        </div>
        <div class="item cur">
          <a href="#">{{ pathnav.reserve }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pathnav"]
};
</script>

<style scoped>
.crumb .item.cur {
  color: #ff7000;
  font-weight: bold;
}
.crumb .item.cur:hover {
  text-decoration: underline;
}
.crumb .item em {
  margin: 0 6px;
  color: #999;
  font-family: "Hiragino Sans GB", "Hiragino Sans GB W3", "宋体";
  font-style: normal;
}
.crumb .drop .hd i {
  position: absolute;
  margin: 8px 0 0 3px;
  width: 0;
  height: 0;
  border-top: 3px solid #ff7000;
  border-left: 3px dashed transparent;
  border-right: 3px dashed transparent;
  overflow: hidden;
  font-size: 0;
}
.crumb .item .hd a {
  color: #333;
}
.crumb .drop .hd a {
  display: block;
  height: 20px;
  padding: 0 13px 0 5px;
}
.crumb .drop .hd {
  height: 20px;
}
.crumb .drop {
  float: left;
}
.crumb .item {
  float: left;
}
.crumb .tit {
  float: left;
  color: #333;
}
.top-info .crumb {
  float: left;
  padding-top: 5px;
  color: #666;
  font-size: 12px;
  line-height: 20px;
}
.top-info {
  margin-top: 10px;
  height: 30px;
  overflow: hidden;
}
</style>
