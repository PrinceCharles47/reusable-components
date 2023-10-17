<template>
  <v-container>
    <Card />
  </v-container>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "CardView",

  components: {
    Card,
  },
  data: () => ({}),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
