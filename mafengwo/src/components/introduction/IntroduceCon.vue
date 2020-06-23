<template>
  <div>
    <div
      class="feed-item _j_feed_item"
      v-for="incon in con.incons"
      :key="incon.id"
    >
      <a :href="incon.href">
        <div class="bar clearfix">
          <span class="stat"
            ><span class="num">{{ incon.num }}</span> 蜂蜂顶<i
              class="icon-hand"
            ></i
          ></span>
          <span class="type"
            ><i class="icon-line"></i>来自
            <strong>{{ incon.outin }}</strong></span
          >
        </div>
        <div class="title text-left">
          {{ incon.title }}
        </div>
        <dl class="art clearfix">
          <dt>
            <img :src="incon.img" style="width: 220px;" />
          </dt>
          <dd>
            <div class="info">
              {{ incon.con }}
            </div>
            <div class="ext-r">
              <span class="author"
                ><img :src="incon.userimg" />{{ incon.username }}</span
              ><span class="nums"
                >{{ incon.looknum }}浏览，{{ incon.speaknum }}评论</span
              >
            </div>
          </dd>
        </dl>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["con"],
  data() {
    return {};
  }
};
</script>

<style scoped>
a:focus {
  text-decoration: none;
}
.feed-item:hover {
  background-color: #f8f8f8;
  padding: 21px 15px 20px;
  margin: -1px -15px 0;
}
.feed-item a:hover {
  text-decoration: none;
}
.feed-item:hover .title {
  color: #ff9d00;
}
.cont-main .hr {
  margin-top: 20px;
  height: 1px;
  background-color: #e5e5e5;
  overflow: hidden;
}
.feed-item .author img {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.feed-item .author {
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  color: #ff9d00;
}
.feed-item .ext-r {
  float: right;
  color: #999;
  line-height: 22px;
  font-size: 12px;
}
.feed-item .art .info {
  height: 102px;
  padding-top: 10px;
  margin-bottom: 16px;
  color: #666;
}
.feed-item .art dd {
  overflow: hidden;
}
.feed-item .art dt {
  float: left;
  width: 220px;
  /* display: inline; */
  margin-right: 20px;
}
.feed-item .title {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
}
.cont-main .type strong {
  font-weight: normal;
  color: #ff9d00;
}
.cont-main .type i {
  float: left;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: url(../../assets/introduction-images/new-gl-icon6.png) no-repeat 0
    0;
  overflow: hidden;
}
.cont-main .type .icon-line {
  background-position: 0 -40px;
}
.cont-main .type {
  float: left;
  /* display: inline-block; */
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.feed-item .icon-hand,
.feed-item .icon-cart {
  display: inline-block;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  background: url(../../assets/introduction-images/new-gl-icon6.png) no-repeat -40px -40px;
  overflow: hidden;
  vertical-align: -2px;
}
.feed-item .stat .num {
  color: #ff9d00;
}
.feed-item .stat {
  float: right;
  padding: 0 15px;
  line-height: 30px;
  border: 1px solid #ff9d00;
  border-radius: 15px;
  font-size: 14px;
  background-color: #fff;
  color: #666;
}
.feed-item a {
  display: block;
}
.feed-item {
  padding: 20px 0;
  font-size: 14px;
  line-height: 24px;
}
</style>
