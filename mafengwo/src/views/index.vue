<template>
  <div>
    <Header></Header>
    <Rotation></Rotation>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Rotation from "@/components/index/Rotation.vue";
import Container from "@/components/index/Container.vue";
import Footer from "@/components/index/Footer.vue";
export default {
  components: {
    Rotation,
    Container,
    Footer,
    Header
  },
  data() {
    return {};
  }
 
  // mounted(){
  //   this.$store.commit("increment");
  //   console.log(this.$store.state.count);
  //   console.log(this.$store.state.abc);

  // }
};
</script>

<style>
@media (max-width: 1440px) {
  body .mfw-header {
    height: 56px;
  }
  body .header-wrap {
    height: 58px;
    width: 1120px;
  }
  body .head-logo {
    padding: 13px 0;
    height: 32px;
  }
  body .head-nav {
    line-height: 58px;
    font-size: 14px;
  }
  body .head-nav li a:hover,
  .head-nav .head-nav-hover a {
    height: 55px;
  }
  body .head-nav-choice .mfwzx-logo {
    width: 75px;
    height: 58px;
  }
  body .login-out {
    padding: 16px 0;
  }
}
/* ------------------------------------- */
.mfw-header .shadow {
  position: absolute;
  left: 0;
  bottom: -2px;
  right: 0;
  width: 100%;
  height: 2px;
  border-top: 1px solid #d6d6d6;
  background-color: rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
#shequ {
  display: none;
}
.head-nav-dropdown .dropdown-panel a:hover {
  color: #ff9d00;
  border: none !important;
  height: auto;
}
.dropdown-panel .nav-list-sub li {
  height: 32px;
  font-size: 14px;
}
.dropdown-panel .nav-list-sub {
  padding-left: 0px;
  margin-left: 30px;
}
.mfw-header .i-new:after {
  border-right: 7px solid #1ec896;
  content: "";
  position: absolute;
  left: -7px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px dashed transparent;
  overflow: hidden;
  line-height: 0;
}
.mfw-header .i-new {
  position: absolute;
  margin: 3px 0 0 8px;
  height: 14px;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  padding: 0 4px 0 3px;
  font-style: normal;
}
.mfw-header .i-new {
  background-color: #1ec896;
}
.head-nav-dropdown .dropdown-panel .i-hot,
.head-nav-dropdown .dropdown-panel .i-new {
  margin-top: 8px;
}
.head-nav-dropdown .dropdown-panel a {
  border: 0;
  display: inline;
  color: #666;
  padding: 0;
}
.dropdown-panel .panel-wrapper .h a {
  color: #ff9d00 !important;
}
.dropdown-panel li {
  float: none;
  height: 70px;
  line-height: 32px;
  font-size: 16px;
  margin-left: 17px;
}
.dropdown-panel ul {
  float: left;
  padding-left: 17px;
  width: 120px;
}
.dropdown-panel .panel-wrapper {
  padding: 20px 0 0 395px;
  height: 260px;
  overflow: hidden;
}
.head-nav-dropdown .dropdown-panel.no-image .panel-wrapper {
  padding-left: 0;
}
.mfw-header .dropdown-panel {
  position: absolute;
  right: 0;
  top: -1px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  z-index: 10;
  width: 1000px;
  height: 300px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.95);
}
.head-nav-dropdown .dropdown-panel {
  border-top: 1px solid #eaeaea;
  /* width: 695px;
    left: -395px; */
  right: auto;
  top: auto;
  z-index: 1;
}
.head-nav-dropdown .dropdown-panel.no-image {
  width: 300px;
  left: auto;
}
/* ----------------------------- */
#enterone {
  display: none;
}
.mfw-header .i-hot:after {
  content: "";
  position: absolute;
  left: -7px;
  top: 0;
  width: 0;
  height: 0;
  border-right: 7px solid #f46240;
  border-top: 7px solid transparent;
  border-bottom: 7px dashed transparent;
  overflow: hidden;
  line-height: 0;
}
.head-nav-dropdown .dropdown-menu a:hover {
  border: 0;
  height: 40px;
}
.mfw-header .dropdown-menu li a:hover {
  background-color: #eee;
  color: #666;
  text-decoration: none;
}
.mfw-header .i-hot {
  position: absolute;
  margin: 3px 0 0 8px;
  height: 14px;
  background-color: #f46240;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  padding: 0 4px 0 3px;
  font-style: normal;
}
.head-nav-dropdown .i-hot {
  margin-top: 12px;
}
.mfw-header .dropdown-menu li a {
  display: block;
  height: 36px;
  /* padding: 0 60px 0 0; */
  padding-left: 20px;
  color: #666;
  cursor: pointer;
}
.head-nav-dropdown .dropdown-menu li a {
  border: 0;
  display: block;
  height: 40px;
  line-height: 40px;
}
.mfw-header .dropdown-menu li {
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  color: #666;
  position: relative;
  vertical-align: top;
}
.head-nav-dropdown .dropdown-menu li {
  float: none;
  height: 40px;
  line-height: 40px;
}
.mfw-header .dropdown-menu ul {
  margin-bottom: 10px;
}
.head-nav-dropdown .dropdown-menu {
  top: auto;
  right: auto;
  width: 140px;
  border-color: #eaeaea;
  /* display: none; */
  z-index: 1;
}
.mfw-header .dropdown-menu {
  position: absolute;
  /* top: 0; */
  /* right: 0; */
  /* width: 208px; */
  /* border: 1px solid #d6d6d6; */
  background-color: #fff;
  z-index: 10;
}
.mfw-header .dropdown-menu.dropdown-sales {
  background-color: rgba(255, 255, 255, 0.95);
}
.login-out .weixin-login:hover {
  background-position: -30px -165px;
}
.login-out .qq-login:hover {
  background-position: -30px -80px;
}
.login-out .weibo-login:hover {
  background-position: 0 -80px;
}
.login-out a:hover {
  color: #ff8a00;
  outline: 0;
  text-decoration: underline;
}
.login-out .split {
  display: inline-block;
  margin: 0 10px;
  width: 1px;
  height: 14px;
  background-color: #c9c9c9;
  overflow: hidden;
  vertical-align: -2px;
}
.login-out a {
  font-size: 14px;
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
.login-out .weixin-login {
  background-position: 0 -165px;
  display: inline-block;
  margin-right: 6px;
  width: 26px;
  height: 26px;
  background-image: url(../assets/index-images/header-sprites15.png);
  overflow: hidden;
  vertical-align: -7px;
}
.login-out .qq-login {
  background-position: -30px -50px;
  display: inline-block;
  margin-right: 6px;
  width: 26px;
  height: 26px;
  background-image: url(../assets/index-images/header-sprites15.png);
  overflow: hidden;
  vertical-align: -7px;
}
.login-out .weibo-login {
  display: inline-block;
  margin-right: 6px;
  width: 26px;
  height: 26px;
  background-image: url(../assets/index-images/header-sprites15.png);
  background-position: 0 -50px;
  overflow: hidden;
  vertical-align: -7px;
}
.login-out {
  width: auto;
  float: right;
  padding: 21px 0;
  height: 26px;
  line-height: 26px;
  color: #c9c9c9;
  text-align: right;
}
.sq:hover .drop-toggle {
  border-bottom: 3px solid #ff9d00;
  color: #ff9d00;
}
.qlx:hover .drop-toggle {
  border-bottom: 3px solid #ff9d00;
  color: #ff9d00;
}
.qlx:hover .icon-caret-down,
.sq:hover .icon-caret-down {
  border-top-color: #ff9d00;
  transform: rotate(180deg);
}
.head-nav li a:hover {
  text-decoration: none;
  color: #ff9d00;
  height: 68px;
  border-bottom: 3px solid #ff9d00;
}
.head-nav-choice .mfwzx-logo {
  width: 75px;
  height: 68px;
  background: url(../assets/index-images/mfw-logo-right.png) no-repeat center;
  background-size: 75px 30px;
}
.icon-caret-down {
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 4px solid #666;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  overflow: hidden;
}
.head-nav-dropdown .icon-caret-down {
  margin: 0 -5px 0 3px;
  border-top-color: #666;
  vertical-align: middle;
  transition: transform 0.5s ease-in-out 0s;
}
.head-nav-dropdown .drop-toggle {
  padding: 0 11px 0px;
  margin-bottom: -1px;
  cursor: default;
  height: auto;
}
.head-nav-flight._j_head_nav_flight:after {
  content: "特价";
  display: block;
  position: absolute;
  top: 9px;
  right: -10px;
  z-index: 3;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 4px 0 4px 0;
  font-size: 11px;
  color: #fff;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  background: -webkit-linear-gradient(
    135deg,
    rgba(255, 74, 74, 1) 0,
    rgba(255, 115, 115, 1) 100%
  );
}
/* .head-nav-dropdown {
    position: relative;
    line-height: 64px;
    border-top: 2px solid transparent;
} */
.head-nav .head-nav-active a {
  background-color: #ff9d00;
  color: #fff !important;
  text-decoration: none;
}
.head-nav li a {
  display: inline-block;
  padding: 0 16px;
  color: #333;
  vertical-align: top;
  overflow: hidden;
  text-decoration: none;
}
.head-nav li {
  float: left;
  position: relative;
}
.head-nav {
  position: relative;
  z-index: 5;
  /* float: left; */
  display: inline;
  padding: 0 10px 0 25px;
  line-height: 68px;
  font-size: 16px;
  color: #333;
}
.head-logo {
  position: relative;
  float: left;
  padding: 16px 0 13px;
  width: 136px;
  height: 39px;
}
.head-logo .mfw-logo {
  display: block;
  height: 39px;
  background: url(../assets/index-images/header-logo.png) no-repeat 0 0;
  position: relative;
}
.header-wrap {
  width: 1200px;
  height: 68px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  /* background-color: aquamarine; */
}
.mfw-header {
  height: 68px;
  background-color: #fff;
  position: relative;
  z-index: 90;
  /* background-color: bisque; */
}
/* #header {
    background-color: aquamarine;

} */
body,
p,
div {
  margin: 0;
  padding: 0;
  word-wrap: break-word;
}
ul,
li,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
body {
  margin: 0 auto;
  min-width: 1140px;
  overflow-x: hidden;
}
</style>
