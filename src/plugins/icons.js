import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/brands/skype";
import "vue-awesome/icons/brands/facebook-f";
import "vue-awesome/icons/brands/linkedin-in";
import "vue-awesome/icons/brands/twitter";
import "vue-awesome/icons/chevron-down";
import "vue-awesome/icons/edit";
import "vue-awesome/icons/pencil-ruler";
import "vue-awesome/icons/search";
import "vue-awesome/icons/comment";

export default {
  install(Vue) {
    Vue.component("icon", Icon);
  }
};
