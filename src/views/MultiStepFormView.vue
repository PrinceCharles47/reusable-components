<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="9">
        <MultiStepForm :formDetails="formDetails" />
      </v-col>
      <v-col cols="12" md="3">
        <v-card
          flat
          class="pa-3 mb-2"
          v-for="(formDetail, i) in formDetails"
          :key="i"
        >
          <v-card flat class="pb-4 px-0" id="container-card">
            <v-toolbar
              flat
              class="text-h6 mb-5"
              :style="`border-bottom: 3px solid ${color.secondary};`"
            >
              <v-card-subtitle class="text-subtitle-1 font-weight-bold pa-0">{{
                formDetail.sectionName
              }}</v-card-subtitle>
            </v-toolbar>

            <v-row
              dense
              v-for="(sectionField, i) in formDetail.sectionFields"
              :key="i"
            >
              <v-col
                cols="12"
                v-for="(rowField, i) in sectionField.rowFields"
                :key="i"
              >
                <v-card-text class="py-0">
                  <p class="text-subtitle-2 font-weight-bold mb-0">
                    {{ rowField.label }}
                  </p>
                  <p class="text-subtitle-2 font-weight-regular">
                    {{ rowField.model }}
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MultiStepForm from "../components/MultiStepForm";

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
