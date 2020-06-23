<template>
  <!-- 主页轮播图+缩略图 -->
  <div class="mfw-focus">
    <div class="show-slider">
      <ul class="show-image">
        <li class="first lunbo-pic" style="display:none">
          <a href="#" class="show-pic">
            <img :src="pic1" />
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{ day_pic1 }}</span>
              {{ dayday_pic1 }}
            </div>
            <h3>{{ title_pic1 }}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#FF9900">
              <a href="#">{{ addre_pic1 }}</a> </font
            >，此目的地共收藏了
            <font color="#FF9900"
              ><a href="#">{{ num1 }}</a></font
            >张
            <a href="#" class="adderss1">{{ addre_pic1 }}</a>
            图片。本片由
            <font color="#FF9900">
              <a href="#">{{ title2_pic1 }}</a>
            </font>
            荣誉出品！
          </p>
        </li>
        <li class="lunbo-pic" style="display:none">
          <a href="#" class="show-pic">
            <img :src="pic2" />
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{ day_pic2 }}</span>
              {{ dayday_pic1 }}
            </div>
            <h3>{{ title_pic2 }}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#FF9900">
              <a href="#">{{ addre_pic2 }}</a> </font
            >，此目的地共收藏了
            <font color="#FF9900"
              ><a href="#">{{ num1 }}</a></font
            >张
            <a href="#" class="adderss1">{{ addre_pic2 }}</a>
            图片。本片由
            <font color="#FF9900">
              <a href="#">{{ title2_pic2 }}</a>
            </font>
            荣誉出品！
          </p>
        </li>
        <li class="lunbo-pic" style="display:none">
          <a href="#" class="show-pic">
            <img :src="pic3" />
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{ day_pic3 }}</span>
              {{ dayday_pic1 }}
            </div>
            <h3>{{ title_pic3 }}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#FF9900">
              <a href="#">{{ addre_pic3 }}</a> </font
            >，此目的地共收藏了
            <font color="#FF9900"
              ><a href="#">{{ num3 }}</a></font
            >张
            <a href="#" class="adderss1">{{ addre_pic3 }}</a>
            图片。本片由
            <font color="#FF9900">
              <a href="#">{{ title2_pic3 }}</a>
            </font>
            荣誉出品！
          </p>
        </li>
        <li class="lunbo-pic" style="display:none">
          <a href="#" class="show-pic">
            <img :src="pic4" />
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{ day_pic4 }}</span>
              {{ dayday_pic1 }}
            </div>
            <h3>{{ title_pic4 }}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#FF9900">
              <a href="#">{{ addre_pic4 }}</a> </font
            >，此目的地共收藏了
            <font color="#FF9900"
              ><a href="#">{{ num4 }}</a></font
            >张
            <a href="#" class="adderss1">{{ addre_pic4 }}</a>
            图片。本片由
            <font color="#FF9900">
              <a href="#">{{ title2_pic4 }}</a>
            </font>
            荣誉出品！
          </p>
        </li>
        <li class="lunbo-pic" style="display:none">
          <a href="#" class="show-pic">
            <img :src="pic5" />
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{ day_pic5 }}</span>
              {{ dayday_pic1 }}
            </div>
            <h3>{{ title_pic5 }}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#FF9900">
              <a href="#">{{ addre_pic5 }}</a> </font
            >，此目的地共收藏了
            <font color="#FF9900"
              ><a href="#">{{ num5 }}</a></font
            >张
            <a href="#" class="adderss1">{{ addre_pic5 }}</a>
            图片。本片由
            <font color="#FF9900">
              <a href="#">{{ title2_pic5 }}</a>
            </font>
            荣誉出品！
          </p>
        </li>
      </ul>
      <ul class="show-nav">
        <li class="pic-list" @click="showpic('0')" value="0">
          <a href="#">
            <img :src="pic1" height="62" width="110" />
            <span></span>
          </a>
        </li>
        <li class="pic-list" @click="showpic('1')" value="1">
          <a href="#">
            <img :src="pic2" height="62" width="110" />
            <span></span>
          </a>
        </li>
        <li class="pic-list" @click="showpic('2')" value="2">
          <a href="#">
            <img :src="pic3" height="62" width="110" />
            <span></span>
          </a>
        </li>
        <li class="pic-list" @click="showpic('3')" value="3">
          <a href="#">
            <img :src="pic4" height="62" width="110" />
            <span></span>
          </a>
        </li>
        <li class="pic-list" @click="showpic('4')" value="4">
          <a href="#">
            <img :src="pic5" height="62" width="110" />
            <span></span>
          </a>
        </li>
      </ul>
      <a class="show-more" href="#">历历在目</a>
    </div>
    <SearchContainer></SearchContainer>
  </div>
</template>

<script>
import pic1 from "@/assets/index-images/l1.png";
import pic2 from "@/assets/index-images/l2.png";
import pic3 from "@/assets/index-images/l3.png";
import pic4 from "@/assets/index-images/l4.png";
import pic5 from "@/assets/index-images/l5.png";
import SearchContainer from "@/components/index/SearchContainer.vue";
export default {
  components: {
    SearchContainer
  },
  data() {
    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      day_pic1: "12",
      day_pic2: "13",
      day_pic3: "14",
      day_pic4: "15",
      day_pic5: "16",
      dayday_pic1: "/May.2020",
      title_pic1: "匆匆八年，泉城一梦：这里有专属我的济南记忆",
      title_pic2:
        "#一入摩洛哥深似海，从此路人皆是心机盖# 12天逆时针环游天方夜谭的奇幻世界",
      title_pic3: "欧亚大陆两万里|26国穿越，背包陆行回国",
      title_pic4: "循胃金陵，人间至味是清欢|总有美食伴随时光留下记忆",
      title_pic5: "东欧迎接而立之年，回甘，微甜 ｜ 塞尔维亚·黑山（1700图预警）",
      addre_pic1: "济南",
      addre_pic2: "摩洛哥",
      addre_pic3: "欧洲",
      addre_pic4: "南京",
      addre_pic5: "塞尔维亚",
      num1: "178500",
      num2: "176880",
      num3: "14761712",
      num4: "991750",
      num5: "51335",
      title2_pic1: "不会武功的凹凸曼",
      title2_pic2: "红毛",
      title2_pic3: "jojo2316",
      title2_pic4: "蝴蝶",
      title2_pic5: "邓耀鸿KenTang",
      a: "",
      arr: "",
      index: -1,
      i: 0,
      timer: ""
    };
  },
  mounted() {
    this.init();
    //定时器
    this.timer = setInterval(this.init, 10000);
    //取消setInterval()设置的定时器
    // clearInterval(this.init, 10000);
  },
  methods: {
    init() {
      var i = this.i;
      //获取class为lunbo-pic的元素
      this.a = document.getElementsByClassName("lunbo-pic");
      this.arr = document.getElementsByClassName("pic-list");
      this.index++;
      //   console.log(this.a.length);
      // console.log(this.index);
      // console.log(this.arr);
      for (i = 0; i <= this.a.length - 1; i++) {
        this.a[i].style.display = "none";
        //使轮播还没有显示的缩略图中的图片的class只为pic-list
        this.arr[i].className = "pic-list";
      }
      this.a[this.index].style.display = "block";
      //使显示了的轮播图在缩略图中标记为黄框
      this.arr[this.index].className = "pic-list active";
      if (this.index >= this.a.length - 1) {
        this.index = -1;
      }
    },
    showpic(num) {
      //右侧缩略图选定
      //   alert(num);
      var i = this.i;
      this.a = document.getElementsByClassName("lunbo-pic");
      this.arr = document.getElementsByClassName("pic-list");
      if (num == 0) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.arr[i].className = "pic-list";
        }
        this.a[num].style.display = "block";
        this.arr[num].className = "pic-list active";
      } else if (num == 1) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.arr[i].className = "pic-list";
        }
        this.a[num].style.display = "block";
        this.arr[num].className = "pic-list active";
      } else if (num == 2) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.arr[i].className = "pic-list";
        }
        this.a[num].style.display = "block";
        this.arr[num].className = "pic-list active";
      } else if (num == 3) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.arr[i].className = "pic-list";
        }
        this.a[num].style.display = "block";
        this.arr[num].className = "pic-list active";
      } else {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].style.display = "none";
          this.arr[i].className = "pic-list";
        }
        this.a[num].style.display = "block";
        this.arr[num].className = "pic-list active";
      }
    }
  }
};
</script>

<style>
@media screen and (max-width: 1440px) {
  body .show-slider {
    height: 400px;
  }
}
@media (max-width: 1440px) {
  body .show-slider .show-title h3 {
    font-size: 20px;
  }
  body .show-slider .show-title {
    top: 15px;
    font-size: 20px;
  }
  body .show-slider .show-title .date {
    font-size: 20px;
  }
  body .show-slider .show-title .day {
    font-size: 30px;
  }
  body .show-slider .show-image .show-info {
    margin-left: -269px;
  }
}
.show-slider .show-more {
  position: absolute;
  z-index: 2;
  right: 40px;
  top: 50%;
  margin-top: 160px;
  width: 110px;
  height: 35px;
  background-image: url(../../assets/index-images/index-sprites9.png);
  background-position: -60px -50px !important;
  line-height: 200px;
  overflow: hidden;
}
.show-slider .show-nav .active span {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #ff9d00;
  width: 110px;
  height: 62px;
  overflow: hidden;
}
a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
.show-slider .show-nav li {
  height: 62px;
  margin-bottom: 6px;
  position: relative;
  overflow: hidden;
}
/* .show-slider .show-nav li:first-child,
.show-slider .show-nav li:first-child span {
  border-radius: 0 5px 0 0;
} */
.show-slider .show-nav {
  position: absolute;
  right: 40px;
  top: 45%;
  margin-top: -166px;
  width: 110px;
  z-index: 2;
}
/* ---------------------- */
font a,
.adderss1 {
  color: rgb(255, 153, 0);
  text-decoration: none;
}
h3 {
  margin: 0;
}
.show-slider {
  height: 574px;
}
.show-slider .show-image .show-info {
  position: absolute;
  left: 50%;
  bottom: 20px;
  margin-left: -320px;
  min-width: 630px;
  font-size: 14px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  text-align: left;
  white-space: nowrap;
}
.show-slider .show-title h3 {
  font-size: 26px;
  font-weight: normal;
}
.show-slider .show-title .day {
  font-size: 38px;
}
.show-slider .show-title .date {
  position: relative;
  width: 180px;
  font-size: 24px;
  overflow: hidden;
  /* *zoom: 1; */
}
.show-slider .show-title {
  position: absolute;
  top: 25px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  /* text-shadow: 0 1px 3px rgba(0,0,0,.4); */
  text-align: left;
  min-width: 1000px;
}
.show-slider .show-title.dark {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  text-decoration: none;
}
.show-slider .show-image li img {
  width: 100%;
  margin: 0;
  border: 0;
  vertical-align: middle;
}
.show-slider .show-pic a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
.show-slider .show-pic {
  display: block;
  height: 100%;
}
.show-slider .show-image {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 2;
}
.show-slider {
  position: relative;
  overflow: hidden;
  background-color: #f1f4f5;
}
.mfw-focus {
  position: relative;
  z-index: 20;
  margin-bottom: 20px;
  clear: both;
}
</style>
