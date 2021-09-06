<template>
  <div id="app">
    <main>
      <CheckWeather />
    </main>
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, "Times New Roman", Times, serif;
}

#app {
  background-image: url("./assets/mixed-weather.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 13px;

  font-size: 20px;
  border-radius: 0px 16px 0px 16px;
  box-shadow: 0px 0px 26px;
  border-color: rgb(0, 255, 136);
}
</style>
