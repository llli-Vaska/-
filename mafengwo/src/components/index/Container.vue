<template>
  <!-- 主页下的所有内容 -->
  <div class="mfw-container clearfix">
    <div class="sales-entrys-container-innerimg clearfix">
      <a
        :class="item.class"
        :href="item.href"
        v-for="item in items"
        :key="item.id"
      >
        <div class="sales-entrys-title">
          {{ item.title }}
        </div>
        <div class="sales-entrys-subtitle">
          {{ item.subtitle }}
        </div>
      </a>
    </div>
    <div class="mfw-wrapper">
      <div class="da-banner">
        <a href="#">
          <img
            src="https://n1-q.mafengwo.net/s16/M00/C0/D7/CoUBUl6mlU2AcUV6AAICQpLGvdQ345.png"
            width="700"
            height="120"
          />
        </a>
      </div>
      <Travelontes></Travelontes>
    </div>
    <AsideLeft></AsideLeft>
  </div>
</template>

<script>
import Travelontes from "@/components/index/Travelontes.vue";
import AsideLeft from "@/components/index/AsideLeft.vue";
export default {
  components: {
    Travelontes,
    AsideLeft
  },
  data() {
    return {
      items: [
        {
          href: "#",
          class: "sales-entrys-item entrys-bg-sales",
          title: "自由行",
          subtitle: "旅行就要更自在"
        },
        {
          href: "#",
          class: "sales-entrys-item entrys-bg-group",
          title: "跟团游",
          subtitle: "行程透明省心游"
        },
        {
          href: "#",
          class: "sales-entrys-item entrys-bg-localdeals",
          title: "当地游",
          subtitle: "最地道的玩法体验"
        },
        {
          href: "#",
          class: "sales-entrys-item entrys-bg-flight",
          title: "机票",
          subtitle: "特惠一折起"
        },
        {
          href: "/hotel",
          class: "sales-entrys-item entrys-bg-hotel",
          title: "订酒店",
          subtitle: "一键全网比价"
        },
        {
          href: "/visa",
          class: "sales-entrys-item entrys-bg-visa",
          title: "签证",
          subtitle: "出签率高服务佳"
        },
        {
          href: "#",
          class: "sales-entrys-item entrys-bg-ship",
          title: "邮轮",
          subtitle: "移动的海上城堡"
        }
      ]
    };
  }
};
</script>

<style>
.mfw-wrapper .da-banner > * {
  margin-bottom: 30px;
}
.da-banner {
  margin-bottom: 30px;
  position: relative;
}
.mfw-wrapper .da-banner {
  margin-bottom: 0;
}
.mfw-wrapper {
  float: right;
  width: 700px;
}
.sales-entrys-container-innerimg .sales-entrys-item:hover .sales-entrys-title {
  background-image: url(https://n2-q.mafengwo.net/s13/M00/76/AE/wKgEaVzROqWAPJp3AAAECYd-dCM112.png);
  background-repeat: no-repeat;
  background-size: 100% 7px;
  background-position: bottom;
}
.sales-entrys-container-innerimg .sales-entrys-item:hover {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.sales-entrys-item .sales-entrys-subtitle {
  height: 16px;
  padding-top: 1px;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  font-family: PingFangSC-Regular;
  color: #9d9d9d;
  margin-left: -40px;
}
.sales-entrys-container-innerimg .sales-entrys-subtitle {
  color: #9d9d9d;
}
.sales-entrys-item .sales-entrys-title {
  display: inline-block;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  font-family: PingFangSC-Semibold;
  color: #333;
  margin-left: -80px;
}
.sales-entrys-container-innerimg .sales-entrys-title {
  color: #333;
}
.sales-entrys-container-innerimg .entrys-bg-ship {
  background-position-y: -233px;
}
.sales-entrys-container-innerimg .entrys-bg-visa {
  background-position-y: -335px;
}
.sales-entrys-container-innerimg .entrys-bg-hotel {
  background-position-y: -546px;
}
.sales-entrys-container-innerimg .entrys-bg-flight {
  background-position-y: -441px;
}
.sales-entrys-container-innerimg .entrys-bg-localdeals {
  background-position-y: -129px;
}
.sales-entrys-container-innerimg .entrys-bg-group {
  background-position-y: -24px;
}
.sales-entrys-item {
  width: 154px;
  height: 47px;
  margin-left: 8px;
  padding-top: 8px;
  padding-left: 7px;
  display: inline-block;
  border-radius: 3px;
  font-family: PingFangSC-Semibold;
  cursor: pointer;
}
.sales-entrys-item:first-child {
  margin-left: 0;
}
.sales-entrys-container-innerimg .sales-entrys-item {
  width: 136px;
  height: 57px;
  border: 1px solid #e5e5e5;
  background-image: url(https://p3-q.mafengwo.net/s14/M00/73/0B/wKgE2l0HSGuAOI1tAAChEE0vNA4603.png);
  background-repeat: no-repeat;
  background-size: 104px auto;
  background-position-x: 59px;
}
.sales-entrys-container-innerimg .entrys-bg-sales {
  background-position-y: -651px;
}
.sales-entrys-container-innerimg a:hover,
.sales-entrys-container-innerimg a:visited,
.sales-entrys-container-innerimg a:link,
.sales-entrys-container-innerimg a:active {
  text-decoration: none;
}
.sales-entrys-container-innerimg {
  width: 100%;
  margin-bottom: 19px;
  font-size: 0;
  white-space: nowrap;
}
.mfw-container {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>
