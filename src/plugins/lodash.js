import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

export default {
  install(Vue) {
    Vue.prototype.$_ = {
      upperFirst,
      camelCase
    };
  }
};
