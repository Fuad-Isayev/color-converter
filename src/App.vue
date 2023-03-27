<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  mounted() {
    window.onresize = this.getDimensions;
  },
  methods: {
    getDimensions() {
      this.$store.state.screenWidth = window.innerWidth;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
