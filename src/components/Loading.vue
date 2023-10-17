<template>
  <v-container>
    <div id="loading-container">
      <v-progress-circular
        :size="100"
        :width="5"
        color="#3A0394"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    //
  }),
};
</script>

<style scoped>
#loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
}
</style>
