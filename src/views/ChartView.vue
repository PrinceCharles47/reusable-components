<template>
  <v-container>
    <Loading v-if="!isPageLoaded" />
    <div v-if="isPageLoaded">
      <v-row dense>
        <v-col cols="12" md="4" v-for="(num, i) in 3" :key="i">
          <AnalyticsCard />
        </v-col>
      </v-row>

      <v-row class="mb-6 mt-4">
        <v-col cols="12" md="9">
          <BarChart :chartData="barChartData" />
          <DoughnutChartV2 class="mt-6" :chartData="doughnutChartDataV2" />
        </v-col>
        <v-col cols="12" md="3">
          <DoughnutChart :chartData="doughnutChartData" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import DoughnutChartV2 from "../components/DoughnutChartV2";
import AnalyticsCard from "../components/AnalyticsCard";
import Loading from "@/components/Loading.vue";

export default {
  name: "ChartView",

  components: {
    BarChart,
    DoughnutChart,
    DoughnutChartV2,
    AnalyticsCard,
    Loading,
  },
  data: () => ({
    isPageLoaded: false,
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },

    //Bar Chart ###########################################################3
    barChartData: {
      title: "Bar Chart",
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
            backgroundColor: "#3A0394",
            data: [],
          },
          {
            label: "Data Two",
            backgroundColor: "#A981FF",
            data: [],
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

    //Doughnut Chart #######################################################
    doughnutChartData: {
      title: "Doughnut Chart",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#1BD6FF", "#711BFF", "#BB2FFD", "#FF68C3"],
            data: [],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
          },
        },
      },
    },

    doughnutChartDataV2: {
      // title: "Chart Title Here",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#1BD6FF", "#711BFF", "#BB2FFD", "#FF68C3"],
            data: [],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
          },
        },
      },
    },
  }),

  async mounted() {
    let myInterval = setInterval(() => {
      this.barChartData.data.datasets[0].data = [45, 39, 80, 40, 20, 12, 11];
      this.barChartData.data.datasets[1].data = [40, 20, 12, 39, 10, 40, 39];
      this.doughnutChartData.data.datasets[0].data = [40, 20, 12, 39];
      this.doughnutChartDataV2.data.datasets[0].data = [40, 20, 12, 39];

      this.isPageLoaded = true;
      clearInterval(myInterval);
    }, 1000);
  },
};
</script>

<style scoped>
/* * {
    border: 1px solid whitesmoke;
  } */
</style>
