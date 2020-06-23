<template>
  <div>
    <div class="set_index" id="_j_cover_box" style="height: 574.333px;">
      <div class="set_bg _j_load_cover">
        <img :src="west.img" />
      </div>

      <div class="_j_titlebg">
        <div class="title_bg"></div>
        <div class="view_info">
          <div class="vi_con">
            <h1
              class="headtext lh80 "
              style="white-space: nowrap; overflow-wrap: normal;"
            >
              {{ west.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["west"]
};
</script>

<style scoped>
.vi_con h1 {
  width: 710px;
  height: 80px;
  font-size: 26px;
  line-height: 38px;
  overflow: hidden;
}
.vi_con h1.lh80 {
  line-height: 80px;
}
.vi_con {
  width: 830px;
  padding: 0 0 10px 90px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.view_info {
  width: 100%;
  height: 90px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 15;
}
.title_bg {
  height: 119px;
  background: url(../../assets/introduction-images/title_bg.png) 0 bottom
    repeat-x;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
}
.set_bg,
.set_map {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  background-position: center 0;
  background-repeat: no-repeat;
  overflow: hidden;
}
.set_bg {
  background-size: cover;
}
.set_index {
  height: 480px;
  background: url(../../assets/introduction-images/page_bg.jpg) center 0
    no-repeat;
  background-size: cover;
  position: relative;
}
</style>
