<template>
  <v-container>
    <!-- <v-card flat class="px-2 mt-3"> -->
      <Profile />
    <!-- </v-card> -->
  </v-container>
</template>

<script>
import Profile from "../components/Profile";
import InformationCard from "../components/InformationCard";

export default {
  name: "ProfileView",

  components: {
    Profile,
    InformationCard,
  },
  data: () => ({}),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
