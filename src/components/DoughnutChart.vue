<template>
  <v-card flat class="px-4 pb-4">
    <v-card-title class="px-0">{{ "Chart Title" }}</v-card-title>

    <v-row dense>
      <v-col cols="12">
        <div
          class="container"
          style="border: 1px solid #f0f0f0; border-radius: 5px"
        >
          <Doughnut
            :data="chartData"
            :options="chartOptions"
            :width="width"
            :height="height"
          />
        </div>
      </v-col>

      <v-col cols="6" v-for="(num, i) in 2" :key="i">
        <v-card flat outlined>
          <v-card-title>147</v-card-title>
          <v-card-subtitle class="text-overline">Title here</v-card-subtitle>
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
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
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
      chartData: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#1BD6FF", "#711BFF", "#BB2FFD", "#FF68C3"],
            data: [40, 20, 80, 10],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
          },
        },
      },
    };
  },
};
</script>
