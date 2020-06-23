import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    // left: "",
    // right: ""
    left: 104.10194,
    right: 30.65984,
    logining:false,
    username:'',
  },

  mutations: {
   
  

    mapchangexa(state) {
      state.left = 108.93425;
      state.right = 34.23053;
      state.count++;
      // alert('test');
    },
    mapchangecq(state) {
      state.left = 106.54315;
      state.right = 29.56048;
      state.count++;
      // alert('test');
    }
  }
});
