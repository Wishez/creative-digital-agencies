<template>
  <div class="out">
    <section class="titles">
      <h1 class="brandName">Creativies</h1>
      <h2>Power by 
        <a 
          class="subInfo"
          href="https://shining-present.ru" 
          target="_blank">shining-present.ru
        </a>
      </h2>
      <div>
        <h3>Scroll down</h3>
        <base-button 
          :action="scrollTo('about')"
        >
          <icon name="chevron-down"/>
        </base-button>
      </div>
      
    </section>

    <section 
      id="about" 
      class="background-color_blue color_white">
      <h1 class="withBigW text_upper">We are an awesome agency</h1>

      <ul class="features parent row wrap">
        <li 
          v-for="(feature, key) in features"
          :key="key" 
          class="feature parent column">
          <h2 class="feature__title text_upper">{{ feature.title }}</h2>
          <figure class="feature__icon parent centered round order_first">
            <icon :name="feature.icon"/>
          </figure>
          <p>{{ feature.text }}</p>
        </li>
      </ul>
    </section>

    <section id="newsBlock">
      <h2 class="visible-hidden">News</h2>
      <div class="parent">

        <article class="news color_white background-color_darkGray">
          <h3>Akita Inu Dog</h3>

          <div class="metaNews parent">
            <time :datetme="new Date() | foramteDate">{{ new Date() | formateDate }}</time> 
            | 
            <p>In Culture</p>
          </div>

          <p>Таким образом новая модель организационной деятельности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.</p>
          <p>Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Разнообразный и богатый опыт реализация намеченных плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного развития.</p>
        </article>
        <img 
          aria-hidden="true" 
          src="@/assets/images/desk.png" 
          alt="">
      </div>
      
      <div class="parent">

        <article class="news background-color_lightGray parent">
          <h3>Akita Inu Dog</h3>
          <div class="metaNews parent">
            <time :datetme="new Date() | foramteDate">{{ new Date() | formateDate }}</time> 
            | 
            <p>In Culture</p>
          </div>

          <p>Таким образом новая модель организационной деятельности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.</p>
          <p>Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Разнообразный и богатый опыт реализация намеченных плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного развития.</p>
        </article>
        <img 
          class="order_first"
          aria-hidden="true" 
          src="@/assets/images/workspace.png" 
          alt="">
      </div>
      

    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  delimiters: [],
  components: {},
  filters: {},
  props: {},
  data: () => ({
    features: [
      {
        title: "One Feature",
        icon: "edit",
        text:
          "С другой стороны укрепление и развитие структуры позволяет оценить значение существенных финансовых и административных условий."
      },
      {
        title: "Second Feature",
        icon: "pencil-ruler",
        text:
          "Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития."
      },
      {
        title: "Third Feature",
        icon: "search",
        text:
          "Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет выполнять важные задания по разработке модели развития."
      },
      {
        title: "Fourth Feature",
        icon: "comment",
        text:
          "Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке систем массового участия."
      }
    ]
  }),
  computed: {},
  beforeMount() {},
  mounted() {},
  beforeCreate() {},
  created() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    scrollTo(id) {
      let element;
      setTimeout(() => {
        element = document.getElementById(id);
      }, 100);

      return () => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      };
    }
  },
  fetch() {},
  beforeUpdated() {}
};
</script>

<style lang="sass" scoped>
</style>
