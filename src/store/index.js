import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
moment.locale("zh-cn");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startTime: null,
    elapsedTime: moment.duration(0, "s"),
  },
  mutations: {},
  actions: {
    startCounter(context) {
      context.state.startTime = moment().format("llll");
      context.state.elapsedTime = moment.duration(0, "s");
    },
    tickCounter(context) {
      // context.state.elapsedTime = moment
      //   .utc(
      //     moment
      //       .duration(moment().diff(context.state.startTime))
      //       .asMilliseconds()
      //   )
      //   .format("H[h]m[m]s[s]");
      context.state.elapsedTime.add(1, "s");
    },
    stopCounter(context) {
      context.state.startTime = null;
      context.state.elapsedTime = moment.duration(0, "s");
    },
  },
  modules: {},
});
