<template>
  <v-app id="wrapper">
    <Navigation />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  font-family: "Poppins", sans-serif !important;
  font-family: "Inter", sans-serif !important; 
  font-family: "Roboto", sans-serif !important;
} */

#wrapper {
  background-color: #fafafa;
}
</style>
