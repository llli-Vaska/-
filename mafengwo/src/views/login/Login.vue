<template>
  <div>
    <div
      class="fullscreen-bg"
      style='background-image: url("../../assets/login-images/bac.jpg");'
    >
      <img
        src="../../assets/login-images/bac.jpg"
        style="width: 100%; height: auto; margin-top: 0px;"
      />
    </div>
    <!-- ------ -->
    <div class="wrapper-v2">
      <div class="container-v2">
        <div class="signup-forms flip">
          <div class="login-box">
            <div class="account_v2_inner clearfix">
              <div class="account_v2_inner_left" style="display:block">
                <div class="account_v2_tabs clearfix">
                  <p class="account_v2_tab " @click="change('0')">
                    扫码登录
                  </p>
                  <p class="account_v2_tab active" @click="change('1')">密码登录</p>
                </div>
                <!-- **账号登录** -->
                <div class="account_v2_form" style="display:flex">
                  <form>
                    <div class="form-group form-field">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="你的手机号"
                        v-model="username"
                        id="username"
                      />
                      <div class="err-tip" style="display: none;">
                        请输入正确的帐号
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="你的密码"
                        v-model="pwd"
                        autocomplete
                      />
                      <div class="err-tip" style="display: none;">
                        密码不能为空且不少于6位
                      </div>
                      <div class="form-link text-right">
                        <a href="#">忘记密码</a>
                      </div>
                      <div class="submit-btn" >
                        <div type="submit" value="登录" @click.prevent="login">登录</div>
                        <!-- 登 录</input> -->
                      </div>
                    </div>
                  </form>
                </div>
                <!-- **账号登录end** -->
                <!-- *-二维码-* -->
                <div class="account_v2_form" style="display: none;">
                  <div
                    class="qrcode_wrap _j_qrcode_wrap"
                    style="display: block;"
                  >
                    <p class="qrcode_tip">
                      打开<a class="qrcode_tip_high" href="#" target="_blank"
                        >马蜂窝APP</a
                      >-V9.3.38及以上版本扫描二维码，<br />免输入，更快更安全。
                    </p>
                    <div class="qrcode_photo">
                      <div
                        class="qrcode_photo_img _j_qrcode_img"
                        style="display: block;"
                      >
                        <img
                          src="../../assets/login-images/er223.png"
                          class="erweima"
                        />
                        <img
                          src="../../assets/login-images/img_explain.png"
                          class="potoiphone"
                          style=";width:208px;height:306px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- *-二维码end-* -->
                <div class="connect">
                  <p class="hd text-left">用合作网站账户直接登录</p>
                  <div class="bd">
                    <a href="#" class="weibo"></a>
                    <a href="#" class="qq"></a>
                    <a href="#" class="weixin"></a>
                    <div class="clear"></div>
                  </div>
                </div>
                <!-- -**- -->
              </div>
              <!-- --注册-- -->
              <div class="account_v2_inner_left" style="display:none">
                <div class="account_v2_form">
                  <form>
                    <div class="form-group form-field">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="输入你的手机号"
                        v-model="username" 
                        name="username"
                      />
                      <!-- <div class="err-tip" style="display: none;">
                        请输入正确的帐号
                      </div> -->
                      <input
                        type="password"
                        class="form-control"
                        placeholder="密码不能为空且不少于6位"
                        name="password"
                        v-model="pwd" 
                        autocomplete
                      />
                      <!-- <div class="err-tip" style="display: none;">
                        密码不能为空且不少于6位
                      </div> -->
                      <div class="agreement">
                        注册视为同意<a href="#">《马蜂窝用户使用协议》</a>
                      </div>
                      <div class="submit-btn"  @click.prevent="register">
                        <div>立即注册</div>
                      </div>
                      <p id="ppo">{{tishi}}</p>
                    </div>
                  </form>
                </div>
                <div class="connect">
                  <p class="hd text-left">用合作网站账户直接登录</p>
                  <div class="bd">
                    <a href="#" class="weibo"></a>
                    <a href="#" class="qq"></a>
                    <a href="#" class="weixin"></a>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>

              <!-- --注册end-- -->
              <!-- right -->
              <div class="account_v2_inner_right">
                <a class="download" href="/"></a>
              </div>
              <!-- / -->
            </div>
            <div class="bottom-link" v-if="show">
              还没有帐号?<a href="#" @click="dl()">马上注册</a>
            </div>
            <div class="bottom-link" v-if="!show">
              已经注册?<a href="#" @click="zc()">马上登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="photoby">
      &lt;&nbsp;<a href="#">人生若只如初见-沉醉在丽江</a
      >&nbsp;&gt;&nbsp;by&nbsp;<a href="#">莫小染℡●</a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true,
      username:'',
      pwd:'',
      status:'',
      tishi:'',
      logining:false
    };
  },
  methods: {
    register() {
      this.$axios.post(this.HOST+'/api/register',{username:this.username,password:this.pwd})
            .then(result=>{
                this.status = result.data.status;
              //  console.log(this.status)
               if(this.status == 11) {
                 this.tishi = '该账号已经被注册';
                 document.getElementById('ppo').style.color = '#ff3c00';
               } else if(this.status == '01') {
                 this.tishi = '注册成功！请前往登录页面进行登录';
                 document.getElementById('ppo').style.color = 'green';
               }
            })
            .catch(err=>{
                console.log(err)
            })
    },
     login(){
        var inpu = document.getElementsByTagName("input");
          // console.log(inpu);
          var user = inpu[0].value;
          var password = inpu[1].value;
          var error = document.getElementsByClassName("err-tip");
          const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
          if (!reg.test(user) || user == "") {
            error[0].style.display = "block";
          } else {
            error[0].style.display = "none";
          }
          if (password == null || password == "" || password.length < 6) {
            error[1].style.display = "block";
          } else {
            error[1].style.display = "none";
          }

         
          //调用服务端的api
            this.$axios.post(this.HOST+'/api/login',{username:this.username,password:this.pwd})
            .then(result=>{
                console.log(result.data);
                console.log(this.username);
                //登录状态（0：登录失败；1：登录成功）
                // console.log(result.data.status);
                 this.status = result.data.status;
                //判断登录状态，更改其logining
                if(this.status == 1){
                this.logining = true;
                // 缓存控制登录与未登录状态的blur值
                localStorage.setItem('show',this.logining);
                //缓存登录时的账号（用于在主页显示）
                localStorage.setItem('tocken',this.username);
                 console.log('登录状态为：'+ this.$store.state.logining);
                //  跳转到登录状态的主页
                  window.location.href = '/';
                } else {

                   console.log('登录状态为：'+ this.$store.state.logining);
                }
                 
            })
            .catch(err=>{
                console.log(err)
            })
      },
    

    dl() {
      var dlandzc = document.getElementsByClassName("account_v2_inner_left");
      var dl = dlandzc[0];
      var zc = dlandzc[1];
      dl.style.display = "none";
      zc.style.display = "block";
      this.show = false;
    },
    zc() {
      var dlandzc = document.getElementsByClassName("account_v2_inner_left");
      var dl = dlandzc[0];
      var zc = dlandzc[1];
      dl.style.display = "block";
      zc.style.display = "none";
      this.show = true;
    },
    // verification() {
    //   var inpu = document.getElementsByTagName("input");
    //   // console.log(inpu);
    //   var user = inpu[0].value;
    //   var password = inpu[1].value;
    //   var error = document.getElementsByClassName("err-tip");
    //   const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    //   if (!reg.test(user) || user == "") {
    //     error[0].style.display = "block";
    //   } else {
    //     error[0].style.display = "none";
    //   }
    //   if (password == null || password == "" || password.length < 6) {
    //     error[1].style.display = "block";
    //   } else {
    //     error[1].style.display = "none";
    //   }
    // },
    change(num) {
      var seled = document.getElementsByClassName("account_v2_tab");
      var chan = document.getElementsByClassName("account_v2_form");
      // console.log(seled);
      if (num == 0) {
        seled[1].className = "account_v2_tab";
        seled[0].className = "account_v2_tab active";
        chan[0].style.display = "none";
        chan[1].style.display = "flex";
      } else {
        seled[0].className = "account_v2_tab";
        seled[1].className = "account_v2_tab active";

        chan[0].style.display = "flex";
        chan[1].style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
#ppo {
  position: relative;
  top: 20px;
  color: #ff3c00;
}
.signup-forms .agreement a {
  color: #999;
  font-size: 12px;
  margin-left: 2px;
}
.signup-forms .agreement {
  width: 320px;
  margin: 0 auto;
  padding-top: 12px;
  font-size: 12px;
  color: #ccc;
  text-align: right;
  line-height: 1em;
}
.signup-forms .err-tip {
  clear: both;
  background: url(../../assets/login-images/err_ico2.png) 0 -60px no-repeat #fff;
  padding: 0 0 3px 22px;
  width: 300px;
  font-size: 12px;
  color: #ff3c00;
  margin-top: 10px;
  top: -27px;
  position: absolute;
  text-align: left;
  display: none;
}
.signup-forms .err-tip {
  margin: 0;
}
.signup-forms .submit-btn div:focus {
  outline: none;
}
.signup-forms .submit-btn div {
  width: 320px;
  height: 42px;
  border: 0;
  background-color: #ffa800;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.signup-forms .submit-btn div {
  background: linear-gradient(
    135deg,
    rgba(255, 149, 0, 1) 0,
    rgba(255, 165, 38, 1) 100%
  );
  border-radius: 6px;
  font-size: 20px;
  font-weight: 500;
}
.signup-forms .submit-btn {
  width: 320px;
  margin: 0 auto;
  padding: 12px 0 0;
}
.signup-forms .submit-btn {
  padding: 17px 0 0;
}
.signup-forms .form-link a:hover {
  color: #3f200f;
}
.signup-forms .form-link a {
  color: #717376;
  font-size: 12px;
}
.signup-forms .form-link {
  padding: 10px 0 0;
}
.signup-forms .form-field input:focus {
  border: 1px solid #ffa200;
  box-shadow: 0 0 5px #ffa200;
  outline: 0;
  transition: box-shadow 0.25s linear 0s;
}
.signup-forms .form-field input {
  border: 0;
  height: 42px;
  border-color: #f6f7f9;
  background: #f6f7f9;
  border-radius: 6px;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 10px;
}
.signup-forms .form-field {
  clear: both;
  width: 320px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: -60px;
}
.signup-forms .form-field {
  padding: 0;
}
.account_v2_form form {
  position: relative;
  top: -25px;
  /* padding-bottom: 22px; */
}
.photoby a {
  color: #fff;
}
.photoby {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #fff;
  line-height: 2em;
  z-index: 3;
}
.erweima:hover + .potoiphone {
  display: block;
}
.potoiphone {
  display: none;
  position: absolute;
  top: -240px;
  right: -160px;
  z-index: 2;
}
.bottom-link a {
  color: #ffa800;
  margin-left: 6px;
}
.bottom-link {
  width: 140px;
  margin: 15px auto;
  background-color: #000;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 12px;
  color: #fff;
  padding: 4px 0;
  padding-top: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}
.account_v2_inner_right .download {
  position: absolute;
  bottom: 15px;
  right: 12px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.account_v2_inner_right {
  float: right;
  width: 290px;
  height: 434px;
  box-sizing: border-box;
  background: url(../../assets/login-images/img_download.png) no-repeat;
  border-radius: 0 8px 8px 0;
  position: relative;
}
.signup-forms .connect a.weixin:hover {
  background-image: url(../../assets/login-images/ic_weixin_sel.png);
}
.signup-forms .connect a.qq:hover {
  background-image: url(../../assets/login-images/ic_qqqq.png);
}
.signup-forms .connect a.weibo:hover {
  background-image: url(../../assets/login-images/ic_weibo_sel.png);
}
.signup-forms .connect a {
  float: left;
  text-indent: -999px;
  width: 34px;
  height: 34px;
  margin-right: 32px;
  cursor: pointer;
  background-size: 34px;
  background-repeat: no-repeat;
  transition: all 0.3s;
}
.signup-forms .connect a.weibo {
  background-image: url(../../assets/login-images/ic_weibo.png);
}
.signup-forms .connect a.qq {
  background-image: url(../../assets/login-images/ic_qq.png);
}
.signup-forms .connect a.weixin {
  background-image: url(../../assets/login-images/ic_weixin.png);
}
.signup-forms .connect .bd {
  padding: unset;
  width: unset;
  height: unset;
}
.signup-forms .connect .hd {
  border: 0;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: rgba(148, 150, 154, 1);
  line-height: 20px;
  padding: 12px 0;
}
.signup-forms .connect {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 41px;
  height: 97px;
  border-radius: 0 0 0 8px;
  margin: 0;
  background: linear-gradient(
    270deg,
    rgba(246, 247, 249, 0.3) 0,
    rgba(246, 247, 249, 1) 100%
  );
}
.qrcode_photo .qrcode_photo_img,
.qrcode_photo .qrcode_photo_img img {
  width: 150px;
  height: 150px;
  cursor: pointer;
  position: relative;
}
.qrcode_photo {
  margin: 10px auto 0;
  position: relative;
  width: 150px;
  height: 150px;
}
.qrcode_tip_high {
  color: #4d97ff;
  cursor: pointer;
}
.qrcode_tip {
  font-size: 14px;
  font-weight: 500;
  color: #717376;
  line-height: 20px;
}
.account_v2_inner_left .account_v2_form {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 180px);
}
.account_v2_inner_left .account_v2_form {
  align-items: center;
  font-family: PingFangSC-Medium, PingFang SC;
  text-align: center;
}
.account_v2_tabs .active:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -25px;
  width: 50px;
  height: 4px;
  background: rgba(255, 149, 0, 1);
  border-radius: 3px;
}
.account_v2_tab {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(113, 115, 118, 1);
  line-height: 25px;
  padding: 40px 0 12px;
  position: relative;
  cursor: pointer;
}
.account_v2_tabs {
  padding: 0 40px;
  border-bottom: 1px solid #f6f7f9;
  display: flex;
}
.account_v2_inner_left {
  position: relative;
  width: 440px;
  height: 434px;
  float: left;
  box-sizing: border-box;
  padding: 0 58px 0 62px;
}
.account_v2_inner {
  width: 730px;
  height: 434px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}
.signup-forms .login-box {
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  display: none;
}
.signup-forms .signup-box,
.signup-forms .login-box {
  position: unset;
}
.signup-forms.flip .login-box {
  z-index: 10;
  display: block;
  margin-top: -25px;
}
.signup-forms {
  position: relative;
}
.signup-forms {
  z-index: 99;
  margin: 0 auto;
}
.container-v2 {
  flex: 1 1;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
  border-radius: 2px;
  min-height: 455px;
  height: 100%;

  box-sizing: border-box;
}
.wrapper-v2 {
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-right: 15px;
}
.fullscreen-bg::after {
  bottom: 0;
  content: "";
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
.fullscreen-bg:before {
  background: url(../../assets/login-images/full_page_vignette.png) 0 0
    rgba(0, 0, 0, 0.2);
  background-size: 100%;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
}
.fullscreen-bg {
  background-position: 100% 100%;
  background-size: cover;
  bottom: 0;
  right: 0;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
}
</style>
