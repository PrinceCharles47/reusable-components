<template>
  <v-container>
    <v-row>
      <v-col md="9">
        <Table :tableDetails="tableDetails" :filter="filter" />
      </v-col>
      <v-col md="3">
        <p>{{ this.$route.params }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Table from "../components/Table";

export default {
  name: "About",

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
      color: {
        primary: "#7B40F9",
        secondary: "#A981FF",
      },

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
        },
        {
          name: "Dr. Emily Davis",
          specialization: "Orthopedic Surgeon",
          hospital: "Oakview Ortho Center",
        },
        {
          name: "Dr. Michael Wilson",
          specialization: "Dermatologist",
          hospital: "Clear Skin Clinic",
        },
        {
          name: "Dr. Linda Lee",
          specialization: "Neurologist",
          hospital: "NeuroCare Hospital",
        },
        {
          name: "Dr. Robert Brown",
          specialization: "Ophthalmologist",
          hospital: "VisionCare Eye Center",
        },
        {
          name: "Dr. Maria Garcia",
          specialization: "Gynecologist",
          hospital: "Women's Health Clinic",
        },
        {
          name: "Dr. David Turner",
          specialization: "ENT Specialist",
          hospital: "Sound Ear and Throat Clinic",
        },
        {
          name: "Dr. Jennifer White",
          specialization: "Psychiatrist",
          hospital: "Mental Wellness Center",
        },
        {
          name: "Dr. James Miller",
          specialization: "General Surgeon",
          hospital: "City General Hospital",
        },
        {
          name: "Dr. John Smith",
          specialization: "Cardiologist",
          hospital: "City Heart Hospital",
        },
        {
          name: "Dr. Sarah Johnson",
          specialization: "Pediatrician",
          hospital: "Sunshine Pediatrics Clinic",
        },
        {
          name: "Dr. Emily Davis",
          specialization: "Orthopedic Surgeon",
          hospital: "Oakview Ortho Center",
        },
        {
          name: "Dr. Michael Wilson",
          specialization: "Dermatologist",
          hospital: "Clear Skin Clinic",
        },
        {
          name: "Dr. Linda Lee",
          specialization: "Neurologist",
          hospital: "NeuroCare Hospital",
        },
        {
          name: "Dr. Robert Brown",
          specialization: "Ophthalmologist",
          hospital: "VisionCare Eye Center",
        },
        {
          name: "Dr. Maria Garcia",
          specialization: "Gynecologist",
          hospital: "Women's Health Clinic",
        },
        {
          name: "Dr. David Turner",
          specialization: "ENT Specialist",
          hospital: "Sound Ear and Throat Clinic",
        },
        {
          name: "Dr. Jennifer White",
          specialization: "Psychiatrist",
          hospital: "Mental Wellness Center",
        },
        {
          name: "Dr. James Miller",
          specialization: "General Surgeon",
          hospital: "City General Hospital",
        },
      ],
    },
  }),
};
</script>

<style scoped>
/* * {
  border: 1px solid gray;
} */
</style>
