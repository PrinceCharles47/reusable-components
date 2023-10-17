<template>
  <v-card outlined class="px-2">
    <v-card-title v-if="chartData.title !== undefined" class="px-0">{{
      chartData.title
    }}</v-card-title>

    <div class="d-flex align-center justify-space-between">
      <div class="container">
        <Doughnut
          :data="chartData.data"
          :options="chartData.options"
          :width="width"
          :height="height"
          :key="chartKey"
        />
      </div>

      <v-card width="35%" flat class="data-cards mb-2" v-for="(num, i) in 2" :key="i">
        <v-card-title class="pt-3">147</v-card-title>
        <v-card-subtitle class="text-body-2 pb-3">Title here</v-card-subtitle>
      </v-card>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartData: {
      type: Object,
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
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
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
      chartKey: 0,
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

.chart-card {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
}

.container{
  width: 30%;
}
</style>
