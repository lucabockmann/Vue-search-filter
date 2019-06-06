<template>
  <div id="app">
    <searchMovie msg="Search a Movie!"/>
  </div>
</template>

<script>
import searchMovie from './components/searchMovie.vue'

export default {
  name: 'app',
  components: {
    searchMovie,
  }
}
</script>

<style lang="less">
body {
  background-color: #2c3e50;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  margin-top: 60px;
  width: 1200px;
  margin: 0 auto;
}
</style>
