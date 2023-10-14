<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card class="pa-0 pb-4">
        <v-card-subtitle
          flat
          :color="color.secondary"
          class="white--text text-subtitle-1 font-weight-bold mb-4 mx-0"
          id="form-title-1"
          >FILTER ITEMS</v-card-subtitle
        >

        <v-form ref="form" class="px-4">
          <!-- <v-card-title class="pb-0 px-0 mb-4" id="form-title">Form</v-card-title> -->

          <p class="mb-0 text-subtitle-2">Text Field</p>
          <v-text-field outlined dense placeholder="Text Field"></v-text-field>

          <p class="mb-0 text-subtitle-2">Text Area</p>
          <v-textarea outlined dense placeholder="Text Area"></v-textarea>

          <p class="mb-0 text-subtitle-2">Autocomplete</p>
          <v-autocomplete
            outlined
            dense
            placeholder="Autocomplete"
          ></v-autocomplete>
        </v-form>

        <v-card-actions class="px-4">
          <v-btn :color="color.primary" outlined class="px-8"
            >Extra
          </v-btn>

          <v-btn :color="color.primary" class="white--text px-8">Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card flat class="pa-0 pb-4">
        <v-form ref="form" class="px-4">
          <v-card-title class="pb-2 px-0 mb-6" id="form-title-2"
            >Form</v-card-title
          >

          <p class="mb-0 text-subtitle-2">Text Field</p>
          <v-text-field outlined dense placeholder="Text Field"></v-text-field>

          <p class="mb-0 text-subtitle-2">Text Area</p>
          <v-textarea outlined dense placeholder="Text Area"></v-textarea>

          <p class="mb-0 text-subtitle-2">Autocomplete</p>
          <v-autocomplete
            outlined
            dense
            placeholder="Autocomplete"
          ></v-autocomplete>
        </v-form>

        <v-card-actions class="px-4">
          <v-btn :color="color.primary" outlined class="px-8"
            >Extra
          </v-btn>

          <v-btn :color="color.primary" class="white--text px-8">Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Form",

  data: () => ({
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

#form-title-1 {
  background-color: #a981ff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#form-title-2 {
  border-bottom: 2px solid #a981ff;
}

#form-title-3 {
  color: #7b40f9;
  font-weight: bold;
}
</style>
