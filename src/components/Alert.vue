<template>
  <v-snackbar v-model="alert.isAlert" top :color="alert.type" :timeout="alert.timeout">
    {{ alert.message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alert: Object
  },
  data: () => ({
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped>
/* * {
        border: 1px solid gray;
      } */
</style>
