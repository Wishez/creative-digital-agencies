// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Icons from "./plugins/icons";
import Components from "./plugins/components";
import Filters from "./plugins/filters";
import Lodash from "./plugins/lodash";

Vue.use(Icons);
Vue.use(Filters);
Vue.use(Components);
Vue.use(Lodash);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
