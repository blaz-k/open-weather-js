<template>
  <div id="app" >
    <img alt="Vue logo" src="./assets/weather.jpg" />
    
    <CheckWeather />
  </div>
</template>

<script>
import CheckWeather from "./components/CheckWeather";

export default {
  name: "app",
  components: {
    CheckWeather,
  },
};
</script>

<style>
* {
  background-color: rgba(213, 211, 228, 0.959);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
