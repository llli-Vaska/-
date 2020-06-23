<template>
  <!-- 主页内容左侧 -->
  <div class="mfw-aside">
    <!-- 出境游知识安全提示img -->
    <div class="asidebox safety-prevention">
      <a style="display:block;margin-top:5px;" href="#"
        ><img
          src="../../assets/index-images/index-link.png"
          width="218"
          height="31"
      /></a>
    </div>
    <!-- img end -->
    <!-- 旅行家专栏 start-->
    <div class="asidebox box-traveller">
      <div class="asidebox-hd">
        <h2 class="hd-title"><a href="#">旅行家专栏</a></h2>
        <a class="hd-right" href="#">专栏首页</a>
      </div>
      <div class="asidebox-bd">
        <ul class="slide-ul" style="left:0px;">
          <li>
            <div class="image">
              <a href="#">
                <img
                  src="../../assets/index-images/chamounix.jpeg"
                  height="140"
                  width="260"
                />
              </a>
            </div>
            <h3>
              <a href="#">{{ title1 }}</a>
            </h3>
            <p>{{ container1 }}</p>
          </li>
          <li>
            <div class="image">
              <a href="#">
                <img
                  src="../../assets/index-images/cha.jpeg"
                  height="140"
                  width="260"
                />
              </a>
            </div>
            <h3>
              <a href="#">{{ title2 }}</a>
            </h3>
            <p>{{ container2 }}</p>
          </li>
          <li>
            <div class="image">
              <a href="#">
                <img
                  src="../../assets/index-images/xian.jpeg"
                  height="140"
                  width="260"
                />
              </a>
            </div>
            <h3>
              <a href="#">{{ title3 }}</a>
            </h3>
            <p>{{ container3 }}</p>
          </li>
          <li>
            <div class="image">
              <a href="#">
                <img
                  src="../../assets/index-images/manshan.jpeg"
                  height="140"
                  width="260"
                />
              </a>
            </div>
            <h3>
              <a href="#">{{ title4 }}</a>
            </h3>
            <p>{{ container4 }}</p>
          </li>
          <li>
            <div class="image">
              <a href="#">
                <img
                  src="../../assets/index-images/hurier.jpeg"
                  height="140"
                  width="260"
                />
              </a>
            </div>
            <h3>
              <a href="#">{{ title5 }}</a>
            </h3>
            <p>{{ container5 }}</p>
          </li>
        </ul>
        <ol class="slide-ol">
          <li class="olol active" @click="slit('0')"></li>
          <li class="olol" @click="slit('1')"></li>
          <li class="olol" @click="slit('2')"></li>
          <li class="olol" @click="slit('3')"></li>
          <li class="olol" @click="slit('4')"></li>
        </ol>
      </div>
    </div>
    <!-- 旅行家专栏 end-->
    <div class="asidebox box-gonglve">
      <div class="asidebox-hd">
        <h2 class="hd-title">旅游攻略推荐</h2>
        <a class="hd-right" href="#">更多</a>
      </div>
      <div class="asidebox-bd">
        <div class="gonglve-item">
          <div class="img">
            <a href="#"
              ><img src="../../assets/index-images/lygl.jpeg" /><span
                class="mark"
                >自由行攻略</span
              ></a
            >
          </div>
          <h3>
            <a href="#">徽州 | 钟灵毓秀之地的前世今生</a>
          </h3>
        </div>
      </div>
    </div>
    <div class="asidebox box-traveller box-activity">
      <div class="asidebox-hd">
        <h2 class="hd-title">最新活动</h2>
        <a class="hd-right" href="#">查看全部&gt;</a>
      </div>
      <div class="asidebox-bd">
        <img src="../../assets/index-images/keroal.jpg" class="mark" />
        <h3 class="hhh3">
          <a href="#">去韩国，遇见不一样的你！</a>
        </h3>
        <p>&gt;&gt;马上启程出发</p>
      </div>
    </div>
    <div class="asidebox box-unknown">
      <div class="asidebox-hd">
        <h2 class="hd-title">未知旅行实验室</h2>
        <span class="hd-right"
          ><a href="#" style="color: #666">查看更多&gt;</a></span
        >
      </div>
      <div class="asidebox-bd">
        <a href="#"
          ><img src="../../assets/index-images/sys.png" width="260" height="170"
        /></a>
      </div>
    </div>
    <div class="asidebox box-hr">
      <div class="asidebox-hd">
        <h2 class="hd-title">加入马蜂窝</h2>
        <span class="hd-right"><a href="#">了解详情&gt;</a></span>
      </div>
      <div class="asidebox-bd">
        <a href="#">
          <img width="260" src="../../assets/index-images/jrmfw.jpeg" alt="" />
        </a>
      </div>
    </div>
    <div class="asidebox box-news">
      <div class="asidebox-hd">
        <div class="hd-title">
          马蜂窝
          <h2><a href="javascript:">旅游网</a></h2>
          最新资讯
        </div>
      </div>
      <ul class="asidebox-bd">
        <li v-for="item in items" :key="item.id">
          {{ item.date }}
          <a href="#">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: "夏木尼，小王子的玫瑰城市",
      container1:
        "夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。",
      title2: "暹粒油淋鱼",
      container2:
        "默默等待，鱼上桌，迅速夹一口塞在嘴里——我就像个戒烟多日的老烟枪终于抽上了烟，心里的空洞瞬间被填满了。",
      title3: "西安：旧长安的画皮",
      container3:
        "西安这座曾经的13朝古都，在今天更像旧长安的画皮，城墙完整绵延，一切就像一张唐画的影印本。",
      title4: "漫山岛",
      container4:
        "漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。",
      title5: " 胡日尔镇的美术馆",
      container5:
        "我最终从胡日尔的美术馆里带走了一幅画，画的是冬日的萨满岩，是日落时分。",
      i: 0,
      lll: 0,
      items: [
        {
          date: "04月07日",
          title: "马蜂窝“云旅游”直播的攻与守"
        },
        {
          date: "04月01日",
          title: "马蜂窝的“云上战疫”"
        },
        {
          date: "02月19日",
          title: "科技“战疫” ：马蜂窝大数据赋能旅游业"
        },
        {
          date: "02月13日",
          title: "陈罡：疫情下旅游业的“守恒与求变”"
        },
        {
          date: "02月06日",
          title: "马蜂窝将退订完成率定为最高KPI"
        },
        {
          date: "09月28日",
          title: "马蜂窝国庆白领出游偏好调查：超7成在旅途中工作"
        }
      ]
    };
  },
  mounted() {
    this.slide();
    this.timer = setInterval(this.slide, 10000);
    // clearInterval(this.slide, 10000);
  },
  methods: {
    slide() {
      this.u = document.getElementsByClassName("slide-ul");
      // console.log("1");
      setTimeout(function() {
        this.lo = document.getElementsByClassName("olol");
        console.log(this.lo);
        this.u = document.getElementsByClassName("slide-ul");
        var i = this.i;

        if (this.u[0].style.left == 0 + "px") {
          for (i = 0; i <= this.lo.length - 1; i++) {
            this.lo[i].className = "olol";
          }
          this.lo[1].className = "olol active";
          this.u[0].style.left = -260 + "px";
          // console.log("-260");
        } else if (this.u[0].style.left == -260 + "px") {
          for (i = 0; i <= this.lo.length - 1; i++) {
            this.lo[i].className = "olol";
          }
          this.lo[2].className = "olol active";
          this.u[0].style.left = -520 + "px";
          // console.log("-520");
        } else if (this.u[0].style.left == -520 + "px") {
          for (i = 0; i <= this.lo.length - 1; i++) {
            this.lo[i].className = "olol";
          }
          this.lo[3].className = "olol active";
          this.u[0].style.left = -780 + "px";
          // console.log("-780");
        } else if (this.u[0].style.left == -780 + "px") {
          for (i = 0; i <= this.lo.length - 1; i++) {
            this.lo[i].className = "olol";
          }
          this.lo[4].className = "olol active";
          this.u[0].style.left = -1040 + "px";
          // console.log("-1040");
        } else if (this.u[0].style.left == -1040 + "px") {
          for (i = 0; i <= this.lo.length - 1; i++) {
            this.lo[i].className = "olol";
          }
          this.lo[0].className = "olol active";
          this.u[0].style.left = 0 + "px";
        }
      }, 9000);
    },
    slit(num) {
      this.lo = document.getElementsByClassName("olol");
      this.u = document.getElementsByClassName("slide-ul");
      var i = this.i;
      if (num == 0) {
        for (i = 0; i <= this.lo.length - 1; i++) {
          this.lo[i].className = "olol";
        }
        this.lo[num].className = "olol active";
        this.u[0].style.left = 0 + "px";
      } else if (num == 1) {
        for (i = 0; i <= this.lo.length - 1; i++) {
          this.lo[i].className = "olol";
        }
        this.lo[num].className = "olol active";
        this.u[0].style.left = -260 + "px";
      } else if (num == 2) {
        for (i = 0; i <= this.lo.length - 1; i++) {
          this.lo[i].className = "olol";
        }
        this.lo[num].className = "olol active";
        this.u[0].style.left = -520 + "px";
      } else if (num == 3) {
        for (i = 0; i <= this.lo.length - 1; i++) {
          this.lo[i].className = "olol";
        }
        this.lo[num].className = "olol active";
        this.u[0].style.left = -780 + "px";
      } else if (num == 4) {
        for (i = 0; i <= this.lo.length - 1; i++) {
          this.lo[i].className = "olol";
        }
        this.lo[num].className = "olol active";
        this.u[0].style.left = -1040 + "px";
      }
    }
  }
};
</script>

<style>
.box-news li a:hover {
  outline: 0;
  text-decoration: underline;
  color: #ff8a00;
}
.box-news li a {
  margin-left: 5px;
  color: #666;
}
.box-news li {
  height: 30px;
  width: 260px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  text-align: left;
}
.asidebox-hd .hd-title a,
.asidebox-hd .hd-title a:hover {
  color: #333;
  text-decoration: none;
}
.asidebox-hd .hd-title h2 {
  display: inline;
  font-size: inherit;
  font-weight: normal;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.box-hr .hd-right a {
  color: #666;
}
.box-activity h3 a {
  color: #ff9d00;
}
.box-activity {
  position: relative;
}
.box-gonglve h3 a {
  color: #333;
}
.gonglve-item h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.gonglve-item .mark:after {
  content: "";
  position: absolute;
  top: 0;
  right: -5px;
  border-top: 12px solid #ff6262;
  border-bottom: 12px solid #ff6262;
  border-right: 5px dashed transparent;
}
.gonglve-item .mark {
  position: absolute;
  left: 0;
  top: 7px;
  padding: 0 6px;
  color: #fff;
  line-height: 24px;
  background-color: #ff6262;
  font-size: 12px;
}
.gonglve-item .img {
  position: relative;
  height: 140px;
  margin-bottom: 10px;
}
.gonglve-item {
  margin-bottom: 10px;
}
.asidebox-hd .hd-right {
  float: right;
  color: #999;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.box-traveller .slide-ol li {
  float: left;
  /* display: inline; */
  margin-left: 3px;
  width: 15px;
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}
.box-traveller .slide-ol .active,
.box-traveller .slide-ol li:hover {
  background-color: #ff9d00;
}
.box-traveller .slide-ol {
  position: absolute;
  right: 14px;
  top: 120px;
}
.box-traveller .asidebox-bd p {
  height: 60px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
  text-align: left;
  color: #666666;
}
/* .box-traveller h3 a {
  color: #333;
} */
.box-traveller h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 26px;
  font-size: 16px;
  color: #333;
  font-weight: normal;
  line-height: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.box-traveller .image {
  height: 140px;
  overflow: hidden;
}
.box-traveller .slide-ul li {
  float: left;
  width: 20%;
}
.box-traveller .slide-ul {
  transition: all 0.4s;
  position: absolute;
  left: 0;
  top: 0;
  width: 500%;
  height: 100%;
}
.box-traveller .asidebox-bd {
  width: 260px;
  height: 246px;
  overflow: hidden;
  position: relative;
}
.asidebox-hd .hd-right {
  float: right;
  color: #999;
}
.asidebox-hd .hd-title a,
.asidebox-hd .hd-title a:hover {
  color: #333;
  text-decoration: none;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.asidebox {
  margin-bottom: 30px;
}
.mfw-aside {
  float: left;
  width: 260px;
}
</style>
