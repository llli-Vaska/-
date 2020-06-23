<template>
  <!--  网页头部 -->
  <div id="header">
    <div class="mfw-header">
      <div class="header-wrap clearfix">
        <div class="head-logo">
          <a href="#" class="mfw-logo" title="马蜂窝自由行"></a>
        </div>
        <ul class="head-nav">
          <li class=" head-nav-active">
            <a href="/">首页</a>
          </li>
          <li>
            <a href="#">目的地</a>
          </li>
          <li>
            <a href="/introduction" title="旅游攻略">旅游攻略</a>
          </li>
          <li
            class=" head-nav-dropdown qlx"
            @mouseenter="enter('0')"
            @mouseleave="leave('0')"
          >
            <a href="#" class="drop-toggle" style="cursor: pointer;">
              <span>
                去旅行
                <i class="icon-caret-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-sales " id="enterone">
              <ul>
                <li>
                  <a href="#">
                    自由行
                    <i class="i-hot">hot</i>
                  </a>
                </li>
                <li>
                  <a href="#">跟团游</a>
                </li>
                <li>
                  <a href="#">当地游</a>
                </li>
                <li>
                  <a href="#">邮轮</a>
                </li>
                <li>
                  <a href="/visa">签证</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="head-nav-flight _j_head_nav_flight">
            <a href="#" title="国内机票火车票">机票火车票</a>
          </li>
          <li>
            <a href="/hotel" title="酒店">订酒店</a>
          </li>
          <li
            class="head-nav-dropdown sq"
            @mouseenter="enter('1')"
            @mouseleave="leave('1')"
          >
            <a class="drop-toggle" style="cursor: pointer">
              <span>
                社区
                <i class="icon-caret-down"></i>
              </span>
            </a>
            <div class="dropdown-panel dropdown-community no-image" id="shequ">
              <div class="panel-wrapper">
                <ul class="nav-list clearfix">
                  <li class="h">
                    <a href="#" title="问答">问答<i class="i-hot">hot</i></a>
                  </li>
                  <li>
                    <a href="#" title="马蜂窝周边"
                      >马蜂窝周边<i class="i-new">new</i></a
                    >
                  </li>
                  <li>
                    <a href="#" title="蜂首俱乐部">蜂首俱乐部</a>
                  </li>
                  <li>
                    <a href="#" title="结伴">结伴</a>
                  </li>
                </ul>
                <ul class="nav-list-sub clearfix">
                  <li>
                    <a href="#" title="马蜂窝旅行家">小组论坛</a>
                  </li>
                  <li>
                    <a href="#" title="分舵同城">分舵同城</a>
                  </li>
                  <li>
                    <a href="#" title="马蜂窝拍卖行">马蜂窝拍卖行</a>
                  </li>
                  <li>
                    <a href="#" title="照片PK">照片PK</a>
                  </li>
                  <li>
                    <a href="#" title="真人兽">真人兽</a>
                  </li>
                  <li>
                    <a href="#" title="道具商店">道具商店</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="#" title="APP">APP</a>
          </li>
          <li class="head-nav-choice">
            <a href="#">
              <div class="mfwzx-logo"></div>
            </a>
          </li>
        </ul>
        <div class="login-out">
          <a href="#" class="weibo-login" title="微博登录"></a>
          <a class="qq-login" href="#" title="QQ登录"></a>
          <a class="weixin-login" href="#" title="微信登录"></a>
          <div v-if="!this.logining" class="dlzc">
            <a id="_j_showlogin" title="登录马蜂窝" href="/Login">登录</a>
            <span class="split">|</span>
            <a href="#" title="注册帐号">注册</a>
          </div>
          <div v-if="this.logining" class="userout">
            <a href="#" >用户{{username}},</a>
            <a href="#" @click="signout"> [退出]</a>
          </div>

        </div>
      </div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
   username:'',
   logining:''
    };
  },
  mounted() {
    this.username = localStorage.getItem('tocken');
    this.logining = localStorage.getItem('show')
  },
  methods: {
    //退出登录
    signout() {
     this.logining = false;
     //清除本地缓存
     localStorage.clear();
    //  window.location.href = '/Login';
    },
    enter(num) {
      var e = document.getElementById("enterone");
      var ee = document.getElementById("shequ");
      if (num == 0) {
        e.style.display = "block";
      } else if (num == 1) {
        ee.style.display = "block";
      }
    },
    leave(num) {
      var e = document.getElementById("enterone");
      var ee = document.getElementById("shequ");
      if (num == 0) {
        e.style.display = "none";
      } else if (num == 1) {
        ee.style.display = "none";
      }
    }
    // enter2: function() {
    //   var e = document.getElementById("shequ");
    //   e.style.display = "block";
    // },
    // leave2: function() {
    //   var e = document.getElementById("shequ");
    //   e.style.display = "none";
    // }
  }
};
</script>

<style>
/* css在index.vue里 */
.dlzc {
  position:absolute;
  top: 35%;
  right: -100px;
}
.userout {
  position: absolute;
  top: 35%;
  right: -160px;
}
</style>
