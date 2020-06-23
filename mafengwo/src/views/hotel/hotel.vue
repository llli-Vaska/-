<template>
  <div>
    <Header></Header>
    <div class="hotel-main"></div>
    <div class="hotel-main">
      <div class="h-title text-left">订酒店</div>
      <div class="clearfix date-warp">
        <div class="add-travle">
          <input type="text" placeholder="出行目的地" id="_j_search_input" />
        </div>
        <div class="block stay-time">
          <el-date-picker v-model="value1" type="date" placeholder="入住日期">
          </el-date-picker>
        </div>
        <div class="block leave-time">
          <el-date-picker v-model="value1" type="date" placeholder="离店日期">
          </el-date-picker>
        </div>
        <div class="hs-item hs-item-people number-guests-picker">
          <span class="text-left">人数未定</span>
          <i class="icon-person"></i>
        </div>
        <div class="btn-search" id="_j_search_btn"><i></i></div>
      </div>
      <div class="h-notice clearfix">
        <ul>
          <li>
            <i class="notice01"></i>
            <div class="flt1">
              <h2 class="text-left">住宿攻略</h2>
              <p>区域攻略到特色主题，应有尽有</p>
            </div>
          </li>
          <li>
            <i class="notice02"></i>
            <div class="flt1">
              <h2 class="text-left">专享价格</h2>
              <p>多平台价格对比，天天专享特惠</p>
            </div>
          </li>
          <li>
            <i class="notice03"></i>
            <div class="flt1">
              <h2 class="text-left">真实点评</h2>
              <p>超过100万真实用户点评和游记</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="h-theme">
        <div class="h-title" style="margin-top: 50px;">主题住宿</div>
        <div class="tab-theme">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="浪漫花海" name="first">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item1 in item1s" :key="item1.id">
                    <div class="fc-item">
                      <a :href="item1.href" data-type="mdd">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item1.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item1.address1 }}</h2>
                          <p class="caption">{{ item1.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="私人海滩" name="second">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item2 in item2s" :key="item2.id">
                    <div class="fc-item">
                      <a :href="item2.href" data-type="mdd">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item2.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item2.address1 }}</h2>
                          <p class="caption">{{ item2.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="周末好去处" name="third">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item3 in item3s" :key="item3.id">
                    <div class="fc-item">
                      <a :href="item3.href" data-type="mdd">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item3.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item3.address1 }}</h2>
                          <p class="caption">{{ item3.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="潜水胜地" name="fiveth">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item4 in item4s" :key="item4.id">
                    <div class="fc-item">
                      <a :href="item4.href" data-type="mdd">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item4.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item4.address1 }}</h2>
                          <p class="caption">{{ item4.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="目的地特色" name="sixth">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item5 in item5s" :key="item5.id">
                    <div class="fc-item">
                      <a :href="item5.href" data-type="mdd">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item5.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item5.address1 }}</h2>
                          <p class="caption">{{ item5.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="吃货根据地" name="seventh">
              <div class="_j_tab_content">
                <ul class="clearfix">
                  <li v-for="item6 in item6s" :key="item6.id">
                    <div class="fc-item">
                      <a :href="item6.href" target="_black">
                        <div class="pic">
                          <img
                            width="318"
                            height="240"
                            style="width:318px;height:240px;"
                            :src="item6.img"
                            class="img-show"
                          />
                        </div>
                        <div class="bag-opa"></div>
                        <span class="shadow"></span>
                        <div class="info">
                          <h2>{{ item6.address1 }}</h2>
                          <p class="caption">{{ item6.address2 }}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="h-favorablle">
        <div class="h-title">特价酒店</div>
        <div class="tab-fav">
          <el-tabs v-model="activeName2" @tab-click="handleClick">
            <el-tab-pane label="曼谷" name="1">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list1 in list1s" :key="list1.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list1.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list1.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list1.title1 }}</p>
                        <p class="eng text-left">{{ list1.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="台北" name="2">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list2 in list2s" :key="list2.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list2.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list2.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list2.title1 }}</p>
                        <p class="eng text-left">{{ list2.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="东京" name="3">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list3 in list3s" :key="list3.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list3.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list3.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list3.title1 }}</p>
                        <p class="eng text-left">{{ list3.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="香港" name="4">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list4 in list4s" :key="list4.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list4.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list4.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list4.title1 }}</p>
                        <p class="eng text-left">{{ list4.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="首尔" name="5">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list5 in list5s" :key="list5.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list5.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list5.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list5.title1 }}</p>
                        <p class="eng text-left">{{ list5.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="新加坡" name="6">
              <div class="tab-con _j_tab_content">
                <ul class="clearfix">
                  <li v-for="list6 in list6s" :key="list6.id">
                    <a href="#"
                      ><div class="pic">
                        <img :src="list6.img" class="img-show" />
                      </div>
                      <div class="bag-opa"></div>
                      <div class="fraction">{{ list6.num }}分</div>
                      <div class="info">
                        <div class="prize"></div>
                        <p class="text-left">{{ list6.title1 }}</p>
                        <p class="eng text-left">{{ list6.title2 }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Footer from "@/components/index/Footer.vue";
import imgh1 from "../../assets/hotel-images/h1.jpeg";
import imgh2 from "../../assets/hotel-images/h2.jpeg";
import imgh3 from "../../assets/hotel-images/h3.jpeg";
import imgh4 from "../../assets/hotel-images/h4.jpeg";
import imgh5 from "../../assets/hotel-images/h5.jpeg";
import imgh6 from "../../assets/hotel-images/h6.jpeg";
import imgs1 from "../../assets/hotel-images/s1.jpeg";
import imgs2 from "../../assets/hotel-images/s2.jpeg";
import imgs3 from "../../assets/hotel-images/s3.jpeg";
import imgs4 from "../../assets/hotel-images/s4.jpeg";
import imgs5 from "../../assets/hotel-images/s5.jpeg";
import imgs6 from "../../assets/hotel-images/s6.jpeg";
import imgz1 from "../../assets/hotel-images/z1.jpeg";
import imgz2 from "../../assets/hotel-images/z2.jpeg";
import imgz3 from "../../assets/hotel-images/z3.jpeg";
import imgz4 from "../../assets/hotel-images/z4.jpeg";
import imgz5 from "../../assets/hotel-images/z5.jpeg";
import imgz6 from "../../assets/hotel-images/z6.jpeg";
import imgq1 from "../../assets/hotel-images/q1.jpeg";
import imgq2 from "../../assets/hotel-images/q2.jpeg";
import imgq3 from "../../assets/hotel-images/q3.jpeg";
import imgq4 from "../../assets/hotel-images/q4.jpeg";
import imgq5 from "../../assets/hotel-images/q5.jpeg";
import imgm1 from "../../assets/hotel-images/m1.jpeg";
import imgm2 from "../../assets/hotel-images/m2.jpeg";
import imgm3 from "../../assets/hotel-images/m3.jpeg";
import imgm4 from "../../assets/hotel-images/m4.jpeg";
import imgm5 from "../../assets/hotel-images/m5.jpeg";
import imgm6 from "../../assets/hotel-images/m6.jpeg";
import imgc1 from "../../assets/hotel-images/c1.jpeg";
import imgc2 from "../../assets/hotel-images/c2.jpeg";
import imgc3 from "../../assets/hotel-images/c3.jpeg";
import imgc4 from "../../assets/hotel-images/c4.jpeg";
import imgc5 from "../../assets/hotel-images/c5.jpeg";
import imgc6 from "../../assets/hotel-images/c6.jpeg";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      value1: "",
      activeName: "first",
      activeName2: "1",
      item1s: [
        {
          href: "#",
          img: imgh1,
          address1: "富士山",
          address2: "日本"
        },
        {
          href: "#",
          img: imgh2,
          address1: "奈良",
          address2: "日本"
        },
        {
          href: "#",
          img: imgh3,
          address1: "阿姆斯特丹",
          address2: "荷兰"
        },
        {
          href: "#",
          img: imgh4,
          address1: "布鲁塞尔",
          address2: "比利时"
        },
        {
          href: "#",
          img: imgh5,
          address1: "林芝",
          address2: "中国"
        },
        {
          href: "#",
          img: imgh6,
          address1: "罗平",
          address2: "中国"
        }
      ],
      item2s: [
        {
          href: "#",
          img: imgs1,
          address1: "长滩岛",
          address2: "菲律宾"
        },
        {
          href: "#",
          img: imgs2,
          address1: "苏梅岛",
          address2: "泰国"
        },
        {
          href: "#",
          img: imgs3,
          address1: "芽庄",
          address2: "越南"
        },
        { href: "#", img: imgs4, address1: "兰卡威", address2: "马来西亚" },
        { href: "#", img: imgs5, address1: "岘港", address2: "越南" },
        { href: "#", img: imgs6, address1: "三亚", address2: "海南" }
      ],
      item3s: [
        { href: "#", img: imgz1, address1: "崇明岛", address2: "上海" },
        { href: "#", img: imgz2, address1: "千岛湖", address2: "杭州" },
        { href: "#", img: imgz3, address1: "莫干山", address2: "湖州" },
        { href: "#", img: imgz4, address1: "古北水镇", address2: "北京" },
        { href: "#", img: imgz5, address1: "避暑山庄", address2: "承德" },
        { href: "#", img: imgz6, address1: "北戴河", address2: "秦皇岛" }
      ],
      item4s: [
        { href: "#", img: imgq1, address1: "仙本那", address2: "马来西亚" },
        { href: "#", img: imgq2, address1: "马尔代夫", address2: "马尔代夫" },
        { href: "#", img: imgq3, address1: "涛岛", address2: "阁拍岩" },
        { href: "#", img: imgq4, address1: "巴厘岛", address2: "印度尼西亚" },
        { href: "#", img: imgq5, address1: "夏威夷", address2: "美国" }
      ],
      item5s: [
        { href: "#", img: imgm1, address1: "首尔韩屋", address2: "韩国" },
        { href: "#", img: imgm2, address1: "京都町屋", address2: "日本" },
        { href: "#", img: imgm3, address1: "大理民居", address2: "中国" },
        { href: "#", img: imgm4, address1: "北京四合院", address2: "中国" },
        { href: "#", img: imgm5, address1: "北海道温泉", address2: "日本" },
        { href: "#", img: imgm6, address1: "洞穴酒店", address2: "土耳其" }
      ],
      item6s: [
        {
          href: "/hotel/HotelOne",
          img: imgc1,
          address1: "成都",
          address2: "四川"
        },
        {
          href: "/hotel/HotelTwo",
          img: imgc2,
          address1: "西安",
          address2: "陕西"
        },
        {
          href: "/hotel/HotelThree",
          img: imgc3,
          address1: "重庆",
          address2: "重庆"
        },
        { href: "#", img: imgc4, address1: "长沙", address2: "湖南" },
        { href: "#", img: imgc5, address1: "澳门", address2: "澳门" },
        { href: "#", img: imgc6, address1: "兰州", address2: "甘肃" }
      ],
      list1s: [
        {
          img:
            "http://n1-q.mafengwo.net/s11/M00/97/56/wKgBEFsjNU6ADk6NAAIXJnPqJIM73.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）",
          title2: "Vic3 Bangkok"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s11/M00/7D/D8/wKgBEFsY872AdeVPAAIR_MMohbg08.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "穰南帝景酒店",
          title2: "Royal View Resort - Rang Nam"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s7/M00/3F/78/wKgB6lR0t0iAfpAdAANZ56tPKao53.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "璀璨专享服务公寓",
          title2: "Abloom Exclusive Serviced Apartments"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/DE/AC/wKgBZ1mINF6ADiZKAAMQRMi1Wy411.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.7",
          title1: "曼谷暹罗安纳塔拉酒店",
          title2: "Anantara Siam Bangkok Hotel"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s9/M00/1E/47/wKgBs1hJJ1OANkS8AAevVMGRJoE36.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "7.7",
          title1: "彩虹云霄酒店",
          title2: "Baiyoke Sky Hotel"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/B2/49/wKgBZ1nvaZGAR7RKAAKXZ1MPtvU52.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.7",
          title1: "曼谷利特酒店",
          title2: "LiT BANGKOK Hotel"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s11/M00/22/75/wKgBEFsg2XmAG8zXAF50lnItD1A79.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.3",
          title1: "暹罗四季酒店",
          title2: "Seasons Siam Hotel"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s6/M00/93/D3/wKgB4lMDU3iAMLEGAAJejjVcGGU69.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.1",
          title1: "曼谷廊曼机场阿玛瑞酒店",
          title2: "Amari Don Muang Airport Bangkok"
        }
      ],
      list2s: [
        {
          img:
            "http://b1-q.mafengwo.net/s8/M00/2F/B7/wKgBpVVdFUaAbWTfAADg6E338DI93.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "台北凯撒大饭店",
          title2: "Vic3 Caesar Park Hotel Taipei"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/62/AF/wKgBZ1n27yCALeTjAAHbXAuSYEc29.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "台北大师商旅",
          title2: "Master Hotel"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s10/M00/87/E0/wKgBZ1mMhHWAA2RDAArXrdKFAhw93.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "台北帅客旅店",
          title2: "Saual Keh Hotel"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s10/M00/5A/13/wKgBZ1n25jOAOLTQAAPmEiuCYc439.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "9.0",
          title1: "台北君品酒店",
          title2: "Palais de Chine Hotel"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s6/M00/C6/FB/wKgB4lMYBBSADTDLAAHznk7MmSU50.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "台北二十轮旅店西门町馆",
          title2: "SWIIO Hotel Ximending"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s7/M00/2A/F7/wKgB6lR0oqiAZZzfAAGCjyiijks07.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.3",
          title1: "台北皇家季节酒店-南西馆",
          title2: "Royal Seasons Hotel Taipei Nanjing W"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/75/7D/wKgBZ1mMpLCAbRdZAADLhfZ9gLg25.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "7.8",
          title1: "台北一乐园大饭店",
          title2: "Onetel Taipei"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s10/M00/D3/03/wKgBZ1mMjmSAAskfAAGmCRARpeU19.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "7.7",
          title1: "台北王朝大酒店",
          title2: "Sunworld Dynasty Hotel Taipei"
        }
      ],
      list3s: [
        {
          img:
            "http://n1-q.mafengwo.net/s12/M00/12/A0/wKgED1vqhMyASzdPAAU_YEqcstw00.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "东京湾希尔顿酒店",
          title2: "Hilton Tokyo Bay"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s11/M00/4B/44/wKgBEFs8PuuAIum3ABSNvuw3sLk44.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.6",
          title1: "东京京王广场酒店",
          title2: "Keio Plaza Hotel Tokyo"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s7/M00/F9/17/wKgB6lR0gkmAMrY3AAEyTu8Pk9873.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "日晖新宿酒店",
          title2: "Hotel Sunlite Shinjuku"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s7/M00/8D/9B/wKgB6lR1KVOAWyObAAJkMc8GP4k55.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "东京湾喜来登大酒店",
          title2: "Sheraton Grande Tokyo Bay Hotel"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s6/M00/9D/00/wKgB4lMOLh-ACrryAAGLga3xZes52.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "东新宿E酒店",
          title2: "E Hotel Higashi Shinjuku"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s9/M00/D3/43/wKgBs1aKTiiAc-LDAAGR5PqxWak08.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "馨乐庭中央东京新宿区酒店",
          title2: "Citadines Central Shinjuku Tokyo"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s11/M00/FF/7B/wKgBEFq7eaOAVLnsAAEyFcMydlA54.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.2",
          title1: "东京新宿馨乐庭酒店",
          title2: "Citadines Shinjuku Tokyo"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/BB/3D/wKgBZ1mIciOAOp5cAAFnbGyc7wY43.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "9.0",
          title1: "新宿灿路都广场大饭店",
          title2: "Hotel Sunroute Plaza Shinjuku"
        }
      ],
      list4s: [
        {
          img:
            "http://n1-q.mafengwo.net/s11/M00/85/AC/wKgBEFsjKzSAebR0AAlBxLIIJy805.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.9",
          title1: "迪士尼好莱坞酒店",
          title2: "Disney's Hollywood Hotel"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s11/M00/F1/98/wKgBEFuGPJeANF7GACoinAy2U-I20.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "香港迪士尼乐园酒店",
          title2: "Hong Kong Disneyland Hotel"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s6/M00/F1/EB/wKgB4lMQIXSAeIzHAAFHkc2g-wI33.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "香港憙酒店",
          title2: "Xi Hotel"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s2/M00/0C/61/wKgBpU42hhbH2j-2AAHiXRKD6Ts40.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "6.4",
          title1: "香港英格兰豪华客栈",
          title2: "UK Hostel"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s10/M00/CB/56/wKgBZ1mIMTqAP-DoAAHuhx7bH9M15.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "香港珀丽酒店",
          title2: "Rosedale Hotel Hong Kong"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s6/M00/E4/EB/wKgB4lMYGh-AEjAqAACcymmkrLQ77.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "7.7",
          title1: "红茶馆酒店-土瓜湾邮轮码头店",
          title2: "Bridal Tea House To Kwa Wan Cruise Terminal Hotel"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s6/M00/44/54/wKgB4lMOCWaAdgfuAAFsA5qjRjQ41.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "J Plus精品酒店",
          title2: "J Plus Hotel by YOO"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s7/M00/CC/B9/wKgB6lRzHXuAf04rAAG4uw43hLA66.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "香港Casa酒店",
          title2: "Casa Hotel"
        }
      ],
      list5s: [
        {
          img:
            "http://p1-q.mafengwo.net/s9/M00/41/B6/wKgBs1Zv7XWAc79kAAIzMeLYaXc67.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "9.0",
          title1: "中央明洞空中公園酒店",
          title2: "Hotel Skypark Central Myeongdong"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s12/M00/AB/0A/wKgED1ukoPSAWLytABCX-6-8X0A72.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.1",
          title1: "明洞韦斯廷居住酒店",
          title2: "Vestin Residence Myeongdong"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/C7/50/wKgBZ1mMjKOAUUMqAAHcxPQNWeg96.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "空中花园酒店明洞1号店",
          title2: "Hotel Skypark Myeongdong 1"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/B0/A4/wKgBZ1ngelyADHJxAAMwDwj0Q2o71.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.7",
          title1: "天空花园酒店东大门1号店",
          title2: "Hotel Skypark Dongdaemun I"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/C4/05/wKgBZ1onZr6APWVDAAGb4QRKL3809.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "首尔东大门大使宜必思快捷酒店",
          title2: "ibis Budget Ambassador Seoul Dongdaemun"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/72/96/wKgBZ1mIpiSAcRypAAJznF3r1pw22.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.7",
          title1: "宜必思仁寺洞大使酒店",
          title2: "ibis Ambassador Insadong"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s10/M00/05/DF/wKgBZ1n8M9aAa7NCAAj_s7HNmPc28.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "太平洋酒店",
          title2: "Pacific Hotel"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s10/M00/D3/5E/wKgBZ1mIjUaADUfhAAILSJ5dVy467.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.8",
          title1: "首尔大使铂尔曼酒店",
          title2: "Grand Ambassador Seoul associated with Pullman"
        }
      ],
      list6s: [
        {
          img:
            "http://b1-q.mafengwo.net/s11/M00/C8/BA/wKgBEFspGeuANDAHAALdVhlP6tM95.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.6",
          title1: "新加坡港湾彩鸿酒店",
          title2: "Travelodge Harbourfront Singapore"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s11/M00/99/F2/wKgBEFt2MyOAMIxMAAHUpWQ4bGg00.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.2",
          title1: "新加坡滨海湾金沙酒店",
          title2: "Marina Bay Sands"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s12/M00/F0/F4/wKgED1upjeKACHbQAAWA6Wrl0o086.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.2",
          title1: "客莱福 33 惹兰苏丹酒店",
          title2: "Hotel Clover 33 Jalan Sultan"
        },
        {
          img:
            "http://n1-q.mafengwo.net/s10/M00/9F/A2/wKgBZ1mVHxCAUVxiAAGoHXo59oQ64.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.6",
          title1: "新加坡克拉码头智选假日酒店",
          title2: "Holiday Inn Express Singapore Clarke Quay"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s9/M00/C1/C9/wKgBs1aAKnWAU-6_AAEMxfUuTi406.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.4",
          title1: "飞龙玫瑰酒店",
          title2: "Fragrance Hotel - Rose"
        },
        {
          img:
            "http://b1-q.mafengwo.net/s9/M00/BC/7F/wKgBs1c0P9uAfBSuAAHfFXiBKg883.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.6",
          title1: "新加坡宜必思快捷店-西海岸",
          title2: "Ibis Budget Singapore West Coast"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s12/M00/BB/93/wKgED1uM2viABNk3AAMifUjf8Gw05.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.6",
          title1: "新加坡香格里拉圣淘沙度假村",
          title2: "Shangri-La's Rasa Sentosa Resort & Spa (SG Clean)"
        },
        {
          img:
            "http://p1-q.mafengwo.net/s11/M00/5F/9A/wKgBEFsH3HiAPDkvAAHcjuXYm0w69.jpeg?imageMogr2%2Fthumbnail%2F%21480x480r%2Fgravity%2FCenter%2Fcrop%2F%21480x480%2Fquality%2F90",
          num: "8.5",
          title1: "新加坡丽思卡尔顿美年酒店",
          title2: "The Ritz-Carlton, Millenia Singapore"
        }
      ]
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.footer {
  margin-top: 90px;
}
.tab-fav ul li .info p.eng {
  font-size: 12px;
}
.tab-fav ul li .info p {
  font-size: 14px;
}
.tab-fav .info .prize,
.tab-fav .info p {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
.tab-fav ul li .info {
  position: absolute;
  z-index: 3;
  left: 13px;
  bottom: 13px;
  width: 220px;
  margin-top: -30px;
  color: #fff;
}
.tab-fav ul li .fraction {
  width: 55px;
  height: 25px;
  font-size: 18px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 13px;
  top: 13px;
  text-align: center;
  line-height: 25px;
  border-radius: 4px;
  z-index: 5;
}
.tab-fav ul li .bag-opa {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.2;
  z-index: 2;
}
.tab-fav ul li img {
  width: 240px;
  height: 240px;
}
._j_tab_content .img-show {
  opacity: 1;
}
.tab-fav ul li {
  width: 240px;
  height: 240px;
  overflow: hidden;
  float: left;
  margin: 0 13px 13px 0;
  position: relative;
}
.tab-fav ul {
  width: 1012px;
  padding-top: 20px;
}
.tab-theme ul li:hover .bag-opa {
  opacity: 0;
  transition: all 0.5s;
}
/* .fc-item::after {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: -1;
  display: block;
  content: "";
  height: 22px;
  width: 100%;
  background: url(../../assets/hotel-images/floating-card-shadow.png) no-repeat;
  background-size: 100%;
} */
.tab-theme ul li .info p {
  font-size: 18px;
  color: #fff;
}
.fc-item .info h2,
.fc-item .info p {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
.tab-theme ul li .info h2 {
  font-size: 30px;
  color: #fff;
  font-weight: normal;
}
.tab-theme ul li .info {
  text-align: center;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 50%;
  width: 100%;
  margin-top: -30px;
}
.fc-item .shadow {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: auto;
  width: 100%;
  z-index: 1;
  backface-visibility: hidden;
}
.tab-theme ul li .bag-opa {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.2;
  z-index: 2;
}
._j_tab_content .img-show {
  opacity: 1;
}
.tab-theme ul li .pic {
  width: 318px;
  height: 240px;
  overflow: hidden;
}
.tab-theme ul li {
  width: 318px;
  height: 240px;
  float: left;
  margin: 20px 23px 0 0;
  position: relative;
}
.tab-theme ul {
  width: 1023px;
}
.el-tabs >>> .el-tabs__active-bar {
  background-color: #ff9d00;
}
.el-tabs >>> .el-tabs__item.is-active {
  color: #ff9d00;
}
.el-tabs >>> .el-tabs__item:hover {
  color: #ff9d00;
  cursor: pointer;
}
.el-tabs >>> .el-tabs__item {
  width: 166px;
  height: 50px;
  font-size: 18px;
}
.h-theme .h-title {
  text-align: center;
  margin: 100px 0 25px 0;
}
.h-theme {
  padding-bottom: 100px;
}
.h-notice ul li i.notice03 {
  width: 44px;
  height: 42px;
  background-position: -85px 0;
  margin-left: 80px;
}
.h-notice ul li i.notice02 {
  width: 43px;
  height: 42px;
  background-position: -40px 0;
  margin-left: 40px;
}
.h-notice ul li p {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
.h-notice ul li h2 {
  font-size: 18px;
  color: #666;
  line-height: 18px;
  font-weight: normal;
}
.flt1 {
  float: left;
}
.h-notice ul li i {
  display: block;
  float: left;
  margin-right: 13px;
  background: url(../../assets/hotel-images/hotel-sprites1.png) no-repeat;
}
.h-notice ul li i.notice01 {
  width: 35px;
  height: 42px;
  background-position: 0 0;
}
.h-notice ul li {
  float: left;
  width: 333px;
}
.date-warp .btn-search i {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(../../assets/hotel-images/header-sprites3.png) no-repeat;
  background-position: 0 -165px;
  vertical-align: middle;
}
.date-warp .btn-search {
  width: 46px;
  height: 46px;
  line-height: 46px;
  background: #ffa800;
  float: left;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
.date-warp .hs-item > span {
  font-size: 16px;
  color: #666;
  display: block;
  height: 45px;
  line-height: 45px;
  padding: 0 12px;
  border: 1px solid #999;
  border-radius: 4px;
  width: 159px;
  cursor: pointer;
}
.number-guests-picker.focus > span {
  border: 1px solid #ffa800;
  box-shadow: 0 0 4px #ffa800;
  transition: box-shadow 0.4s linear 0s;
}
.date-warp .hs-item {
  height: 47px;
  position: relative;
  float: left;
  margin-right: 10px;
}
.date-warp .hs-item-people .icon-person {
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 10px;
  width: 15px;
  height: 16px;
  background: url(../../assets/hotel-images/hotel-detail-icon7.png) no-repeat;
  background-position: -70px -140px !important;
  vertical-align: middle;
  overflow: hidden;
}
.block >>> .el-input__inner:focus {
  border-color: #999;
}
.block >>> .el-input__inner {
  width: 187px;
  height: 45px;
  border: 1px solid #999;
}
.el-date-editor.el-input {
  width: 187px;
  height: 47px;
}
.stay-time,
.leave-time {
  position: relative;
  float: left;
  height: 47px;
  margin-right: 10px;
  cursor: pointer;
}
.add-travle input {
  outline: none;
  width: 340px;
  height: 45px;
  border: 1px solid #999;
  font-size: 16px;
  color: #666;
  border-radius: 4px;
  padding: 0 0 0 10px;
}
.add-travle {
  height: 45px;
  width: 352px;
  position: relative;
  float: left;
  margin-right: 10px;
}
.date-warp {
  height: 47px;
  margin: 40px 0 70px 0;
  position: relative;
  z-index: 9;
}
.h-title {
  font-size: 24px;
  color: #333;
  line-height: 30px;
}
.hotel-main {
  width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
  z-index: 5;
}
</style>
