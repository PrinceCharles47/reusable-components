<template>
  <v-card outlined class="pa-2">
    <v-card-title v-if="chartData.title !== undefined">{{
      chartData.title
    }}</v-card-title>

    <!-- Bar Chart -->
    <v-row dense>
      <v-col cols="12" md="12">
        <v-container fill-height class="container">
          <Bar
            v-if="loaded"
            :data="chartData.data"
            :options="chartData.options"
            :key="chartKey"
          />
        </v-container>
      </v-col>

      <!-- Data for chart analytics -->
      <v-col cols="12" md="12">
        <v-divider></v-divider>
        <v-row dense>
          <v-col cols="12" md="4" v-for="(num, i) in 3" :key="i">
            <v-card flat class="data-cards">
              <v-card-title class="pt-3">147</v-card-title>
              <v-card-subtitle class="text-body-2 pb-3"
                >Title here</v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
//##################################################################
// Note: This component uses the Chart.js and Vue-chartjs libraries
// PROPS:
// chartData: {
//   title: String,
//   data: { (Contains the data to be displayed)
//     labels: Array,
//     datasets: [ (May contain one or more datasets)
//       {
//         label: String,
//         backgroundColor: Hex,
//         data: Array,
//       },
//     ],
//   },

//   options: { (For customizing the UI of the chart)
//     responsive: Boolean,
//     maintainAspectRatio: Boolean,
//     indexAxis: "x" or "y",
//     plugins: {
//       legend: {
//         position: "bottom" (bottom, top, left, or right),
//         align: "start" (start, end, center),
//       },
//     },
//   },
// },
//##################################################################



import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartData: Object,
  },
  data: () => ({
    chartKey: 0,
    loaded: false,
  }),
  async mounted() {
    this.loaded = false;

    try {
      //   const { userlist } = await fetch("/api/userlist");
      //   this.chartdata = userlist;

      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
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
</style>
