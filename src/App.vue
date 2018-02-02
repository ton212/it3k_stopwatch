<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
body {
  background: url('./assets/bg.jpg') center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  overflow: hidden;
}
</style>
