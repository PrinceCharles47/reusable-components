<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="12">
        <MultiStepForm :formDetails="formDetails" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MultiStepForm from "../components/MultiStepForm";
import {rules} from "../utils/rules"

export default {
  name: "MultiStepFormView",

  components: {
    MultiStepForm,
  },
  data: () => ({
    formDetails: [
      {
        sectionName: "Basic Details",
        sectionFields: [
          {
            title: "Full Name",
            rowFields: [
              {
                label: "First Name",
                type: "text field",
                placeholder: "Cathlyn Mae",
                model: "",
              },
              {
                label: "Middle Name",
                type: "text field",
                placeholder: "De Guzman",
                model: "",
              },
              {
                label: "Last Name",
                type: "text field",
                placeholder: "Lapid",
                model: "",
              },
            ],
          },

          {
            rowFields: [
              {
                label: "Date of Birth",
                type: "text field",
                placeholder: "",
                model: "",
              },
              {
                label: "Gender",
                type: "text field",
                placeholder: "",
                model: "",
              },
            ],
          },

          {
            title: "Contact Details",
            rowFields: [
              {
                label: "Mobile Number",
                type: "number",
                placeholder: "",
                model: "",
              },
              {
                label: "Email",
                type: "email",
                placeholder: "sample@gmail.com",
                model: "",
              },
            ],
          },
        ],
      },

      {
        sectionName: "Personal Information",
        sectionFields: [
          {
            title: "Complete Address",
            rowFields: [
              {
                label: "House Number",
                type: "Number",
                placeholder: "",
                model: "",
              },
              {
                label: "Street",
                type: "text field",
                placeholder: "",
                model: "",
              },
              {
                label: "Barangay",
                type: "text field",
                placeholder: "",
                model: "",
              },
              {
                label: "Municipality",
                type: "text field",
                placeholder: "",
                model: "",
              },
              {
                label: "Province",
                type: "text field",
                placeholder: "",
                model: "",
              },
            ],
          },

          {
            title: "Mother's Name",
            rowFields: [
              {
                label: "First Name",
                type: "text field",
                placeholder: "Cathlyn Mae",
                model: "",
              },
              {
                label: "Middle Name",
                type: "text field",
                placeholder: "De Guzman",
                model: "",
              },
              {
                label: "Last Name",
                type: "text field",
                placeholder: "Lapid",
                model: "",
              },
            ],
          },

          {
            title: "Father's Name",
            rowFields: [
              {
                label: "First Name",
                type: "text field",
                placeholder: "Cathlyn Mae",
                model: "",
              },
              {
                label: "Middle Name",
                type: "text field",
                placeholder: "De Guzman",
                model: "",
              },
              {
                label: "Last Name",
                type: "text field",
                placeholder: "Lapid",
                model: "",
              },
            ],
          },
        ],
      },
    ],
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped></style>
