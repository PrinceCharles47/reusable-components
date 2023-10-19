<template>
  <div>
    <v-stepper flat v-model="activeStep" vertical>
      <div v-for="(formDetail, i) in formDetails" :key="i">
        <v-stepper-step
          :color="color.primary"
          :complete="activeStep > i + 1"
          :step="i + 1"
        >
          <!-- if index is equal to length - 1, go back to stepper 1 or submit -->
          {{ formDetail.sectionName }}
        </v-stepper-step>

        <!-- Contains the form itself -->
        <v-stepper-content
          class="pl-0 py-0 pr-0 my-0 mx-4 ml-md-12"
          :step="i + 1"
        >
          <v-card flat class="pa-3">
            <v-form>
              <v-row
                class="py-2 mt-1"
                v-for="(sectionField, i) in formDetail.sectionFields"
                :key="i"
              >
                <v-col cols="12" class="py-0">
                  <v-divider></v-divider>
                  <v-card-subtitle
                    :style="`color: ${color.primary};`"
                    class="pa-0 my-2 font-weight-bold text-subtitle-1"
                    >{{ sectionField.title }}</v-card-subtitle
                  >
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="py-0"
                  v-for="(rowField, i) in sectionField.rowFields"
                  :key="i"
                >
                  <p class="mb-0 text-subtitle-2">{{ rowField.label }}</p>
                  <v-text-field
                    outlined
                    dense
                    :placeholder="rowField.placeholder"
                    v-model="rowField.model"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>

            <v-card-actions
              class="px-0"
              v-if="activeStep === formDetails.length"
            >
              <v-btn
                :color="color.primary"
                outlined
                class="px-8"
                @click="
                  activeStep === 1
                    ? (activeStep = 1)
                    : (activeStep = activeStep - 1)
                "
                >Previous
              </v-btn>

              <v-btn :color="color.primary" class="white--text px-8"
                >Submit
              </v-btn>
            </v-card-actions>

            <v-card-actions v-else class="px-0">
              <!-- Previous step button-->
              <v-btn
                elevation="0"
                class="ml-auto ml-md-0"
                @click="
                  activeStep === 1
                    ? (activeStep = 1)
                    : (activeStep = activeStep - 1)
                "
              >
                <v-icon :color="color.primary">mdi-chevron-double-left</v-icon>
              </v-btn>

              <!-- Next step button -->
              <v-btn elevation="0" @click="activeStep = activeStep + 1">
                <v-icon :color="color.primary">mdi-chevron-double-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
      </div>
    </v-stepper>
  </div>
</template>

<script>
//##################################################################
// PROPS:
// formDetails: [
//   {
//     sectionName: String (Name of a section/part of the form),
//     sectionFields: [ (Form fields for each section)
//       {
//         title: String (Title of a group of form fields),
//         rowFields: [ (Form fields for each group of form fields)
//           {
//             label: String,
//             type: Form type (e.g. text field, text area),
//             placeholder: String,
//             model: empty string (will contain the form value),
//           }
//         ],
//       }
//      ]
//    }
// ];


export default {
  name: "MultiStepForm",
  props: {
    formDetails: Array,
  },
  data: () => ({
    activeStep: 1,

    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped></style>
