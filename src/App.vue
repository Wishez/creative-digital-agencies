<style src='@/assets/sass/main.sass' lang='sass'></style>
<style src='@/assets/sass/fonts.sass' lang='sass'></style>

<template>
  <div id="app">
    <header>
      Header
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
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
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
