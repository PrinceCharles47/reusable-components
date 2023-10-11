<template>
  <v-container>
    <MultiStepForm />
  </v-container>
</template>

<script>
import MultiStepForm from "../components/MultiStepForm";

export default {
  name: "About",

  components: {
    MultiStepForm,
  },
  data: () => ({}),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
