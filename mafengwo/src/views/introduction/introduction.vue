<template>
  <div>
    <Header></Header>
    <div class="wrapper">
      <div class="focus">
        <div class="mdd_nav">
          <div class="gonglve-nav">
            <div
              class="nav-item"
              @mouseenter="enter('0')"
              @mouseleave="leave('0')"
            >
              <div class="nav-title">
                <h3 class="text-left">海外冬季目的地精选</h3>
                <b class="gn-arrow"></b>
              </div>
              <div class="nav-panel rank-panel">
                <ol>
                  <li class="top3">
                    <em class="rank-num">1</em
                    ><strong><a href="#" target="_blank">北海道</a></strong
                    ><a href="#" target="_blank">在皑皑白雪中泡温泉</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">2</em
                    ><strong><a href="#" target="_blank">冰岛</a></strong
                    ><a href="#" target="_blank">亲近极北之地的莫测极光</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">3</em
                    ><strong><a href="#" target="_blank">澳大利亚</a></strong
                    ><a href="#" target="_blank">在南半球过个暖洋洋的圣诞节</a>
                  </li>
                  <li>
                    <em class="rank-num">4</em
                    ><strong><a href="#" target="_blank">洛杉矶</a></strong
                    ><a href="#" target="_blank">阳光加州，避寒圣地</a>
                  </li>
                  <li>
                    <em class="rank-num">5</em
                    ><strong><a href="#" target="_blank">新加坡</a></strong
                    ><a href="#" target="_blank">活力四射的花园之城</a>
                  </li>
                  <li>
                    <em class="rank-num">6</em
                    ><strong><a href="#" target="_blank">斯里兰卡</a></strong
                    ><a href="#" target="_blank">便利签证，异域风情</a>
                  </li>
                  <li>
                    <em class="rank-num">7</em
                    ><strong><a href="#" target="_blank">帕劳</a></strong
                    ><a href="#" target="_blank">潜水者的朝圣地</a>
                  </li>
                  <li>
                    <em class="rank-num">8</em
                    ><strong><a href="#" target="_blank">缅甸</a></strong
                    ><a href="#" target="_blank">踏上佛国净化之旅</a>
                  </li>
                  <li>
                    <em class="rank-num">9</em
                    ><strong><a href="#" target="_blank">菲律宾</a></strong
                    ><a href="#" target="_blank">徜徉海岛间，潜入深海中</a>
                  </li>
                  <li>
                    <em class="rank-num">10</em
                    ><strong><a href="#" target="_blank">迪拜</a></strong
                    ><a href="#" target="_blank">沙漠中的奇迹之城</a>
                  </li>
                </ol>
                <span class="nav-banner"
                  ><a href="#" hidefocus="ture" target="_blank"></a
                ></span>
              </div>
            </div>
            <div
              class="nav-item"
              @mouseenter="enter('1')"
              @mouseleave="leave('1')"
            >
              <div class="nav-title">
                <h3 class="text-left">国内冬季目的地推荐</h3>
                <b class="gn-arrow"></b>
              </div>
              <div class="nav-panel rank-panel">
                <ol>
                  <li class="top3">
                    <em class="rank-num">1</em
                    ><strong><a href="#k">漠河</a></strong
                    ><a href="#">至寒圣地的极光约会</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">2</em
                    ><strong><a href="#">黄山</a></strong
                    ><a href="#">银装素裹秒杀菲林季</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">3</em
                    ><strong><a href="#">海螺沟</a></strong
                    ><a href="#">冰川温泉的童话世界</a>
                  </li>
                  <li>
                    <em class="rank-num">4</em
                    ><strong><a href="#">壶口瀑布</a></strong
                    ><a href="#">绝美的冰瀑玉壶奇观</a>
                  </li>
                  <li>
                    <em class="rank-num">5</em
                    ><strong><a href="#">西岭雪山</a></strong
                    ><a href="#">成都周边最大滑雪场</a>
                  </li>
                  <li>
                    <em class="rank-num">6</em
                    ><strong><a href="#">西双版纳</a></strong
                    ><a href="#">聆听欣赏原生态歌舞</a>
                  </li>
                  <li>
                    <em class="rank-num">7</em
                    ><strong><a href="#">霞浦</a></strong
                    ><a href="#">红枫白荻的交相辉映</a>
                  </li>
                  <li>
                    <em class="rank-num">8</em
                    ><strong><a href="#">广州</a></strong
                    ><a href="#">相约一起喝粤式早茶</a>
                  </li>
                  <li>
                    <em class="rank-num">9</em
                    ><strong><a href="#">高雄</a></strong
                    ><a href="#">暖冬初阳遇最美台湾</a>
                  </li>
                  <li>
                    <em class="rank-num">10</em
                    ><strong><a href="#">三亚</a></strong
                    ><a href="#">去热带海滩逃离寒冬</a>
                  </li>
                </ol>
                <span class="nav-banner"
                  ><a href="#" hidefocus="ture" target="_blank"></a
                ></span>
              </div>
            </div>
            <div
              class="nav-item"
              @mouseenter="enter('2')"
              @mouseleave="leave('2')"
            >
              <div class="nav-title">
                <h3 class="text-left">奔向海岛</h3>
                <b class="gn-arrow"></b>
              </div>
              <div class="nav-panel rank-panel">
                <ol>
                  <li class="top3">
                    <em class="rank-num">1</em
                    ><strong><a href="#">象岛</a></strong
                    ><a href="#">腻了普吉，来象岛玩个深度</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">2</em
                    ><strong><a href="#">巴厘岛</a></strong
                    ><a href="#">巴厘岛免签啦</a>
                  </li>
                  <li class="top3">
                    <em class="rank-num">3</em
                    ><strong><a href="#">毛里求斯</a></strong
                    ><a href="#">印度洋上的海上明珠</a>
                  </li>
                  <li>
                    <em class="rank-num">4</em
                    ><strong><a href="#">塞班岛</a></strong
                    ><a href="#">错“季”出行，也有惊喜</a>
                  </li>
                  <li>
                    <em class="rank-num">5</em
                    ><strong><a href="#">长滩岛</a></strong
                    ><a href="#">潜水与蜜月的天堂</a>
                  </li>
                  <li>
                    <em class="rank-num">6</em
                    ><strong><a href="#">圣托里尼</a></strong
                    ><a href="#">蓝白之城映衬着海风吹拂</a>
                  </li>
                  <li>
                    <em class="rank-num">7</em
                    ><strong><a href="#">沙美岛</a></strong
                    ><a href="#">如果你厌倦了芭提雅</a>
                  </li>
                  <li>
                    <em class="rank-num">8</em
                    ><strong><a href="#">杜马盖地</a></strong
                    ><a href="#">找小丑鱼做客去！</a>
                  </li>
                  <li>
                    <em class="rank-num">9</em
                    ><strong><a href="#">兰卡威</a></strong
                    ><a href="#">海钓、潜水，看蓝天</a>
                  </li>
                  <li>
                    <em class="rank-num">10</em
                    ><strong><a href="#">沙巴</a></strong
                    ><a href="#">这里有世界上最美的落日</a>
                  </li>
                </ol>
                <span class="nav-banner"
                  ><a href="#" hidefocus="ture" target="_blank"></a
                ></span>
              </div>
            </div>
            <div
              class="nav-item"
              @mouseenter="enter('3')"
              @mouseleave="leave('3')"
            >
              <div class="nav-title">
                <h3 class="text-left">主题推荐</h3>
                <b class="gn-arrow"></b>
              </div>
              <div class="nav-panel rank-panel category-panel">
                <dl class="clearfix">
                  <dt>骑行</dt>
                  <dd>
                    <a title="海南" href="#">海南</a>
                  </dd>
                  <dd>
                    <a title="青海湖" href="#">青海湖</a>
                  </dd>
                  <dd>
                    <a title="敦煌" href="#">敦煌</a>
                  </dd>
                  <dd>
                    <a title="漠河" href="#">漠河</a>
                  </dd>
                  <dd>
                    <a title="台湾" href="#">台湾</a>
                  </dd>
                  <dd>
                    <a title="北京" href="#">北京</a>
                  </dd>
                  <dd>
                    <a title="杭州" href="#">杭州</a>
                  </dd>
                  <dd>
                    <a title="双廊" href="#">双廊</a>
                  </dd>
                  <dd>
                    <a title="婺源" href="#">婺源</a>
                  </dd>
                  <dd>
                    <a title="阿尔山" href="#">阿尔山</a>
                  </dd>
                  <dd>
                    <a title="法国" href="#">法国</a>
                  </dd>
                  <dd>
                    <a title="厦门" href="#">厦门</a>
                  </dd>
                  <dd>
                    <a title="阳朔" href="#">阳朔</a>
                  </dd>
                  <dd>
                    <a title="香格里拉" href="#">香格里拉</a>
                  </dd>
                  <dd>
                    <a title="太湖" href="#">太湖</a>
                  </dd>
                  <dd>
                    <a title="西藏" href="#">西藏</a>
                  </dd>
                  <dd>
                    <a title="大理" href="#">大理</a>
                  </dd>
                  <dd>
                    <a title="成都" href="#">成都</a>
                  </dd>
                  <dd>
                    <a title="乌鲁木齐" href="#">乌鲁木齐</a>
                  </dd>
                </dl>
                <dl class="clearfix">
                  <dt>潜水</dt>
                  <dd>
                    <a title="沙巴" href="#">沙巴</a>
                  </dd>
                  <dd>
                    <a title="三亚" href="#">三亚</a>
                  </dd>
                  <dd>
                    <a title="斐济" href="#">斐济</a>
                  </dd>
                  <dd>
                    <a title="巴厘岛" href="#">巴厘岛</a>
                  </dd>
                  <dd>
                    <a title="长滩岛" href="#">长滩岛</a>
                  </dd>
                  <dd>
                    <a title="马尔代夫" href="#">马尔代夫</a>
                  </dd>
                  <dd>
                    <a title="苏梅岛" href="#">苏梅岛</a>
                  </dd>
                  <dd>
                    <a title="普吉岛" href="#">普吉岛</a>
                  </dd>
                  <dd>
                    <a title="夏威夷" href="#">夏威夷</a>
                  </dd>
                  <dd>
                    <a title="巴拉望" href="#">巴拉望</a>
                  </dd>
                  <dd>
                    <a title="马来西亚" href="#">马来西亚</a>
                  </dd>
                  <dd>
                    <a title="兰卡威" href="#">兰卡威</a>
                  </dd>
                  <dd>
                    <a title="埃及" href="#">埃及</a>
                  </dd>
                  <dd>
                    <a title="印度尼西亚" href="#">印度尼西亚</a>
                  </dd>
                  <dd>
                    <a title="泰国" href="#">泰国</a>
                  </dd>
                </dl>
                <dl class="clearfix">
                  <dt>徒步</dt>
                  <dd>
                    <a title="尼泊尔" href="#">尼泊尔</a>
                  </dd>
                  <dd>
                    <a title="虎跳峡" href="#">虎跳峡</a>
                  </dd>
                  <dd>
                    <a title="喀纳斯" href="#">喀纳斯</a>
                  </dd>
                  <dd>
                    <a title="墨脱" href="#">墨脱</a>
                  </dd>
                  <dd>
                    <a title="小五台" href="#">小五台</a>
                  </dd>
                  <dd>
                    <a title="贡嘎雪山" href="#">贡嘎雪山</a>
                  </dd>
                  <dd>
                    <a title="海陀山" href="#">海陀山</a>
                  </dd>
                  <dd>
                    <a title="海螺沟" href="#">海螺沟</a>
                  </dd>
                  <dd>
                    <a title="雨崩" href="#">雨崩</a>
                  </dd>
                  <dd>
                    <a title="三峡" href="#">三峡</a>
                  </dd>
                  <dd>
                    <a title="阳朔" href="#">阳朔</a>
                  </dd>
                  <dd>
                    <a title="新都桥" href="#">新都桥</a>
                  </dd>
                  <dd>
                    <a title="楠溪江" href="#">楠溪江</a>
                  </dd>
                  <dd>
                    <a title="梅里雪山" href="#">梅里雪山</a>
                  </dd>
                  <dd>
                    <a title="野三坡" href="#">野三坡</a>
                  </dd>
                  <dd>
                    <a title="西双版纳" href="#">西双版纳</a>
                  </dd>
                </dl>
                <dl class="clearfix">
                  <dt>登山</dt>
                  <dd>
                    <a title="珠穆朗玛峰" href="#">珠穆朗玛峰</a>
                  </dd>
                  <dd>
                    <a title="乞力马扎罗" href="#">乞力马扎罗</a>
                  </dd>
                  <dd>
                    <a title="牛背山" href="#">牛背山</a>
                  </dd>
                  <dd>
                    <a title="太白山" href="#">太白山</a>
                  </dd>
                  <dd>
                    <a title="四姑娘山" href="#">四姑娘山</a>
                  </dd>
                  <dd>
                    <a title="雁荡山" href="#">雁荡山</a>
                  </dd>
                  <dd>
                    <a title="云台山" href="#">云台山</a>
                  </dd>
                  <dd>
                    <a title="三清山" href="#">三清山</a>
                  </dd>
                  <dd>
                    <a title="普陀山" href="#">普陀山</a>
                  </dd>
                  <dd>
                    <a title="庐山" href="#">庐山</a>
                  </dd>
                  <dd>
                    <a title="海陀山" href="#">海陀山</a>
                  </dd>
                  <dd>
                    <a title="小五台" href="#">小五台</a>
                  </dd>
                  <dd>
                    <a title="华山" href="#">华山</a>
                  </dd>
                  <dd>
                    <a title="泰山" href="#">泰山</a>
                  </dd>
                  <dd>
                    <a title="黄山 " href="#">黄山 </a>
                  </dd>
                  <dd>
                    <a title="武功山" href="#">武功山</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="input_like">
            <div>
              <span></span>
              <input
                id="search_word"
                type="text"
                placeholder="请输入想去的地方，如:香港"
              />
              <div class="clear"></div>
            </div>
          </div>
          <div class="app_d">
            <h3>
              <a href="#"
                ><img
                  src="http://images.mafengwo.net/images/app/m/logo_gonglve_v6.png?v=20150825"
                  alt=""
                  width="50"
                  height="50"
              /></a>
            </h3>
            <div class="domn_in">
              <h4>
                <a href="#">马蜂窝自由行APP下载 </a>
              </h4>
              <p>
                <a style="cursor: auto;">iPhone版</a>
                <span>|</span>
                <a style="cursor: auto;">Android版</a>
                <span>|</span>
                <a style="cursor: auto;">iPad版</a>
              </p>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="slide">
          <ul id="slide_box" class="slide_box" style="left:0px">
            <li v-for="item in items" :key="item.id">
              <a href="#">
                <img :src="item.img" />
              </a>
            </li>
          </ul>
          <ol id="thumb_box">
            <li class="th on" @click="chege('0')">1</li>
            <li class="th" @click="chege('1')">2</li>
            <li class="th" @click="chege('2')">3</li>
            <li class="th" @click="chege('3')">4</li>
            <li class="th" @click="chege('4')">5</li>
          </ol>
        </div>
      </div>
      <div class="gonglve_wrap clearfix">
        <div class="sidebar">
          <div class="side-hd text-left">旅游攻略导航</div>
          <div class="nav-drop">
            <div class="drop-item">
              <div class="trigger"><i></i>国内</div>
            </div>
            <div class="drop-item">
              <div class="trigger"><i></i>国外</div>
            </div>
            <div class="drop-item">
              <div class="trigger"><i></i>主题</div>
            </div>
          </div>
          <div class="rank">
            <ul>
              <li class="gl_list">
                <a href="#">
                  <img
                    src="http://b1-q.mafengwo.net/s9/M00/6F/96/wKgBs1au-wuAcJRRAAli-UGtV0E29.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90"
                    alt="成都"
                  />
                </a>
                <p class="time">更新日期:2016-02-01</p>
                <div class="down_cout">
                  <span></span>
                  <p class="text-left" style="font-size:12px">4979863人下载</p>
                </div>
              </li>
              <li class="text-left" v-for="addre in address" :key="addre.id">
                <span class="num">{{ addre.id }}</span>
                <a href="#" :title="addre.pri">{{ addre.pri }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="cont-main _j_feed_list">
          <div class="hd clearfix text-left">
            <h3>推荐攻略</h3>
          </div>
          <IntroduceCon :con="con"></IntroduceCon>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import IntroduceCon from "@/components/introduction/IntroduceCon.vue";
import Footer from "@/components/index/Footer.vue";
import img1 from "../../assets/introduction-images/x1.png";
import img2 from "../../assets/introduction-images/x2.jpeg";
import img3 from "../../assets/introduction-images/x3.jpeg";
import img4 from "../../assets/introduction-images/x4.png";
import img5 from "../../assets/introduction-images/x5.jpeg";
export default {
  components: {
    Header,
    IntroduceCon,
    Footer
  },
  data() {
    return {
      i: 0,
      con: {
        incons: [
          {
            href: "/introduction/AssaultOne",
            num: 1114,
            outin: "游记",
            title: "【西域南疆】世界不会在这里停摆，就像时间不曾在这里流逝",
            img:
              "http://n1-q.mafengwo.net/s16/M00/2F/6A/CoUBUl6wGxKACVhvABbERUBEShI223.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "关于南疆的故事如果生活的要义在于追求幸福，那么，没有什么行为比旅行更能呈现这一追求过程中的热情与矛盾。对旅行的期望和计划越是完美，现实的矛盾越是庞杂琐碎、不着边际此次的新疆行，原本计划从乌鲁木齐，绕天山峡谷，到伊犁去，正好是吐尔根杏...",
            userimg:
              "http://p1-q.mafengwo.net/s14/M00/04/EC/wKgE2l0lV4WAXAvUAAU8iemleXM95.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "FierLi",
            looknum: 15132,
            speaknum: 98
          },
          {
            href: "/introduction/AssaultTwo",
            num: 60,
            outin: "自由行攻略",
            title:
              "【越南攻略】爱上潜水，爱上冲浪 记十天胡志明-美奈-芽庄-岘...",
            img:
              "http://p1-q.mafengwo.net/s13/M00/D3/4F/wKgEaVxlKISAbo7_AAcHqF_ltFQ43.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "序引陌生人 你们好鸭！感谢你花这个时间 看我记录下的越南之旅今年年底提前放假 想趁着春节大军还没出行 于是带着一家人前往越南自由行我是Torres一个在广州生活的的潮汕小伙热爱旅行 喜欢旅途中的未知# 喜欢旅行就是喜欢旅行中发生的一些你...",
            userimg:
              "http://n1-q.mafengwo.net/s13/M00/43/FD/wKgEaVxnDnqAA7pyAABAXYf-8yU58.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "Torres",
            looknum: 975,
            speaknum: 6
          },
          {
            href: "/introduction/AssaultThree",
            num: 17,
            outin: "游记",
            title: "濑户内海の旅 | 艺术之于海，而海之于生活",
            img:
              "http://b1-q.mafengwo.net/s11/M00/3F/FB/wKgBEFt5AsGAEbHpABJ3_S7C7NY50.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "始于对海有着某种迷恋，如果夏天没有去海边，就好像拼图缺失了一角，不完整。濑户内海，是偶然间注意到的地方，吸引我的原因很简单：海＆小众。海是我心心念念的，而小众，则意味着游人不多。近来，日本已成为了旅行的热门目的地，游人总是络绎不绝...",
            userimg:
              "http://p1-q.mafengwo.net/s11/M00/E5/92/wKgBEFqQ0QSACtjgAAKkW1dPJzY74.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "丘耳小柒",
            looknum: 786,
            speaknum: 10
          },
          {
            href: "#",
            num: 39,
            outin: "游记",
            title: "珠海广州长隆七日亲子游",
            img:
              "http://p1-q.mafengwo.net/s12/M00/8A/E4/wKgED1wE9qqAVT78AAmS6IhXCjc55.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "这次出行，本着吃好玩好还要各方面性价比高的省钱原则，所以提前做了攻略，并下载各种软件针对门票、住宿、车旅费进行比较，最后加上实地实践，做了以下攻略，供即将要去的小伙伴们参考一下😉因为回家后要立即上班，回家后就陪娃，所以想起啥就写啥，没有...",
            userimg:
              "http://n1-q.mafengwo.net/s13/M00/B5/E7/wKgEaVxwRh2AROowAACqadT00WE43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "樱桃肉丸子",
            looknum: 512,
            speaknum: 4
          },
          {
            href: "#",
            num: 10982,
            outin: "游记",
            title: "去南京过周末，正牌吃货&伪文艺青年再逛金陵城",
            img:
              "http://n1-q.mafengwo.net/s9/M00/B2/0A/wKgBs1g6wTWAdgP6AAuRCwYYorE95.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "这是我第三次来南京，原意本是遇见南京城的浓浓秋意，什么银杏铺满一地金黄的石像路、枫叶正当时红似骄阳的栖霞山，只想着画面都赶脚自己一定能拍出棒棒嗒大片。特意翻了好些篇游记，得出的结论是：十一月中旬适合在市区看银杏、十一月底适合去栖霞山看枫叶。燃鹅！因为种种原因，最终不得已把出行时间提早到了十一月...",
            userimg:
              "http://b1-q.mafengwo.net/s13/M00/9B/6D/wKgEaVzf1jWAJuL3AADL2ycuiu869.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "竟小章",
            looknum: 174529,
            speaknum: 456
          },
          {
            href: "#",
            num: 537,
            outin: "游记",
            title: "G318川藏南线女司机超长自述实录——回到拉萨，回到了布达拉",
            img:
              "http://n1-q.mafengwo.net/s16/M00/36/74/CoUBUl57HTmARgMYAAfYB3ih9TA167.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "本游记将分为三部分，真实记录川藏南线自驾过【特费流量多图的那种】Part i 赋予自驾西藏一个理由，那它一定是梦想传承Part ii 快问快答，还原进藏前的内心戏Part iii 看图说话，川藏南线的模样游记开始之前，请打开音乐，循环播放《往后余生》王贰...",
            userimg:
              "http://n1-q.mafengwo.net/s16/M00/3B/0B/CoUBUl58GDqABPnGAAIjmTBRkj496.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "秦小白要造反",
            looknum: 10048,
            speaknum: 101
          },
          {
            href: "#",
            num: 974,
            outin: "游记",
            title: "【泰国】迟到已久的旅行，曼谷-芭提雅5天旅行游记✈️",
            img:
              "http://n1-q.mafengwo.net/s13/M00/D3/6E/wKgEaVyPNz6ABO_aAAq4RdFM-Xw54.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "这是我俩👫第一次出国游，选择泰国🇹🇭的原因主要是又近又便宜又好玩，这次去因为时间有限，所以只去了曼谷和芭提雅，这俩地方离得很近，5天的时间我觉得刚刚好，下面就我就来说说这次旅行是怎样的吧。签证这次因为准备时间不多，所以选择的是落地签。...",
            userimg:
              "http://p1-q.mafengwo.net/s13/M00/3B/71/wKgEaVyPb5WAZ3HTAAB5wdcmhMM68.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "50",
            looknum: 10570,
            speaknum: 43
          },
          {
            href: "#",
            num: 2817,
            outin: "游记",
            title: "纽约高线公园和the Vessel——美国之行（四）再游曼哈顿",
            img:
              "http://b1-q.mafengwo.net/s15/M00/07/82/CoUBGV4v7t6AWa5CAAssWuHuqb8448.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "时间：2019年12月8日序言自2015年以来，这是我们第四次踏上美国的土地。2018年，TH完成博士学业将回国工作，本以为之后不大可能去美国，没想到TH留下工作了，便有了再一次的美国之行。不过，这次去美国并没有安排自驾游玩，仅仅是在那里与TH一起，共同度...",
            userimg:
              "http://b1-q.mafengwo.net/s9/M00/A1/93/wKgBs1e8Cl-AEejHAA25VMCuoj421.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "云水",
            looknum: 2911,
            speaknum: 113
          },
          {
            href: "#",
            num: 1271,
            outin: "游记",
            title: "萨凡纳·花园广场之城——美国自驾之旅（三）之美国东线南部...",
            img:
              "http://b1-q.mafengwo.net/s16/M00/3B/07/CoUBUl59rQGAf0CCABS5c9hbIUQ072.JPG?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "时间：2018年5月27日序结束美国东线北部游后，返回罗利休整了2天，我们又开始了新的旅程——美国东线南部游。计划用7天时间，从北卡罗利出发，穿越南卡、佐治亚一直到佛罗里达最南端的西礁岛（Key West），沿途经过的城市和公园（先后顺序）有萨凡纳、...",
            userimg:
              "http://b1-q.mafengwo.net/s9/M00/A1/93/wKgBs1e8Cl-AEejHAA25VMCuoj421.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "云水",
            looknum: 1634,
            speaknum: 85
          },
          {
            href: "#",
            num: 2675,
            outin: "游记",
            title: "2019春🌸日本东京赏樱🌸带着妈妈去旅行",
            img:
              "http://p1-q.mafengwo.net/s10/M00/F7/0B/wKgBZ1kWiVeAVqb0ABU8Ntwc48M35.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100",
            con:
              "先给大家变个魔术人长大了总要远行，就像被风吹走的花瓣，离开父母，离开自己长大的地方。但是这个春天，我的远行，是和最亲近的人。遥远的阳光下，妈妈拉着我的小手，哼着山口百惠的歌。三十年后，我握着妈妈的手，来拜访这个，她眼中未知的国度。生命中最令人心动的，就是一闪而过的人和风景。...",
            userimg:
              "http://b1-q.mafengwo.net/s10/M00/46/11/wKgBZ1kXNUCAVKKhAACAh6KXqFo95.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90",
            username: "catcathsu",
            looknum: 12553,
            speaknum: 72
          }
        ]
      },
      address: [
        {
          id: 2,
          pri: "云南"
        },
        {
          id: 3,
          pri: "重庆"
        },
        {
          id: 4,
          pri: "大理"
        },
        {
          id: 5,
          pri: "北疆"
        },
        {
          id: 6,
          pri: "丽江"
        },
        {
          id: 7,
          pri: "西安"
        },
        {
          id: 8,
          pri: "南疆"
        },
        {
          id: 9,
          pri: "西藏"
        },
        {
          id: 10,
          pri: "三亚"
        }
      ],
      items: [
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img3
        },
        {
          img: img4
        },
        {
          img: img5
        }
      ]
    };
  },
  mounted() {
    this.klite();
    this.timer = setInterval(this.klite, 10000);
  },
  methods: {
    klite() {
      this.e = document.getElementsByClassName("slide_box");
      console.log(this.e);
      setTimeout(function() {
        var i = this.i;
        this.e = document.getElementsByClassName("slide_box");
        this.f = document.getElementsByClassName("th");
        if (this.e[0].style.left == 0 + "px") {
          for (i = 0; i <= this.f.length - 1; i++) {
            this.f[i].className = "th";
          }
          this.f[1].className = "th on";
          this.e[0].style.left = -700 + "px";
        } else if (this.e[0].style.left == -700 + "px") {
          for (i = 0; i <= this.f.length - 1; i++) {
            this.f[i].className = "th";
          }
          this.f[2].className = "th on";
          this.e[0].style.left = -1400 + "px";
        } else if (this.e[0].style.left == -1400 + "px") {
          for (i = 0; i <= this.f.length - 1; i++) {
            this.f[i].className = "th";
          }
          this.f[3].className = "th on";
          this.e[0].style.left = -2100 + "px";
        } else if (this.e[0].style.left == -2100 + "px") {
          for (i = 0; i <= this.f.length - 1; i++) {
            this.f[i].className = "th";
          }
          this.f[4].className = "th on";
          this.e[0].style.left = -2800 + "px";
        } else if (this.e[0].style.left == -2800 + "px") {
          for (i = 0; i <= this.f.length - 1; i++) {
            this.f[i].className = "th";
          }
          this.f[0].className = "th on";
          this.e[0].style.left = 0 + "px";
        }
      }, 9000);
    },
    chege(num) {
      var i = this.i;
      this.e = document.getElementsByClassName("slide_box");
      this.f = document.getElementsByClassName("th");
      if (num == 0) {
        for (i = 0; i <= this.f.length - 1; i++) {
          this.f[i].className = "th";
        }
        this.f[num].className = "th on";
        this.e[0].style.left = 0 + "px";
      } else if (num == 1) {
        for (i = 0; i <= this.f.length - 1; i++) {
          this.f[i].className = "th";
        }
        this.f[num].className = "th on";
        this.e[0].style.left = -700 + "px";
      } else if (num == 2) {
        for (i = 0; i <= this.f.length - 1; i++) {
          this.f[i].className = "th";
        }
        this.f[num].className = "th on";
        this.e[0].style.left = -1400 + "px";
      } else if (num == 3) {
        for (i = 0; i <= this.f.length - 1; i++) {
          this.f[i].className = "th";
        }
        this.f[num].className = "th on";
        this.e[0].style.left = -2100 + "px";
      } else if (num == 4) {
        for (i = 0; i <= this.f.length - 1; i++) {
          this.f[i].className = "th";
        }
        this.f[num].className = "th on";
        this.e[0].style.left = -2800 + "px";
      }
    },
    enter(num) {
      var i = this.i;
      this.a = document.getElementsByClassName("nav-item");
      this.c = document.getElementsByClassName("nav-panel rank-panel");
      //   this.d = document.getElementsByClassName("nav-panel rank-panel category-panel")
      //   console.log(this.c);
      //   console.log(this.d[num].className);
      // console.log(this.a);
      for (i = 0; i <= this.a.length - 1; i++) {
        this.a[i].className = "nav-item";
        this.a[num].className = "nav-item hover";
        this.c[num].style.display = "block";
      }
    },
    leave(num) {
      var i = this.i;
      this.b = document.getElementsByClassName("nav-item hover");
      this.c = document.getElementsByClassName("nav-panel rank-panel");
      for (i = 0; i <= this.a.length - 1; i++) {
        this.a[i].className = "nav-item";
        this.a[num].className = "nav-item";
        this.c[num].style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
.cont-main .hd h3 {
  float: left;
  font-weight: normal;
  font-size: 20px;
  color: #333;
  margin-top: 15px;
}
.cont-main .hd {
  height: 50px;
  border-bottom: 1px solid #eee;
  line-height: 48px;
}
.cont-main {
  float: right;
  width: 790px;
  margin-bottom: 20px;
}
.rank .num {
  float: left;
  margin-right: 10px;
  font-size: 18px;
  color: #ff9d00;
}
.down_cout p {
  line-height: 24px;
  color: #666;
  padding-left: 30px;
}
.down_cout span {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 24px;
  width: 24px;
  background: url(../../assets/introduction-images/new-gl-icon6.png) -20px -90px
    no-repeat;
}
.down_cout {
  height: 24px;
  width: 130px;
  background: #ebebeb;
  border-radius: 30px;
  margin-top: 5px;
  position: relative;
}
.rank .gl_list .time {
  margin: 5px 0;
  text-align: center;
}
.gl_list a {
  display: block;
  height: 184px;
  width: 130px;
  overflow: hidden;
}
.rank a {
  color: #333;
  font-size: 14px;
}
.rank li + li {
  border-top: 1px solid #f7f7f7;
  line-height: 24px;
}
.gl_list {
  width: 130px;
  float: left;
  margin-right: 40px;
}
.rank li {
  padding: 15px 0;
}
.rank .gl_list {
  float: none;
}
.drop-item .trigger i {
  float: right;
  margin-top: 10px;
  border-top: 4px solid #999;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  font-size: 0;
  overflow: hidden;
}
.drop-item .trigger {
  padding: 10px 0;
  height: 22px;
  cursor: pointer;
}
.drop-item {
  float: left;
  width: 40px;
  font-size: 14px;
  margin-left: 10px;
}
.nav-drop {
  margin-bottom: 10px;
  height: 45px;
  line-height: 25px;
  color: #333;
  border-bottom: 1px solid #eee;
}
.side-hd {
  height: 50px;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #eee;
  line-height: 48px;
}
.sidebar {
  float: left;
  width: 160px;
}
.focus .slide ol li.on {
  background: url(../../assets/introduction-images/scroll_b.png) 0px 0px
    no-repeat;
}
.focus .slide ol li {
  float: left;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background: url(../../assets/introduction-images/scroll_s.png) center 5px
    no-repeat;
  text-indent: -10000px;
  overflow: hidden;
  cursor: pointer;
}
.focus .slide ol {
  position: absolute;
  right: 30px;
  bottom: 24px;
}
.focus .slide ul li {
  float: left;
  width: 700px;
  height: 340px;
  overflow: hidden;
}
.focus .slide ul {
  width: 9999px;
  position: absolute;
  left: 0;
  top: 0;
}
.focus .slide {
  width: 700px;
  float: right;
  height: 340px;
  overflow: hidden;
  position: relative;
}
.domn_in p span {
  float: left;
  color: #d8d8d8;
  height: 12px;
  width: 2px;
  line-height: 14px;
  padding: 0px 4px;
  overflow: hidden;
}
.domn_in p a {
  float: left;
  color: #666;
  line-height: 14px;
}
.domn_in p {
  margin-top: 8px;
}
.domn_in h4 {
  font-size: 16px;
  color: #414141;
  line-height: 18px;
  font-weight: normal;
  margin-top: 5px;
}
.domn_in {
  float: left;
  width: 180px;
  margin-left: 18px;
  /* display: inline; */
}
.app_d h3 {
  float: left;
  height: 50px;
  width: 50px;
  overflow: hidden;
}
.app_d {
  border-bottom: 1px #e3e3e3 solid;
  height: 50px;
  overflow: hidden;
  padding-bottom: 64px;
  margin-top: 15px;
}
.clear {
  clear: both;
  display: block;
  height: 0;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.input_like input {
  height: 30px;
  line-height: 30px;
  float: left;
  width: 206px;
  padding: 3px 0px;
  border: 0px;
  font-size: 12px;
  color: #888888;
  margin-left: 8px;
  margin-top: 2px;
  outline: none;
  font-family: "Microsoft Yahei", Tahoma, Arial, Helvetica, STHeiti;
}
.input_like input {
  line-height: normal;
}
.input_like span {
  float: left;
  height: 27px;
  width: 29px;
  background: url(../../assets/introduction-images/new-gl-icon6.png) -20px -60px
    no-repeat;
  margin-top: 7px;
  margin-left: 8px;
}
.input_like {
  border: 2px #ffa800 solid;
  height: 40px;
  margin-top: 10px;
  position: relative;
  z-index: 10;
}
.gonglve-nav .nav-panel a {
  color: #999;
}
.mdd_nav dd {
  background-color: #ffffff;
  border: 1px solid #ffaa00;
  display: none;
  left: 248px;
  line-height: 25px;
  padding: 5px 15px 7px;
  position: absolute;
  top: -1px;
  width: 400px;
  z-index: 98;
}
.category-panel dd {
  /* display: inline; */
  display: block;
  position: static;
  border: 0;
  width: auto;
  padding: 0;
  float: left;
  margin: 5px 15px 5px 0;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 20px;
}
.category-panel dt {
  float: left;
  /* display: inline; */
  width: 60px;
  height: 20px;
  background: none;
  margin: 5px 0 5px -60px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  line-height: 20px;
  font-size: 12px;
  cursor: default;
  color: #666;
  font-weight: bold;
}
.category-panel dl {
  margin: 0 0 0 20px;
  padding-left: 60px;
  border: 0;
  font-size: 12px;
  width: auto;
  height: auto;
  line-height: 20px;
}

.gonglve-nav .rank-panel strong {
  padding: 0 15px;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}
.gonglve-nav .rank-panel .rank-num {
  float: left;
  width: 30px;
  font-size: 20px;
  font-family: Letter Gothic Std, Verdana, Geneva, sans-serif;
  text-align: right;
  color: #aaa;
  font-weight: bold;
}
.gonglve-nav .rank-panel .top3 .rank-num,
.gonglve-nav .rank-panel .top3 strong a {
  color: #ffa800;
}
.gonglve-nav .rank-panel li {
  height: 30px;
  overflow: hidden;
  text-align: left;
}
.gonglve-nav .nav-panel a {
  color: #999;
}
.gonglve-nav .nav-banner a {
  display: block;
  width: 235px;
  height: 340px;
  float: right;
  margin-right: 7px;
}
.gonglve-nav .nav-banner {
  position: absolute;
  /* _top: 1px; */
  z-index: 1;
  width: 506px;
  height: 345px;
  background-repeat: no-repeat;
  background-position: right bottom;
  /* display: none; */
}
.gonglve-nav .rank-panel ol {
  position: absolute;
  z-index: 2;
  padding: 15px 10px;
  width: 350px;
  line-height: 30px;
}
.gonglve-nav .nav-panel {
  position: absolute;
  left: 258px;
  top: -1px;
  width: 350px;
  height: 338px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: none;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
}
/* --- */
.gonglve-nav .hover .nav-title {
  color: #ff8a00;
}
.gonglve-nav .hover .nav-title .gn-arrow {
  background-position: -30px -40px;
}
.gonglve-nav .nav-title .gn-arrow {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 6px;
  height: 10px;
  background: url(../../assets/introduction-images/new-gl-icon6.png) no-repeat -20px -40px;
  overflow: hidden;
}

.gonglve-nav .nav-title h3 {
  font-size: 12px;
  line-height: 40px;
}
.gonglve-nav .nav-title {
  height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  cursor: default;
  position: relative;
  z-index: 2;
}
.gonglve-nav {
  border: 1px solid #ddd;
  border-bottom: 0;
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}
.mdd_nav {
  float: left;
  width: 260px;
}
.focus {
  height: 340px;
  margin: 10px 0 15px;
}
.wrapper {
  width: 1000px;
  margin: 15px auto 0;
}
.gonglve-nav .category-panel {
  width: 490px;
  padding: 10px 0;
  height: 318px;
  /* display: none; */
}
</style>
