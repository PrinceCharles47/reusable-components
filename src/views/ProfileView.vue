<template>
  <v-container>
    <v-card flat class="px-2 mt-3">
      <v-row dense>
        <v-col cols="12" md="3">
          <Profile />
        </v-col>

        <v-col cols="12" md="9">
          <InformationCard v-for="(num, i) in 3" :key="i" />
        </v-col>
      </v-row>
    </v-card>
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
