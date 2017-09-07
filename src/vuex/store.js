import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: '优装美家vuex'
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  }
});
export default store;
