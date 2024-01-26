<template>
  <div id="app">
    <AtaComponent />
  </div>
</template>

<script>
import AtaComponent from './components/AtaComponent.vue';

export default {
  name: 'App',
  components: {
    AtaComponent
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
  margin-top: 60px;
}
</style>
