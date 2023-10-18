<template>
  <v-container>
    <Loading v-if="!isPageLoaded" />
    <v-row v-if="isPageLoaded">
      <v-col cols="12" md="9">
        <BarChart class="mb-6" :chartData="barChartData" />
        <Table :tableDetails="tableDetails" :filter="filter" />
      </v-col>
      <v-col cols="12" md="3">
        <v-card outlined class="pb-4 px-2">
          <v-card-title>Card</v-card-title>
          <v-card
            v-for="(num, i) in 5"
            :key="i"
            @click="test(num)"
            class="d-flex py-3 px-2 align-start card-item"
            flat
          >
            <v-card
              flat
              min-width="100"
              class="d-flex flex-column align-center"
            >
              <v-card-title class="pa-0 mb-4 text-subtitle-1 font-weight-bold"
                >10</v-card-title
              >
              <v-card-subtitle class="py-0 text-caption"
                >September</v-card-subtitle
              >
            </v-card>
            <v-divider vertical class="ml-2 mr-4"></v-divider>
            <div>
              <!-- <v-divider></v-divider> -->
              <p class="text-body-2 mb-0">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p class="text-caption mb-0">Lorem ipsum dolor sit</p>
            </div>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <!-- <Table :tableDetails="tableDetails" :filter="filter" :buttonFunction="test" /> -->
  </v-container>
</template>

<script>
import Table from "../components/Table";
import BarChart from "../components/BarChart";
import Loading from "@/components/Loading.vue";

export default {
  name: "Home",

  components: {
    Table,
    BarChart,
    Loading,
  },
  data: () => ({
    isPageLoaded: false,
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },

    filter: {
      isFilter: true,
      columnsToFilter: [
        {
          columnValue: "specialization",
          filteredArray: [],
        },
        {
          columnValue: "hospital",
          filteredArray: [],
        },
      ],
    },

    tableDetails: {
      title: "Healthcare Providers",

      color: {
        primary: "#7B40F9",
        secondary: "#A981FF",
      },

      // withRedirect: {
      //   to: "chart",
      // },

      actions: [
        {
          name: "View",
          color: "#7B40F9",
        },
      ],

      headers: [
        { text: "Doctor", value: "name", width: "25%" },
        { text: "Specialization", value: "specialization", width: "25" },
        { text: "Hospital/Clinic", value: "hospital", width: "35%" },
        { text: "Action", value: "action", width: "15%" },
      ],

      items: [
        {
          name: "Dr. Sarah Johnson",
          specialization: "Pediatrician",
          hospital: "Sunshine Pediatrics Clinic",
          random: 1,
        },
        {
          name: "Dr. Emily Davis",
          specialization: "Pediatrician",
          hospital: "Oakview Ortho Center",
          random: 20,
        },
        {
          name: "Dr. Emily Davis",
          specialization: "Orthopedic Surgeon",
          hospital: "Oakview Ortho Center",
          random: 2,
        },
        {
          name: "Dr. Michael Wilson",
          specialization: "Dermatologist",
          hospital: "Clear Skin Clinic",
          random: 3,
        },
        {
          name: "Dr. Linda Lee",
          specialization: "Neurologist",
          hospital: "NeuroCare Hospital",
          random: 4,
        },
        {
          name: "Dr. Robert Brown",
          specialization: "Ophthalmologist",
          hospital: "VisionCare Eye Center",
          random: 5,
        },
        {
          name: "Dr. Maria Garcia",
          specialization: "Gynecologist",
          hospital: "Women's Health Clinic",
          random: 6,
        },
        {
          name: "Dr. David Turner",
          specialization: "ENT Specialist",
          hospital: "Sound Ear and Throat Clinic",
          random: 7,
        },
        {
          name: "Dr. Jennifer White",
          specialization: "Psychiatrist",
          hospital: "Mental Wellness Center",
          random: 8,
        },
        {
          name: "Dr. James Miller",
          specialization: "General Surgeon",
          hospital: "City General Hospital",
          random: 9,
        },
        {
          name: "Dr. John Smith",
          specialization: "Cardiologist",
          hospital: "City Heart Hospital",
          random: 10,
        },
        {
          name: "Dr. Sarah Johnson",
          specialization: "Pediatrician",
          hospital: "Sunshine Pediatrics Clinic",
          random: 11,
        },
        {
          name: "Dr. Emily Davis",
          specialization: "Orthopedic Surgeon",
          hospital: "Oakview Ortho Center",
          random: 12,
        },
        {
          name: "Dr. Michael Wilson",
          specialization: "Dermatologist",
          hospital: "Clear Skin Clinic",
          random: 13,
        },
        {
          name: "Dr. Linda Lee",
          specialization: "Neurologist",
          hospital: "NeuroCare Hospital",
          random: 14,
        },
        {
          name: "Dr. Robert Brown",
          specialization: "Ophthalmologist",
          hospital: "VisionCare Eye Center",
          random: 15,
        },
        {
          name: "Dr. Maria Garcia",
          specialization: "Gynecologist",
          hospital: "Women's Health Clinic",
          random: 16,
        },
        {
          name: "Dr. David Turner",
          specialization: "ENT Specialist",
          hospital: "Sound Ear and Throat Clinic",
          random: 17,
        },
        {
          name: "Dr. Jennifer White",
          specialization: "Psychiatrist",
          hospital: "Mental Wellness Center",
          random: 18,
        },
        {
          name: "Dr. James Miller",
          specialization: "General Surgeon",
          hospital: "City General Hospital",
          random: 19,
        },
      ],
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
  }),

  methods: {
    test: function (item) {
      alert(item);
    },
  },

  mounted() {
    const sample = process.env.VUE_APP_NUTRITIONIX;
    console.log(sample);

    let myInterval = setInterval(() => {
      this.barChartData.data.datasets[0].data = [45, 39, 80, 40, 20, 12, 11];
      this.barChartData.data.datasets[1].data = [40, 20, 12, 39, 10, 40, 39];

      this.isPageLoaded = true;
      clearInterval(myInterval);
    }, 1000);
  },
};
</script>

<style scoped>
/* * {
  border: 1px solid gray;
} */

.card-item:hover{
  transition: .25s;
  background-color: whitesmoke;
  color: black;
}
</style>
