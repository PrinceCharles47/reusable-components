<template>
  <v-container>
    <Calendar />
  </v-container>
</template>

<script>
import Calendar from "../components/Calendar";

export default {
  name: "CalendarView",

  components: {
    Calendar,
  },
  data: () => ({}),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
