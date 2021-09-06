<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        placeholder="Search..."
        v-model="query"
        @keypress="getWeather"
      />
    </div>

    <div class="weather" v-if="typeof weather.main != 'undefined'">
      <div class="location">{{ weather.name }} {{ weather.sys.country }}</div>
      <div class="date">Monday, 6, September, 2021</div>
      <div class="weather-info">
        <div class="temp">{{ Math.round(weather.main.temp) }} °C</div>
        <div class="meteo">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckWeather",
  data() {
    return {
      apiKey: "61c7d12c7c82021c85f17dc82f594edb",
      url: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: [],
    };
  },
  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url}weather?q=${this.query}&units=metric&appid=${this.apiKey}`
        )
          .then((response) => {
            return response.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>

// API KEY 
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=61c7d12c7c82021c85f17dc82f594edb