<template>
  <v-card outlined class="px-2">
    <v-card-title v-if="chartData.title !== undefined">{{ chartData.title }}</v-card-title>

    <v-row dense>
      <v-col cols="12">
        <div
          class="container"
        >
          <Doughnut
            :data="chartData.data"
            :options="chartData.options"
            :width="width"
            :height="height"
            :key="chartKey"
          />
        </div>

        <v-divider class="mt-2"></v-divider>
        <v-card flat class="data-cards mb-2" v-for="(num, i) in 2" :key="i">
          <v-card-title class="pt-3">147</v-card-title>
          <v-card-subtitle class="text-body-2 pb-3">Title here</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DoughnutChartV2",
  components: {
    Doughnut,
  },
  props: {
    chartData: {
      type: Object
    },
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartKey: 0
    };
  },

  watch: {
    chartData: {
      handler(newValue, oldValue) {
        this.chartKey = this.chartKey + 1;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* *{
  border: 1px solid whitesmoke;
} */
/* .data-cards{
  background-color: #F9FAFF;
} */

.chart-card{
  border: 1px solid #f0f0f0;
  border-radius: 5px
}
</style>
