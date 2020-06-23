<template>
  <div>
    <div class="view_side" id="bignav">
      <div class="slide-right-container">
        <div class="relation_mdd text-left">相关目的地：</div>
        <div class="its_others">
          <div class="mdd_info">
            <!--_j_mdd_sta为目的地点击统计，修改注意-->
            <a href="#" class="_j_mdd_stas" target="_blank">
              <img :src="sidewest.img" width="240px" />
              <i></i>
              <strong class="text-left">{{ sidewest.address }}</strong>
            </a>
          </div>
        </div>
        <div class="pics_num clearfix text-left">
          有<strong>{{ sidewest.picnum }}</strong
          >张照片<a
            href="#"
            title="新疆"
            class="view_more _j_mdd_stas"
            target="_blank"
          ></a>
        </div>
      </div>
      <div class="article_index">
        <a href="#" target="_blank">
          <dl>
            <dt>
              <img :src="sidewest.img2" alt="2020-05" /><i class="ai_ico"></i>
              <div class="ai_date">
                <span><i class="t-fs"></i></span>
                <strong>{{ sidewest.date }}</strong>
              </div>
            </dt>
            <dd class="text-left">{{ sidewest.date2 }}</dd>
          </dl>
        </a>
      </div>
      <div class="mainmdd_rel_notes _j_topblock" id="_j_mainmdd_rel_gls">
        <div class="notes_gonglve" style="margin-bottom: 0">
          <div class="side_title text-left">相关攻略</div>
          <div class="block">
            <el-carousel height="160px" width="240px">
              <el-carousel-item v-for="item in sidewest.items" :key="item.id">
                <img :src="item.img" />
                <h3 class="text-left">{{ item.title }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sidewest"],
  data() {
    return {};
  },
  mounted: function() {
    window.addEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll() {
      var bignav = document.getElementById("bignav"); // 获取到id
      if (
        // !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 723 &&
        document.documentElement.scrollTop < 2600
      ) {
        // 页面高度大于275执行操作
        console.log(">");
        bignav.style.position = "fixed";
        bignav.style.top = "10px";
        bignav.style.right = "360px";
      } else if (document.documentElement.scrollTop > 2600) {
        // console.log('123');
        bignav.style.position = "relative";
        bignav.style.top = "0px";
      } else {
        console.log("<");
        bignav.style.position = "static";
        // 页面高度小于275执行操作
      }
    }
  }
};
</script>

<style scoped="scoped">
.el-carousel >>> .el-carousel__indicators--horizontal {
  width: 240px;
}
.el-carousel >>> .el-carousel__item h3 {
  position: absolute;
  left: 7px;
  right: 7px;
  bottom: 15px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-weight: bold;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.view_side .side_title {
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1;
}
.mainmdd_rel_notes {
  overflow: hidden;
  margin-bottom: 16px;
}
.article_index dd {
  height: 48px;
  line-height: 50px;
  overflow: hidden;
  padding-left: 5px;
  font-size: 14px;
}
.article_index .ai_date strong {
  display: block;
  line-height: 28px;
  font-size: 14px;
}
.article_index .ai_date span i {
  display: inline-block;
  width: 40px;
  height: 11px;
  background: url(../../assets/introduction-images/notes-medal3.png) no-repeat -200px
    0;
  overflow: hidden;
  vertical-align: top;
  position: static;
  margin-top: 2px;
}
.article_index .ai_date span {
  display: block;
  background-color: #f27178;
  line-height: 15px;
  font-size: 9px;
  white-space: nowrap;
  border-bottom: 2px solid #2b2b2b;
  border-radius: 2px 2px 0 0;
}
.article_index .ai_date {
  position: absolute;
  right: 10px;
  bottom: -37px;
  width: 45px;
  height: 45px;
  border: 2px solid #2b2b2b;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  color: #111;
}
.article_index dt i {
  position: absolute;
  left: 3px;
  top: -6px;
  width: 44px;
  height: 46px;
  background: url(../../assets/introduction-images/notes-medal3.png) -50px 0;
}
.article_index dt img {
  width: 100%;
}
.article_index dt {
  position: relative;
  height: 142px;
}
.article_index a {
  color: #666;
}
.article_index {
  padding: 4px 4px 0;
  border: 1px solid #d6d6d6;
  margin: 40px 0 22px;
  font-size: 14px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
}
.pics_num a {
  width: 20px;
  height: 20px;
  float: right;
  background: url(../../assets/introduction-images/nn_sprite_v22.png) -413px -257px
    no-repeat;
  margin-top: 5px;
}
.pics_num a:hover {
  background-position: -434px -257px;
}
.pics_num strong {
  font-size: 22px;
  font-family: Arial;
  margin: 0 3px;
  position: relative;
  top: 2px;
}
.pics_num {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 26px;
}
.mdd_info strong {
  position: absolute;
  left: 10px;
  right: 10px;
  color: #fff;
  font-size: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
  bottom: 12px;
  font-weight: normal;
}
.mdd_info i {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: url(../../assets/introduction-images/cover_bg.png) 0 bottom
    repeat-x;
}
.mdd_info {
  width: 240px;
  position: relative;
  height: 160px;
  overflow: hidden;
}
.its_others {
  margin-bottom: 20px;
  font-size: 14px;
}
.relation_mdd {
  margin-bottom: 12px;
  font-size: 14px;
}
/* .slide-right-container {
    top: 0;
  position: sticky;
} */
.view_side {
  width: 240px;
  /* height:2500px; */
  /* height: 500px; */
  /* background-color: bisque; */
  float: right;
  position: absolute;
}
</style>
