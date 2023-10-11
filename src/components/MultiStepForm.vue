<template>
  <v-card flat class="px-0">
    <v-stepper flat v-model="activeStep" vertical>
      <div v-for="(num, i) in 5" :key="i">
        <v-stepper-step
          :color="color.primary"
          :complete="activeStep > i + 1"
          :step="i + 1"
        >
          <!-- if index is equla to length - 1, go back to stepper 1 or submit -->
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content class="pl-0 py-0 pr-0 my-0 mx-4 ml-md-12" :step="i + 1">
          <v-card flat class="pa-3" color="#FCFCFC">
            <v-form>
              <div v-for="(num, i) in 3" :key="i">
                <p class="mb-1 text-subtitle-2">Label Here</p>
                <v-text-field
                  outlined
                  dense
                  placeholder="Text Field"
                ></v-text-field>
              </div>
            </v-form>

            <v-card-actions class="px-0">
              <v-btn
                elevation="0"
                class="ml-auto ml-md-0"
                @click="
                  activeStep === 1
                    ? (activeStep = 1)
                    : (activeStep = activeStep - 1)
                "
              >
                <!-- Previous -->
                <v-icon :color="color.primary">mdi-chevron-double-left</v-icon>
              </v-btn>
              <v-btn elevation="0" @click="activeStep = activeStep + 1">
                <!-- {{ i === 4 ? 'Submit' : 'Next' }} -->
                <v-icon :color="color.primary">mdi-chevron-double-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
      </div>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  name: "MultiStepForm",
  data: () => ({
    activeStep: 1,

    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped>
/* * {
      border: 1px solid gray;
    } */
</style>
