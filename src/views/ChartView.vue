<template>
  <v-container>
    <v-row dense class="mt-3 mb-6">
      <v-col cols="12" md="9">
        <BarChart :chartData="chartData" />
      </v-col>
      <v-col cols="12" md="3">
        <DoughnutChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

export default {
  name: "ChartView",

  components: {
    BarChart,
    DoughnutChart,
  },
  data: () => ({
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },

    chartData: {
      title: "Chart Title Here",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#7B40F9",
            data: [45, 39, 80, 40, 20, 12, 11],
          },
          {
            label: "Data Two",
            // borderColor: "#A981FF",
            backgroundColor: "#A981FF",
            data: [40, 20, 12, 39, 10, 40, 39],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "x",
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
          },
        },
      },
    },
  }),
};
</script>

<style scoped>
/* * {
    border: 1px solid gray;
  } */
</style>
