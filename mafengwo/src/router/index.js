import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import visa from "../views/visa/visa.vue"; /*签证二级页面*/
import hotel from "../views/hotel/hotel.vue"; /*订酒店二级页面*/
import HotelOne from "../views/hotel/HotelOne.vue"; /*订酒店三级页面*/
import HotelTwo from "../views/hotel/HotelTwo.vue"; /*订酒店三级页面*/
import HotelThree from "../views/hotel/HotelThree.vue"; /*订酒店三级页面*/
import introduction from "../views/introduction/introduction.vue"; /*旅游攻略二级页面*/
import AssaultOne from "../views/introduction/AssaultOne.vue"; /*旅游攻略三级页面*/
import AssaultTwo from "../views/introduction/AssaultTwo.vue"; /*旅游攻略三级页面*/
import AssaultThree from "../views/introduction/AssaultThree.vue"; /*旅游攻略三级页面*/
import VisaOne from "../views/visa/VisaOne.vue"; /*签证三级页面*/
import VisaTwo from "../views/visa/VisaTwo.vue"; /*签证三级页面*/
import VisaThree from "../views/visa/VisaThree.vue"; /*签证三级页面*/
import Login from "../views/login/Login.vue"; /*登录页面*/
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/visa",
    name: "visa",
    component: visa
  },
  {
    path: "/visa/VisaOne",
    name: "VisaOne",
    component: VisaOne
  },
  {
    path: "/visa/VisaTwo",
    name: "VisaTwo",
    component: VisaTwo
  },
  {
    path: "/visa/VisaThree",
    name: "VisaThree",
    component: VisaThree
  },
  {
    path: "/hotel",
    name: "hotel",
    component: hotel
  },
  {
    path: "/hotel/HotelOne",
    name: "HotelOne",
    component: HotelOne
  },
  {
    path: "/hotel/HotelTwo",
    name: "HotelTwo",
    component: HotelTwo
  },
  {
    path: "/hotel/HotelThree",
    name: "HotelThree",
    component: HotelThree
  },
  {
    path: "/introduction",
    name: "introduction",
    component: introduction
  },
  {
    path: "/introduction/AssaultOne",
    name: "AssaultOne",
    component: AssaultOne
  },
  {
    path: "/introduction/AssaultTwo",
    name: "AssaultTwo",
    component: AssaultTwo
  },
  {
    path: "/introduction/AssaultThree",
    name: "AssaultThree",
    component: AssaultThree
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
