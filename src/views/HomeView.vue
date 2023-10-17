<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="9">
        <Table :tableDetails="tableDetails" :filter="filter" />
      </v-col>
      <v-col cols="12" md="3">
        <v-card outlined>
          <v-card-title>Card</v-card-title>
          <v-card-text>
            <div v-for="(num, i) in 5" :key="i">
              <v-divider></v-divider>
              <p class="text-body-1 mb-0 mt-3">Lorem ipsum dolor sit, amet consectetur</p>
              <p class="text-subtitle-2">Lorem ipsum dolor sit</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <Table :tableDetails="tableDetails" :filter="filter" :buttonFunction="test" /> -->
  </v-container>
</template>

<script>
import Table from "../components/Table";

export default {
  name: "Home",

  components: {
    Table,
  },
  data: () => ({
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
  }),

  methods: {
    test: function (item) {
      alert(item);
    },
  },

  mounted() {
    const sample = process.env.VUE_APP_NUTRITIONIX;
    console.log(sample);
  },
};
</script>

<style scoped>
/* * {
  border: 1px solid gray;
} */
</style>
