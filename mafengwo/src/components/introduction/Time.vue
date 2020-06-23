<template>
  <div>
    <div class="travel_directory _j_exscheduleinfo">
      <div class="tarvel_dir_list clearfix">
        <ul>
          <li class="text-left time">
            出发时间<span>/</span>{{ timewest.time }}<i></i>
          </li>
          <li class="text-left day">
            出行天数<span>/</span>{{ timewest.day }} 天
          </li>
          <li class="text-left people">
            人物<span>/</span>{{ timewest.role }}
          </li>
          <li class="text-left cost">
            人均费用<span>/</span>{{ timewest.price }}RMB
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["timewest"]
};
</script>

<style scoped>
.tarvel_dir_list ul li i {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
}
.tarvel_dir_list ul li span {
  color: #ff9d00;
  margin: 0 4px;
}
.tarvel_dir_list ul li {
  width: 170px;
  margin-top: 18px;
  float: left;
  /* display: inline; */
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  color: #666;
  padding-left: 4%;
  margin-left: 10px;
  background: url(../../assets/introduction-images/151204sprite1.png) no-repeat;
  cursor: pointer;
}
.tarvel_dir_list ul li.cost {
  background-position: -22px -66px;
}
.tarvel_dir_list ul li.people {
  background-position: -22px -44px;
}
.tarvel_dir_list ul li.day {
  background-position: -22px -22px;
}
.tarvel_dir_list ul li.time {
  background-position: -22px 0;
}
.tarvel_dir_list ul {
  width: 100%;
}
.tarvel_dir_list {
  margin-left: 20px;
}
.travel_directory {
  border: 1px dashed #d7d7d7;
  padding-bottom: 18px;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 4px;
  position: relative;
}
</style>
