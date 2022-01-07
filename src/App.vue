<template>
  <div id="app">
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.col {
  padding: 0;
}

.v-text-field--outlined.v-input--is-focused fieldset {
  border: 2px solid red;
}
</style>
