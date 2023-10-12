<template>
  <v-container>
    <Tabs />
  </v-container>
</template>

<script>
import Tabs from "../components/Tabs";

export default {
  name: "TabsView",

  components: {
    Tabs,
  },
  data: () => ({}),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
