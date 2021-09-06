<template>
  <div>
    <div class="search-box">
      <input
        class="search-bar"
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
.location {
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  color: rgb(22, 3, 3);
  text-shadow: 1px 2px rgba(0, 0, 0, 0.25);
}

.date {
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  color: rgb(22, 3, 3);
}

.weather-info {
  text-align: center;
  color: rgb(22, 3, 3);
}

.weather-info .temp {
  display: inline-block;
  padding: 15px 25px;
  font-size: 180px;
  font-weight: 900;
  text-shadow: 2px 4px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 17px;
  margin: 30px 0px;

  box-shadow: 10px 25px;
}

.weather-info .meteo {
  font-size: 55px;
  font-weight: 750;
  font-style: italic;
  text-shadow: 2px 6px rgba(255, 255, 255, 0.25);
}
</style>

// API KEY 
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=61c7d12c7c82021c85f17dc82f594edb