<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/"
                ><a class="nav-link active" aria-current="page"
                  >Home</a
                ></router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/about"
                ><a class="nav-link">About</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <router-link to="/">Home</router-link>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
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
