<template>
  <div>
    <ul class="nav nav-pills mb-4">
      <li class="nav-item">
        <button @click="switchUnits('metric')" class="nav-link">C°</button>
      </li>
      <li class="nav-item">
        <button @click="switchUnits('imperial')" class="nav-link">F</button>
      </li>
    </ul>
    <div class="search-box">
      <input
        class="search-bar"
        type="text"
        placeholder="Search..."
        v-model="query"
        v-on:keyup.enter="getWeather"
      />
    </div>

    <ShowWeather :weather="weather" class="show" />
  </div>
</template>

<script>
import ShowWeather from "./ShowWeather";

export default {
  name: "CheckWeather",
  data() {
    return {
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: [],
      unit: "metric",
    };
  },
  methods: {
    getWeather() {
      fetch(
        `${this.url}weather?q=${this.query}&units=${this.unit}&appid=${this.apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((weatherData) => {
          this.weather = weatherData;
        });
    },
    switchUnits(unit) {
      this.unit = unit;
      this.getWeather();
    },
  },
  components: {
    ShowWeather,
  },
};
</script>

<style scoped>
.show {
  width: 500px;
}
</style>
