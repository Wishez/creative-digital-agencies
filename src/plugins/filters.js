import moment from "moment-timezone";

export default {
  install(Vue) {
    Vue.filter(
      "fixSum",
      (sum, numbersAfterDot = 2) =>
        typeof sum === "string" ? sum : +sum.toFixed(numbersAfterDot)
    );

    Vue.filter("formatDate", (date, format = "L") => {
      if (typeof date === "string") {
        date = date.replace(/[-\.]/g, "/");
      }

      return moment(date).format(format);
    });
  }
};
