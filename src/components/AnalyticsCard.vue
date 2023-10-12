<template>
  <v-card flat outlined class="d-flex align-center pa-2">
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

    <v-card-text style="background-color: #f4f4f4; border-radius: 5px;" class="pa-0">
      <v-card-title :style="`color: ${color[0]};`" class="font-weight-bold pb-1">147</v-card-title>
      <v-card-subtitle class="text-overline">Title here</v-card-subtitle>
    </v-card-text>
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