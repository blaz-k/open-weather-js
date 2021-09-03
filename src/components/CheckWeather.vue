<template>
  <div>
    <input type="text" />
    <button @click="getWeather" type="submit">Search</button>
    <p>{{ weather.weather }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CheckWeather",
  data() {
    return {
      weather: [],
    };
  },
  methods: {
    getWeather() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=london&appid=61c7d12c7c82021c85f17dc82f594edb"
        )
        .then((response) => {
          this.weather = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>

// API KEY 
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=61c7d12c7c82021c85f17dc82f594edb