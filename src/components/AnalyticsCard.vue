<template>
  <v-card outlined class="ma-0 d-flex pa-2">
    <v-card flat class="mr-3">
      <v-progress-circular
        :rotate="270"
        :size="75"
        :width="7"
        :value="value"
        :color="color[0]"
      >
        {{ `${value} %` }}
      </v-progress-circular>
    </v-card>

    <div class="pa-0 data-cards">
      <v-card-title class="pt-3">147</v-card-title>
      <v-card-subtitle class="text-body-2 pb-3">Title here</v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AnalyticsCard",

  data: () => ({
    value: 47,
    color: ["#711BFF", "#C54AFF", "#008AC6"],
  }),
};
</script>

<style scoped>
/* .data-cards {
  background-color: #f9faff;
} */

/* *{
  border: 1px solid gray;
} */
</style>
