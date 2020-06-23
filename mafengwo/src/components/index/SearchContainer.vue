<template>
  <!-- 主页轮播图上方的搜索（可切换） -->
  <div class="search-container">
    <div class="search-group">
      <div class="searchtab">
        <ul class="clearfix">
          <li class="tab-selected tab-list" @click="checkbox('0')">
            <i class="search-i"></i>
            全部
          </li>
          <li class="tab-list" @click="checkbox('1')">
            <i class="search-i"></i>
            酒店
          </li>
          <li class="tab-list" @click="checkbox('2')">
            <i class="search-i"></i>
            目的地
          </li>
          <li class="tab-list" @click="checkbox('3')">
            <i class="search-i"></i>
            去旅行
          </li>
          <li class="tab-list" @click="checkbox('4')">
            <i class="search-i"></i>
            机票
          </li>
        </ul>
      </div>
      <!-- 全部 begin -->
      <div class="searchbar" style="display: block;">
        <div class="search-wrapper">
          <div class="search-input">
            <input
              name="q"
              type="text"
              placeholder="搜目的地/攻略/酒店/旅行特价"
              id="_j_index_search_input_all"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="search-button">
          <a role="button" href="#">
            <i class="icon-search"></i>
          </a>
        </div>
      </div>
      <!-- 全部 end -->
      <!-- 酒店 begin -->
      <div class="searchbar searchbar-hotel" style="display:none">
        <div class="search-wrapper">
          <div class="search-input">
            <input
              name="keyword"
              type="text"
              placeholder="请输入国家、地区、城市名称"
              autocomplete="off"
            />
          </div>
          <!-- ------element-ui组件----- -->
          <div class="search-date">
            <div class="block">
              <el-date-picker
                class="el-data"
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </div>
          <!-- ------------------- -->
        </div>
        <div class="search-button">
          <a role="button" href="#">
            <i class="icon-search"></i>
          </a>
        </div>
      </div>
      <!-- 酒店 end -->
      <!-- 目的地 begin -->
      <div class="searchbar" style="display:none">
        <div class="search-wrapper">
          <div class="search-input">
            <input
              name="q"
              type="text"
              placeholder="我要去..."
              autocomplete="off"
            />
          </div>
        </div>
        <div class="search-button">
          <a role="button" href="#"><i class="icon-search"></i></a>
        </div>
      </div>
      <!-- 目的地 end -->
      <!-- 去旅行 begin -->
      <div class="searchbar" style="display:none">
        <div class="search-wrapper">
          <div class="search-input">
            <input
              type="text"
              placeholder="产品名称/目的地/优惠"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="search-button">
          <a role="button" href="#"><i class="icon-search"></i></a>
        </div>
      </div>
      <!-- 去旅行 end -->
      <!-- 机票 begin -->
      <div class="searchbar search-flight" style="display:none">
        <div class="search-wrapper">
          <div class="search-input flight-start">
            <input
              name="startcity"
              type="text"
              placeholder="出发城市"
              autocomplete="off"
            />
          </div>
          <div class="search-input flight-end">
            <input
              name="endcity"
              type="text"
              placeholder="到达城市"
              autocomplete="off"
            />
          </div>
          <img
            class="search-input-exchange"
            src="https://b4-q.mafengwo.net/s13/M00/E6/80/wKgEaVy1QDmAJy1YAAAC0ZrtOdM370.png"
          />
          <!-- ----- -->
          <div class="search-input search-date">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="  选择日期"
            >
            </el-date-picker>
          </div>
          <!-- ----- -->
        </div>
        <div class="search-button">
          <a role="button" href="#"><i class="icon-search"></i></a>
        </div>
      </div>
      <!-- 机票 end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      i: 0
    };
  },

  methods: {
    checkbox(num) {
      var i = this.i;
      this.b = document.getElementsByClassName("tab-list");
      this.bb = document.getElementsByClassName("searchbar");
      // console.log(this.b);
      // console.log(this.bb);
      if (num == 0) {
        for (i = 0; i <= this.b.length - 1; i++) {
          this.b[i].className = "tab-list";
          this.bb[i].style.display = "none";
        }
        this.b[num].className = "tab-list tab-selected";
        this.bb[num].style.display = "block";
      } else if (num == 1) {
        for (i = 0; i <= this.b.length - 1; i++) {
          this.b[i].className = "tab-list";
          this.bb[i].style.display = "none";
        }
        this.b[num].className = "tab-list tab-selected";
        this.bb[num].style.display = "block";
      } else if (num == 2) {
        for (i = 0; i <= this.b.length - 1; i++) {
          this.b[i].className = "tab-list";
          this.bb[i].style.display = "none";
        }
        this.b[num].className = "tab-list tab-selected";
        this.bb[num].style.display = "block";
      } else if (num == 3) {
        for (i = 0; i <= this.b.length - 1; i++) {
          this.b[i].className = "tab-list";
          this.bb[i].style.display = "none";
        }
        this.b[num].className = "tab-list tab-selected";
        this.bb[num].style.display = "block";
      } else if (num == 4) {
        for (i = 0; i <= this.b.length - 1; i++) {
          this.b[i].className = "tab-list";
          this.bb[i].style.display = "none";
        }
        this.b[num].className = "tab-list tab-selected";
        this.bb[num].style.display = "block";
      }
    }
  }
};
</script>
<style scoped>
@media (max-width: 1440px) {
  body .el-date-editor--daterange.el-input__inner {
    width: 260px;
    height: 47px;
  }
}
/* /deep/：深度选择器 */
.el-date-editor /deep/ .el-range-separator {
  line-height: 41px;
  margin-right: 10px;
}
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  border-color: #fff;
}
.el-date-editor--daterange.el-input__inner {
  width: 280px;
  height: 47px;
  border-radius: 0;
  border: 0;
  overflow: hidden;
}
</style>
<style>
@media (max-width: 1440px) {
  body .search-flight .search-input-exchange {
    width: 26px;
    padding-top: 10px;
    margin-left: -54px;
  }
  body .search-flight .search-wrapper .search-date {
    margin-left: 2px;
  }
  body .search-flight .search-input input {
    width: 140px;
  }
  body .search-flight .search-input {
    width: 170px;
    margin-left: 2px;
  }
  body .searchbar,
  .search-wrapper,
  .search-group .search-input,
  .search-group .search-input input {
    height: 36px;
  }
  body .el-date-editor .el-range-separator {
    margin-top: 12px;
  }
  body .el-range-editor .el-range-input {
    margin-top: 15px;
  }
  body .el-date-editor .el-range__icon {
    margin-top: 15px;
  }
  body .search-group .search-date {
    left: 200px;
  }
  body .search-container {
    bottom: 54px;
    width: 538px;
    margin-left: -269px;
  }
  body .search-group {
    padding: 10px;
  }
  body .search-group .search-input {
    height: 36px;
    margin-top: -1px;
  }
  body .searchbar,
  .search-wrapper,
  .search-group .search-input,
  .search-group .search-input input {
    height: 36px;
  }
  body .search-group .search-input input {
    /* width: 444px; */
    width: 506px;
    padding: 0 10px 0 20px;
    font-size: 14px;
    line-height: 36px;
  }
  body .search-wrapper {
    width: 474px;
  }
  body .search-group .search-button {
    margin-left: 4px;
    width: 40px;
    height: 36px;
  }
  body .search-group .search-button a {
    height: 36px;
  }
  body .search-group .icon-search {
    margin-top: 6px;
  }
  body .searchbar-hotel .search-input {
    width: 210px;
  }
}
.search-flight .search-input-exchange {
  position: absolute;
  top: 37px;
  left: 220px;
  width: 36px;
  padding-top: 15px;
  margin-left: -19px;
  cursor: pointer;
}
.search-flight .search-wrapper .search-date {
  margin-left: 3px;
  width: 130px;
  position: relative;
  left: 0;
  top: 0;
  border-radius: 0px 4px 4px 0px;
}
.search-flight .flight-end input {
  border-radius: 0;
}
.search-flight .flight-end {
  position: relative;
}
.search-group .search-input input {
  /* width: 504px; */
  width: 546px;
  height: 46px;
  border: 0 none;
  padding: 0 21px;
  margin: 0;
  line-height: 46px;
  font-size: 16px;
  color: #666;
  border-radius: 4px;
}
/* .search-flight .search-input input {
  width: 163px;
} */
.search-flight .flight-start input {
  border-radius: 4px 0 0 4px;
}
.search-flight .search-input {
  float: left;
  width: 205px;
  margin-left: 3px;
  overflow: visible;
}
.search-flight .search-wrapper .flight-start {
  margin-left: 0;
}
.search-group .search-date {
  margin-left: 3px;
  font-size: 14px;
  color: #444;
  line-height: 46px;
  position: relative;
  left: 260px;
  top: -47px;
  cursor: pointer;
  width: 280px;
}
.search-group .search-input {
  height: 46px;
  overflow: hidden;
}
.searchbar-hotel .search-input {
  float: left;
  width: 260px;
}
.search-group .icon-search {
  display: inline-block;
  margin-top: 11px;
  width: 24px;
  height: 24px;
  background-image: url(../../assets/index-images/header-sprites13.png);
  background-position: 0 -110px;
  overflow: hidden;
  vertical-align: top;
}
.search-group .search-button a {
  display: block;
  height: 46px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
}
.search-group .search-button {
  float: left;
  margin-left: 6px;
  width: 50px;
  height: 46px;
}

.search-group .search-input {
  height: 46px;
  overflow: hidden;
}
.search-wrapper {
  float: left;
  width: 546px;
}
.searchbar {
  height: 46px;
  overflow: hidden;
}
.searchtab .tab-selected i {
  background-position: -60px -140px;
}
.searchtab i {
  float: left;
  margin: 5px 5px 0 0;
  width: 16px;
  height: 16px;
  background-image: url(../../assets/index-images/header-sprites13.png);
  background-position: -60px -110px;
}
i {
  font-style: italic;
}
.searchtab li {
  float: left;
  /* display: inline; */
  margin-right: 30px;
  cursor: pointer;
}
.searchtab {
  margin-bottom: 7px;
  color: #fff;
  line-height: 26px;
  height: 26px;
  font-size: 14px;
}
.search-group {
  padding: 15px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}
.search-container {
  position: absolute;
  bottom: 45px;
  left: 50%;
  margin-left: -320px;
  width: 632px;
  z-index: 5;
}
</style>
