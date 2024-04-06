<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: "App",
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Main
  },
  methods: {

  }
}
</script>

<template>
  <div id="my_app">
    <Header />

    <Main />
  </div>
</template>

<style scoped lang="scss">
#my_app{
  background-color: #282828;
  min-height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
