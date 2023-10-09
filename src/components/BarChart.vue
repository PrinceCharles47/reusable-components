<template>
  <v-card flat class="px-4 pb-4">
    <v-card-title class="px-0">{{
      chartData.title !== undefined ? chartData.title : "Chart Title"
    }}</v-card-title>

    <v-row dense>
      <v-col cols="12">
        <div
          class="container"
          style="border: 1px solid #f0f0f0; border-radius: 5px"
        >
          <Bar
            v-if="loaded"
            :data="chartData.data"
            :options="chartData.options"
            :key="chartKey"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        v-for="(num, i) in 2"
        :key="i"
      >
        <v-card flat outlined>
          <v-card-title>147</v-card-title>
          <v-card-subtitle>Title here</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
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
border: 1px solid gray;
} */
</style>
