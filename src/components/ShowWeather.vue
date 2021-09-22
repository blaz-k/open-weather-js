<template>
  <div>
    <div class="weather" v-if="typeof weather.main != 'undefined'">
      <div class="location">{{ weather.name }} {{ weather.sys.country }}</div>
      <div class="date">Monday, 6, September, 2021</div>
      <div class="weather-info">
        <div class="temp">{{ Math.round(weather.main.temp) }} °C</div>
        <div class="meteo">{{ weather.weather[0].main }}</div>
      </div>
    </div>
    <div class="weather" v-if="typeof weather.main === 'undefined'">
      <h1 class="temp">NOT FOUND</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowWeather",
  props: ["weather"],
};
</script>

<style>
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

.weather-info .meteo {
  font-size: 55px;
  font-weight: 750;
  font-style: italic;
  text-shadow: 2px 6px rgba(255, 255, 255, 0.25);
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
</style>