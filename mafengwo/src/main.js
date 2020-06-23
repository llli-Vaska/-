import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Axios from 'axios'
Vue.prototype.HOST = 'http://localhost:3000'
Vue.prototype.$axios  = Axios
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
