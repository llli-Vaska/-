<template>
  <div>
    <div class="view_title clearfix">
      <div class="pagelet-block">
        <div class="vt_center">
          <div class="ding _j_ding_father">
            <a role="button" class="up_act " title="顶">顶</a>
            <div class="num _j_up_num topvote19354300">
              {{ userwest.dingnum }}
            </div>
          </div>
          <div class="person" data-cs-t="ginfo_person_operate">
            <a href="#" target="_blank" class="per_pic"
              ><img width="120" height="120" :src="userwest.userimg" alt=""
            /></a>
            <a target="_blank" href="#" class="i-fengshou"></a>
            <strong
              ><a
                href="#"
                target="_blank"
                class="per_name"
                :title="userwest.username"
                >{{ userwest.username }}
              </a></strong
            >
            <a href="#" target="_blank" class="per_grade" title="LV.18"
              >LV.{{ userwest.level }}</a
            >
            <a href="javascript:void(0);" class="per_attention">
              <img
                src="http://images.mafengwo.net/images/home/tweet/btn_sfollow.gif"
                width="38"
                height="13"
                border="0"
                title="关注TA"
              />
            </a>
            <div class="vc_time">
              <span class="time">{{ userwest.time }}</span>
              <span><i class="ico_view"></i>{{ userwest.looknum }}</span>
            </div>
          </div>

          <div class="bar_share _j_share_father _j_top_share_group">
            <div class="bs_share">
              <a href="javascript:void(0);" title="分享" class="bs_btn"
                ><i></i><span>{{ userwest.numfx }}</span
                ><strong>分享</strong></a
              >
            </div>
            <div class="bs_collect ">
              <a
                href="javascript:void(0);"
                rel="nofollow"
                title="收藏"
                class="bs_btn _j_do_fav"
                data-ctime="2020-05-04 22:00:11"
                ><i></i><span>{{ userwest.numsc }}</span
                ><strong>收藏</strong></a
              >
            </div>
          </div>
          <div class="_j_music_father"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userwest"]
};
</script>

<style scoped>
.bar_share .bs_btn strong {
  display: none;
  font-weight: normal;
}
.bs_collect,
.bs_share {
  float: right;
}
.view_title .bar_share .bs_btn span,
.view_title .bar_share .bs_btn strong,
.view_title .bar_share .bs_btn:hover span,
.view_title .bar_share .bs_btn:hover strong {
  display: inline-block;
}

.bar_share a.bs_btn i {
  width: 25px;
  height: 24px;
  display: inline-block;
  background: url(../../assets/introduction-images/sprite_v35.png) -240px -576px
    no-repeat;
}
.bs_share a.bs_btn i {
  background-position: -269px -576px;
}
.view_title .bar_share a.bs_btn i {
  display: block;
  margin: 0 auto 7px;
}
.bar_share a.bs_btn {
  display: block;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  width: 80px;
  position: relative;
  z-index: 1;
}
.view_title .bar_share a.bs_btn {
  width: auto;
}
.bs_share {
  position: relative;
  z-index: 10;
}
.view_title .bs_collect,
.view_title .bs_share {
  width: 120px;
  height: 65px;
  padding-top: 15px;
  text-align: center;
  border-left: 1px solid #e8e8e6;
}
.view_title .bs_share {
  border-right: 1px solid #e8e8e6;
}
.bar_share {
  float: right;
  width: 245px;
}
.vc_time span i {
  width: 18px;
  height: 14px;
  display: inline-block;
  background: url(../../assets/introduction-images/sprite_v35.png) -51px -327px
    no-repeat;
  margin-right: 4px;
  vertical-align: -2px;
}
.vc_time span {
  display: inline-block;
  margin-right: 10px;
}
.vc_time .time,
.vc_time span {
  font-family: Verdana, Arial, Helvetica, STHeiti;
}
.vc_time {
  color: #acacac;
  display: inline;
  margin-left: 10px;
}
.person a {
  display: inline-block;
  margin-right: 5px;
}
.person a.per_grade {
  color: #ea3c1a;
  font-family: Verdana, Arial, Helvetica, STHeiti;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
}
.person a {
  display: inline-block;
  margin-right: 5px;
}
.person a.per_name {
  color: #ff7200;
  font-size: 14px;
  font-weight: normal;
}
b,
strong {
  font-weight: bold;
}
.person .i-fengshou {
  z-index: 100;
  width: 44px;
  height: 44px;
  position: absolute;
  left: 80px;
  top: 6px;
  background: url(../../assets/introduction-images/notes-medal3.png) 0 0
    no-repeat;
}
.person a.per_pic img {
  border-radius: 50%;
}
.person a {
  display: inline-block;
  margin-right: 5px;
}
.person a.per_pic {
  width: 120px;
  height: 120px;
  position: absolute;
  top: -80px;
  left: 0;
  z-index: 88;
}
.person {
  /* width: 480px; */
  padding: 20px 0 0 150px;
  float: left;
  position: relative;
}
.view_title .ding .num {
  font-size: 14px;
  font-weight: bold;
  font-family: Verdana, Arial, Helvetica, STHeiti;
}
.ding a {
  width: 37px;
  height: 33px;
  display: inline-block;
  margin-bottom: 5px;
  text-align: center;
  line-height: 32px;
  background: url(../../assets/introduction-images/sprite_v35.png) -293px -236px
    no-repeat;
  font-size: 18px;
  color: #fff;
  text-shadow: 1px 0 1px #fcaf54;
}
.ding {
  width: 70px;
  position: absolute;
  right: 20px;
  top: 15px;
  text-align: center;
}
.view_title .ding {
  position: absolute;
  right: 50%;
  top: -77px;
  margin-right: -475px;
  color: #fff;
  z-index: 4;
}
.vt_center {
  width: 1000px;
  margin: 0 auto;
}
.view_title {
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 16;
}
.post-up .up_act:hover,
.ding a:hover {
  text-decoration: none;
  background-position: -409px -576px;
}
</style>
