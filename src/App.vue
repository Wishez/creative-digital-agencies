<style src='@/assets/sass/main.sass' lang='sass'></style>
<style src='@/assets/sass/fonts.sass' lang='sass'></style>

<template>
  <div id="app">
    <header class="header">
      <nav aria-label="Навигация по сайту">
        <ul>
          <li 
            class="brand" 
            role="presentation">
            <router-link to="/">
              <h1 class="brand__name">
                <abbr :title="brand.abbr">
                  {{ brand.name }}
                </abbr>
              </h1>
            </router-link>
          </li>
          <li 
            v-for="(link, index) in navigation" 
            :key="index"
            class="navItem"
            role="presentation"
          >
            <router-link 
              :to="link.href"
              class="navItem__link">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </nav>
      <ul 
        role="navigation" 
        aria-label="Мы в социальных сетях">
        
        <li 
          v-for="(icon, index) in socials" 
          :key="index"
          class="socialItem"
          role="presentation">
          <a 
            :aria-label="icon.label"
            :href="icon.href" 
            target="_blank"
          >
            <icon 
              :name="`brands/${icon.name}`" 
              aria-hidden="true"/>
          </a>
        </li>
      </ul>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    brand: {
      name: "CS",
      abbr: "Creative studio"
    },
    navigation: [
      {
        label: "Home",
        href: "/"
      },
      {
        label: "Pages",
        href: "/pages"
      },
      {
        label: "Features",
        href: "/features"
      },
      {
        label: "Extensions",
        href: "/extentions"
      },
      {
        label: "Tutorials",
        href: "/tutorials"
      },
      {
        label: "Contact us",
        href: "/contact"
      }
    ],

    socials: [
      {
        name: "facebook-f",
        label: "Наш профиль в facebook",
        href: "https://facebook.com"
      },
      {
        name: "twitter",
        label: "Наша новостная лента в Twitter",
        href: "https://twitter.com"
      },
      {
        name: "skype",
        label: "Всегда на связи со Skype",
        href: "https://skype.com"
      },
      {
        name: "linkedin-in",
        label: "Мы есть в запрещённом в России ресурсе - LinkedIn",
        href: "https://linkedin.com/"
      }
    ]
  })
};
</script>
<style>
body {
  margin: 0;
}

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */

main {
  text-align: center;
  margin-top: 40px;
}

header {
  /* margin: 0;
  height: 56px;
  padding: 0 16px 0 24px; */
  /* background-color: #35495e;
  color: #ffffff; */
}

header span {
  /* display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px; */
}
</style>
